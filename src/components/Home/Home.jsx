import React from 'react';
import DashBoard from '../DashBoard/DashBoard';


const Home = () => {


    return (
        <div>
            <h2 className=' text-5xl mt-10 font-bold'>Apple School</h2>


            <div className='flex'>
                <img className='w-3/4 mt-5 md:ml-0 mx-auto' src="https://royalcrownschool.com/wp-content/uploads/2020/02/Things-for-High-School-Students-during-Summer-768x468.jpg" alt="" />

                <DashBoard></DashBoard>

                <div>

                </div>

            </div>



        </div>
    );
};

export default Home;