import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import { BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'

const SiteCart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='w-96 text-white  bg-slate-700 px-5 border rounded-lg'>
            <h1 className='text-2xl text-white'>Students Area</h1>
            <hr />
            <br />
            <p className='text-2xl'>Selected : {cart.length}</p>

            {
                cart.map(st => <p className='text-2xl border my-2 rounded shadow-lg'
                    key={st.id}>

                    {st.name}

                    < button className='ml-5 my-5 border hover:bg-red-500 duration-500 w-5 h-5 rounded'
                        onClick={() => handleRemoveFromCart(st.id)}
                    ><XMarkIcon></XMarkIcon></button>

                </p>)
            }

        </div>
    );
};

export default SiteCart;