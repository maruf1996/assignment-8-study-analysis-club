import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import SubjectDetails from '../SubjectDetails/SubjectDetails';
import './Subjects.css';

const Subjects = () => {
    const [subjects,setSubjects]=useState([]);
    const [selectItem,setSelectItem]=useState([]);

    useEffect(()=>{
        fetch('subject.json')
        .then(res=>res.json())
        .then(data=>setSubjects(data))
    },[]);

    const handleAddList=selectedItem=>{
        // console.log(selectItem);
        const newItem=[...selectItem,selectedItem];
        setSelectItem(newItem);
    }

    return (
        <div className='section_container'>
            <div className="subject_container">
                {
                    subjects.map(subject=><Subject
                    key={subject.id}
                    subject={subject}
                    handleAddList={handleAddList}
                    ></Subject>)
                }
            </div>
            <div className="details_container">
                <SubjectDetails
                subjects={subjects}
                selectItem={selectItem}
                ></SubjectDetails>
            </div>
        </div>
    );
};

export default Subjects;