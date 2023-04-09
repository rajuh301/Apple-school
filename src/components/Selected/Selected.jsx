import React from 'react';

const Selected = () => {

    const data = localStorage.getItem('cart');
    const result = JSON.parse(data)

    return (
        <div className=''>
            <p className='text-6xl mt-5 font-semibold'>Selected students are: {result.length}</p>
            {
                result.map(data =>

                    <div className='flex text-4xl m-8 border shadow-lg w-[500px] rounded mx-auto p-2'>
                        <img className='w-20 rounded' src={data.picture} alt="" />
                        <h2 className='ml-2'> {data.name}</h2>

                       


                    </div>)
            }
        </div>
    );
};

export default Selected;