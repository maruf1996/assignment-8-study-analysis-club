import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFakeData, setFakeData } from '../../FakeDb/FakeDb';
import maruf from '../../image/maruf.png';
import './SubjectDetails.css';

const SubjectDetails = ({selectItem,subjects}) => {
    const [selectTime,setSelectTime]=useState(null)

    let time=0;
    for(const subject of selectItem){
        time=time+subject.time;
    }

    const handleBreakTime=subject=>{
        const breakTime=subject.break;
        setSelectTime(breakTime);
        setFakeData('break',breakTime)
    }

    const fakeData=getFakeData('break');

    const toasty = () => toast("Activity Completed!");
    
    return (
        <div className='position'>
            <div className="about">
                    <img src={maruf} alt="" className='personImg'/>
                    <div className="mt-3 text-center text-md-start text-lg-start">
                    <h5 className='name'>Maruf Billah</h5>
                    <p className='location'>Barishal, Bangladesh.</p>
                    </div>
                </div>
                <div className="study_details">
                    <h5 className='mt-2 fw-bold'>Student:</h5>
                    <h6 className='mt-2'>Pragramming Hero Web Course</h6>
                </div>
                <div className="break_details">
                    <h5 className='ms-1 fw-bold mb-3'>Add a Break</h5>
                    <div className="d-flex align-items-center justify-content-between">
                        {
                            subjects.slice(0,4).map(subject=><p 
                                key={subject.id}
                            ><button 
                                onClick={()=>handleBreakTime(subject)} className='btn'>{subject.break}m
                                </button></p>)
                        }
                    </div>
                </div>
                <div className="mt-5">
                    <h5 className='fw-bold mb-4'>Study Details</h5>
                    <div className="d-flex align-items-center justify-content-between details">
                        <p className='fw-bold'>Study Time</p>
                        <p><span>{time}</span> hrs</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between details">
                        <p className='fw-bold'>Break Time</p>
                        <p>{!selectTime?<span id='break_time_field'>{fakeData}</span>:
                        <span id='break_time_field'>{selectTime}</span>} min</p>
                    </div>
                </div>
                <div className="mt-5">
                    <button onClick={toasty} className='btn btn-info text-light w-100 p-2 fw-bold'>Activity Completed</button>
                    <ToastContainer />
                </div>
        </div>
    );
};

export default SubjectDetails;