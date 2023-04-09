import React, { useContext } from 'react';
import { json } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {

    const studentAge = [
        {
            "id": "6430eb4aaf34ac70a93ad355",
            "balance": "$3,191.19",
            "picture": "https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg",
            "age": 5,
            "mark": 4,
            "name": "Ginger Le",
            "gender": "female",
            "email": "gingerle@lunchpod.com",
            "phone": "+1 (994) 482-2219",
            "address": "832 Rapelye Street, Ernstville, Oregon, 9520"
        },
        {
            "id": "6430eb4ac25700a1bc4b094e",
            "balance": "$3,329.82",
            "picture": "https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY=",
            "age": 33,
            "mark": 25,
            "name": "Darcy Randall",
            "gender": "female",
            "email": "darcyrandall@lunchpod.com",
            "phone": "+1 (837) 431-2319",
            "address": "549 Locust Street, Austinburg, Indiana, 7723"
        },
        {
            "id": "6430eb4ac7f1c41561267822",
            "balance": "$1,621.51",
            "picture": "https://media.istockphoto.com/id/1159419939/photo/brunette-female-student-with-notes-and-backpack.jpg?s=612x612&w=0&k=20&c=Ncn34jMlx7FduiFdhNKQZYkDaWLH-jm7SYkLmCT8uyE=",
            "age": 39,
            "mark": 38,
            "name": "Dorothy Brock",
            "gender": "female",
            "email": "dorothybrock@lunchpod.com",
            "phone": "+1 (809) 472-3548",
            "address": "578 Hicks Street, Caln, Georgia, 5990"
        },
        {
            "id": "6430eb4a781beabfec60d080",
            "balance": "$3,227.59",
            "picture": "https://st.depositphotos.com/1662991/54077/i/600/depositphotos_540776418-stock-photo-beautiful-caucasian-student-feeling-cheerful.jpg",
            "age": 31,
            "mark": 85,
            "name": "Lara Mcfadden",
            "gender": "female",
            "email": "laramcfadden@lunchpod.com",
            "phone": "+1 (817) 559-3520",
            "address": "634 Beadel Street, Coral, North Carolina, 6026"
        },
        {
            "id": "6430eb4a9b9b2ce7c19d5f7f",
            "balance": "$2,502.84",
            "picture": "https://media.istockphoto.com/id/1187194352/photo/teenager-boy-wearing-headphones-and-using-smartphone-over-isolated-background-surprised-with.jpg?s=612x612&w=0&k=20&c=rKxp9erb1rc3CCliHTfs7ANtlIB6Ihr0JvMwLEedGhE=",
            "age": 32,
            "mark": 75,
            "name": "Bowen Roberts",
            "gender": "male",
            "email": "bowenroberts@lunchpod.com",
            "phone": "+1 (842) 452-3061",
            "address": "141 Balfour Place, Succasunna, West Virginia, 8026"
        },
        {
            "id": "6430eb4a9846c066c6541e2f",
            "balance": "$1,424.71",
            "picture": "https://t4.ftcdn.net/jpg/04/24/15/27/360_F_424152729_5jNBK6XVjsoWvTtGEljfSCOWv4Taqivl.jpg",
            "age": 22,
            "mark": 35,
            "name": "Catherine Miranda",
            "gender": "female",
            "email": "catherinemiranda@lunchpod.com",
            "phone": "+1 (805) 562-3959",
            "address": "924 Rockaway Parkway, Valle, Connecticut, 5279"
        },
        {
            "id": "6430eb4a5991a62d36c921e3",
            "balance": "$2,628.25",
            "picture": "https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU=",
            "age": 25,
            "mark": 45,
            "name": "Summer England",
            "gender": "female",
            "email": "summerengland@lunchpod.com",
            "phone": "+1 (807) 546-3572",
            "address": "901 Elm Place, Wheaton, Oklahoma, 2156"
        }
    ]


    return (
        <div className='md:mt-20 mt-52 md:static fixed '>
            <h2 className='text-2xl md:mt-0 mt-5 md:mr-0 mr-36'>Students activities</h2>

            <LineChart
                width={600}
                height={300}
                data={studentAge}
            >
                <Line type="monotone" dataKey="age" stroke="#8884d8" />

                <Line type="monotone" dataKey="mark" stroke="#8884d8" />


             
                <YAxis></YAxis>
                <XAxis></XAxis>
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default DashBoard;