import { useEffect, useState } from 'react';

import ImageGalleryItem from '@/components/ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import Loader from '@/components/Loader/Loader';
import Modal from '@/components/Modal/Modal';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import { useCustomContext } from '@/contexts/Provider';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { ImageItem, ImageList } from './ImageGallery.styled';

const ImageGallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalImages, setTotalImages] = useState(null);
  const { value } = useCustomContext();

  useEffect(() => {
    if (value !== null) {
      setImages([]);
      setCurrentPage(1);
    }
  }, [value]);

  useEffect(() => {
    if (!value) return;
    const fetchImagesAndPhoto = async () => {
      try {
        setShowLoader(true);
        const { hits, totalHits } = await api.fetchImages(value, currentPage);
        if (!hits.length) {
          toast.error('Please, enter a proper query!');
        }
        setImages(images => [...images, ...hits]);
        setTotalImages(totalHits);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setShowLoader(false);
      }
    };

    fetchImagesAndPhoto();
  }, [currentPage, value]);

  useEffect(() => {
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [images.length]);

  const loadMoreImages = () => {
    if (images.length >= totalImages) {
      return toast.error('There is no more images to show');
    }

    setCurrentPage(currentPage => currentPage + 1);
  };

  const toggleModal = index => {
    setShowModal(!showModal);
    setActiveImageIndex(index);
  };

  return (
    <>
      {images.length > 1 && (
        <>
          <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
              <ImageItem key={id} onClick={() => toggleModal(index)}>
                <ImageGalleryItem
                  imageUrl={webformatURL}
                  modalImageUrl={largeImageURL}
                  imageDescription={tags}
                />
              </ImageItem>
            ))}
          </ImageList>
          <ScrollToTopButton />
        </>
      )}

      {!showLoader && images.length > 1 && (
        <LoadMoreButton onSearch={loadMoreImages} />
      )}

      {showLoader && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          {
            <img
              src={images[activeImageIndex].largeImageURL}
              alt={images.tags}
            />
          }
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
