import {Link} from 'react-router-dom';

const BookTile = (singleBookObject) => {
    return (
        <Link to={`/book/${singleBookObject.id}`} onClick={() => {window.scrollTo(0, 0)}}>
            <div className='tileSquare'>
            <h3 className='tileTitle'>{singleBookObject.details.Title}</h3>
            <img className='tileImage' src={singleBookObject.details.Image} alt={`SF masterworks cover of ${singleBookObject.details.Title}`}/>
            </div>
        </Link>
    )
}

export default BookTile