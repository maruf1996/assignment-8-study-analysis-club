import React from 'react';
import './Subject.css';

const Subject = (props) => {
    // console.log(props);
    const {name,author,page,time,img}=props.subject;
    const {handleAddList,subject}=props;
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title mb-4 fw-bold">{name}</h6>
                <h6 className="card-text mb-3 fw-bold">Author: {author}</h6>
                <h6 className="card-text mb-3 fw-bold">Pages: {page}</h6>
                <h6 className="card-text mb-4 fw-bold">Time Required: {time} hrs</h6>
                <button onClick={()=>{handleAddList(subject)}} className='btn btn-info w-100 text-light fw-bold'>Add to List</button>
            </div>
        </div>
    );
};

export default Subject;