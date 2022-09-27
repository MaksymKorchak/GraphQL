import { useQuery,useMutation } from '@apollo/client';
import { useState } from 'react';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';


const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading:authorsLoading, data } = useQuery(getAuthorsQuery);
    const [bookMutation, {loading:mutationLoading}] = useMutation(addBookMutation);

    const displayAuthors = () => {
        return (
            authorsLoading 
                ? <option disabled>Loading authors...</option> 
                : data.authors.map(author => { 
                    return (
                        <option key={ author.id } value={ author.id }>
                            { author.name }
                        </option>
                    )
                })
        )   
             
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        bookMutation({
            variables:{
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }

    return (
        <form id="add-book" onSubmit = { handleSubmit }>

            <div className="field">
                <label>Book name:</label>
                <input required type="text" value={ name } onChange = {(e) => setName(e.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input required type="text" value={ genre } onChange = {(e) => setGenre(e.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select required onChange = {(e) => setAuthorId(e.target.value)}>
                <option selected disabled defaultValue="">Choose Author</option>
                    { displayAuthors() }
                </select>
            </div>

            <button>+</button>

        </form>
    );
  }
  
  export default AddBook;