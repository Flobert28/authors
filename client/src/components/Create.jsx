import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = (props) =>{
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const[error,setError]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length < 3){
      setError('Author name must be at least 3 characters long')
    }

    axios.post('http://localhost:8000/api/person',
     { name })
      .then(res => {
        navigate("/");
      })
      .catch(error => {
        console.error('Error adding author:', error);
      });
  };
  return(
    <div>
      <Link to={"/"}>Home</Link>
      <p>Add a new author</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
                        <button><Link to={"/"}>Cancel</Link></button>
        <button type="submit">Submit</button>
      </form>
    </div>  
    )
}

export default Create;