import React, { useState } from 'react';
import axios from 'axios';

import AuthorsForm from '../components/AuthorsForm';
import AuthorsList from '../components/AuthorsList';

const Main = (props) => {
    const [update, setUpdate] = useState(false);
    const [person, setPerson] = useState([]);

    const removeFromDom = personId => {
        setPerson(person.filter(item => item._id !== personId));
    };

    const addAuthorToList = (newAuthor) => {
        setPerson([...person, newAuthor]);
        setUpdate(!update);
    };

    return (
        <div>
            <AuthorsForm addAuthorToList={addAuthorToList} />
            <hr />
            <AuthorsList person={person} setPerson={setPerson} update={update} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;
