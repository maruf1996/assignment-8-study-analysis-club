import React from 'react';
import './QuestionAnswer.css';

const QuestionAnswer = () => {
    return (
        <div className="">
            <h2 className='text-center mb-4'>Web Development Related Question and Answer</h2>
            <div className="row row-cols-1 row-cols-md-3 row-col-lg-3 g-4 question">
            <div className="col">
                <div className="card border-info">
                    <div className="card-body">
                        <h5 className="card-title question_title">How Does React Work</h5>
                        <p className="card-text question_text">React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility its easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure. Coincidentally.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-warning">
                    <div className="card-body">
                        <h5 className="card-title question_title">Difference between State and Props</h5>
                        <p className="card-text question_text">The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.A prop can be passed on to the child in the state of a parent. </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-info">
                    <div className="card-body">
                        <h5 className="card-title question_title">useEffect use cases</h5>
                        <span className="card-text question_text">Running once on mount: fetch API dat</span>
                        <span className="card-text question_text">Running on state change: validating input field</span>
                        <span className="card-text question_text">Running on state change: live filtering</span>
                        <span className="card-text question_text">Running on state change: trigger animation on new array value</span>
                        <span className="card-text question_text">Running on props change: update paragraph list on fetched API data update</span>
                        <span className="card-text question_text">Running on props change: updating fetched API data to get BTC updated price</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default QuestionAnswer;