import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes, { object } from "prop-types";
import s from './ImageGallery.module.css';

function ImageGallery({ photos, onSelected }) {
    return (
        <ul className={s.ImageGallery}>
            {photos.map(photo => <ImageGalleryItem key={photo.user.id}
                id={photo.id}
                alt={photo.alt_description}
                url={photo.urls.regular}
                author={photo.user.name}
                description={photo.description}
                onClick={() => onSelected(photo)} />)}
        </ul>

    )
}

ImageGalleryItem.propTypes = {
    photos: PropTypes.arrayOf(object),
    onSelected: PropTypes.func
}
export default ImageGallery;