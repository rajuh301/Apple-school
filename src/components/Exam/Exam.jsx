import React, { createContext, useState } from 'react';
import SiteCart from '../SiteCart/SiteCart';
import { json, useLoaderData } from 'react-router-dom';
import Students from '../Students/Students';
import MainTitle from '../MainTitle/MainTitle';
import { toast } from 'react-hot-toast';
import DashBoard from '../DashBoard/DashBoard';

export const MoneyContext = createContext(0);


const Exam = () => {
    const students = useLoaderData();
    const [cart, setCart] = useState([]);
    const [money, setMoney] = useState(0)
    // const update = cart.slice(0,5)

    const handleAddToCart = (student) => {
        const exists = cart.find(st => st.id === student.id)

        if (exists) {
            toast('This student already added!')

        }

        else {
            const newCart = [...cart, student]
            setCart(newCart)

            const convert = JSON.stringify(newCart);
            localStorage.setItem('cart', convert)

        }
    }

    const handleRemoveFromCart = id => {
        const remove = cart.filter(st => st.id !== id)
        setCart(remove)
    }

    return (
        <div className='md:flex'>




            <div className='md:grid grid-cols-3 md:mx-5'>
                {
                    students.map(student => <Students
                        key={student.id}
                        student={student}
                        handleAddToCart={handleAddToCart}
                    ></Students>)
                }
            </div>



            <div>

                <SiteCart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></SiteCart>
            </div>

            


        </div>
    );
};

export default Exam;