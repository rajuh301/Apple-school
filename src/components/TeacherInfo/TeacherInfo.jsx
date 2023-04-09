import React from 'react';

const TeacherInfo = ({teacher}) => {
    const {name, picture, id, age, expert} = teacher;
    return (
        
        <div className='border shadow rounded-lg md:my-0 my-5'>
            <img className='w-72 h-72 mx-auto py-2' src={picture} alt="" />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Expert: {expert}</p>
            
        </div>
    );
};

export default TeacherInfo;