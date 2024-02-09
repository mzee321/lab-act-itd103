import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {

    const [BookName, setBookName] = useState()
    const [Author, setAuthor] = useState()
    const [YearPublished, setYearPublished] = useState()
    const [Publisher, setPublisher] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', {BookName, Author, YearPublished, Publisher})
        .then(res =>{
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Book Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Author</label>
                        <input
                            type="text"
                            placeholder="Enter Author"
                            className="form-control"
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year Published</label>
                        <input
                            type="text"
                            placeholder="Enter Publish Year"
                            className="form-control"
                            onChange={(e) => setYearPublished(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Publisher</label>
                        <input
                            type="text"
                            placeholder="Enter Publisher"
                            className="form-control"
                            onChange={(e) => setPublisher(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;