import {Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";

function Users(){
    const {id} = useParams()

    const[data, setData] = useState([])

    useEffect(() => { 
        axios.get('http://localhost:3001/')
        .then(res =>{
            console.log(res);
            setData(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/'+ id)
            .then(res =>{
                console.log(res)   
            }).catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to ="/create" className="btn btn-success btn-sm">
                    Add +
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>YearPublished</th>
                            <th>Publisher</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((books, index) =>{
                                return <tr key={index}>
                                    <td>{books.BookName}</td>
                                    <td>{books.Author}</td>
                                    <td>{books.YearPublished}</td>
                                    <td>{books.Publisher}</td>
                                    <td>
                                        <Link to={`/edit/${books._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                                        <button onClick={() => handleDelete(books._id)} className = "btn btn-sm btn-danger">Delete</button>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;