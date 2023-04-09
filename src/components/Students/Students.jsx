import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
const Students = ({ student, handleAddToCart }) => {
    const { picture, id, name } = student;
    return (
        <div>
            <div className='border shadow-lg md:my-5 my-5 md:mx-0 mx-10 md:ml-20 rounded-lg'>
                <img className='md:w-72 h-72 ' src={picture} alt="" />
                <h2 className='text-1xl font-semibold'>Name: {name}</h2>
               
                <button className='bg-green-600 w-full rounded md:h-10 text-2xl' onClick={() => handleAddToCart(student)}>Select </button>
            </div>
            <div>
         
            </div>
        </div>
    );
};

export default Students;