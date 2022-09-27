import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

 const BookList = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const { loading, data } = useQuery(getBooksQuery);

    return (
        <div>
            <ul id="book-list">  
                {loading ? 'Loading books...' : 
                    <>
                        {data.books.map(book => {
                            return (
                                <li key={ book.id } onClick={() => setSelectedItem(book.id)}>
                                    { book.name }
                                </li>
                            )
                        })}
                    </>
                }
            </ul>
            <BookDetails bookID = {selectedItem}/>
        </div>
    );
    
  }
  
  export default BookList;
  