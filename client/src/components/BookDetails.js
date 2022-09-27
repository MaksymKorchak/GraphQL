import { getBookQuery } from '../queries/queries';
import { useQuery } from '@apollo/client';

const BookDetails = (props) => {
    
    const { bookID } = props;
  
    const {loading, data} = useQuery(getBookQuery, {
        variables: {id: bookID}
    });

    const displayBookDetails = () => {
        const { book } = data;
        if(book) {
            return (
                <div>
                    <h2>{ book.name }</h2>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item =>{
                            return (
                                <li key={ item.id }>{ item.name }</li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <p>No book selected...</p>
            )
        }
    }

    return (
        <div id="book-details">
            {data ? displayBookDetails(): '' }
        </div>
    )
}

export default BookDetails;