import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorsForm = (props) => {

    return (
      <div>
        <Link to={"/person/new"}>Add An Author</Link>        <p>We have qoutes by:</p>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>|</th>
              <th>Actions available</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    )
}
export default AuthorsForm;

