import ImageGallery from '@/components/ImageGallery/ImageGallery';
import SearchBar from '@/components/SearchBar/SearchBar';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppWrapper } from './App.styled';

const App = () => {
  return (
    <>
      <AppWrapper>
        <SearchBar />
        <ImageGallery />
      </AppWrapper>
      <ToastContainer
        position="top-right"
        transition={Zoom}
        autoClose={1500}
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
