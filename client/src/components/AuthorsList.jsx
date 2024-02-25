import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const AuthorsList = (props) => {
    const {removeFromDom,person, setPerson,update} = props;
    const deleteAuthors = (personId) => {
        axios.delete('http://localhost:8000/api/person/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/person")
    	.then((res)=>{
	    console.log(res.data);
            setPerson(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, [update]);
    
    return (
         <div>
            {
                person.map((authors, index)=>{
                return (
                    <div key={index}> {authors.name } | <Link to={"/person/edit/" + authors._id}>Edit</Link>                        <button onClick={(e)=>{deleteAuthors(authors._id)}}>
                            Delete
                        </button>
                    </div> 
                )})
                }
        </div>
    );
}
export default AuthorsList;

