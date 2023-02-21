import {Link} from 'react-router-dom';

const BookTile = (singleBookObject) => {
    return (
        <Link to={`/book/${singleBookObject.id}`}>
            <div className='bookSquare'>
            <h3>{singleBookObject.details.Title}</h3>
            <img className='bookImage' src={singleBookObject.details.Image} />
            </div>
        </Link>
    )
}

export default BookTile