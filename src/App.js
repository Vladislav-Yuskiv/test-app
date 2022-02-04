import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import LoaderSpinner from "./Components/Loader";
import Modal from "./Components/Modal";
import Button from './Components/Button';
import { useState , useEffect } from "react";

const ID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
function App (){

  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    if (value === ''){
      return;
    }
    setIsLoading(true);
        setTimeout(() => {
        fetch(`https://api.unsplash.com/search/photos/?query=${value}&page=${page}&client_id=${ID}&per_page=5`)
          .then(r => r.json())
          .then(photos => setPhotos(photos.results))
          .finally(setIsLoading(false))
        }, 1000)
    }, [page , value  ]
     
   )

 const onSubmit = (value) => {
   setValue(value);
  }

 const onClickButton = () => {
   setPage(page + 1);
   setIsLoading(true);
    setTimeout(() => {
      fetch(`https://api.unsplash.com/search/photos/?query=${value}&page=${page}&client_id=${ID}&per_page=6`)
        .then(r => r.json())

        .then(newPhotos => {
          setPhotos( [...photos, ...newPhotos.results]);
          setIsLoading(false);
        })
        .finally(scrollToTop)
    }, 1000)
  }

 const scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
 const  handleSelectImage = data => {
   setSelectedImage(data);
  }

  const closeModal = () => {
    setSelectedImage(null);
  }
   
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery photos={photos} onSelected={handleSelectImage} />
        {photos.length > 0 && !isLoading && <Button onClick={onClickButton} />}
        {selectedImage && <Modal largeImg={selectedImage.urls.full} alt={selectedImage.alt_description} closeModal={closeModal} />}
        {isLoading && <LoaderSpinner />}
      </>
    );
  }

export default App;
