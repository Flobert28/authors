import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Update = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState();
    const navigate = useNavigate();
    const[error,setError]=useState('')


    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        if(name.length < 3){
            setError('Author name must be at least 3 characters long')
            return;
          }
        axios.patch('http://localhost:8000/api/person/' + id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <p>Edit this author</p>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </p>
                <button><Link to={"/"}>Cancel</Link></button>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

