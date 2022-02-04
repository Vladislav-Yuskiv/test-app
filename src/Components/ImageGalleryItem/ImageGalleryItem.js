import PropTypes from "prop-types";
import s from './ImageGalleryItem.module.css';
function ImageGalleryItem({ id, alt, url,  author , description ,onClick }) {
    return (
        <>
            <li className={s.ImageGalleryItem} onClick={onClick} data-id={id}>
                <img src={url} alt={alt} className={s.ImageGalleryItem_image} />
                <p className={s.author}>Author: {author}</p>
                {description != null ? <p className={s.description}>Description: {description}</p> : <p className={s.sorry
                }>Sorry , description for this photo is not available!!!</p>}
            </li>

        </>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    alt: PropTypes.string,
    url: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default ImageGalleryItem;