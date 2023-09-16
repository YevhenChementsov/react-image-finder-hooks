import ImageGallery from '@/components/ImageGallery/ImageGallery';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useCustomContext } from '@/contexts/Provider';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppWrapper, ErrorMessage } from './App.styled';

const App = () => {
  const { error } = useCustomContext();

  return (
    <>
      {error ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : (
        <AppWrapper>
          <SearchBar />
          <ImageGallery />
        </AppWrapper>
      )}
      <ToastContainer
        position="top-right"
        transition={Zoom}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default App;
