import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const Teachers = () => {
    const teachers = useLoaderData();

    return (
        <div className='md:grid grid-cols-3 md:mx-52 mx-10  md:gap-20 gap-4 md:mt-10 mt-5 '>
            {
                teachers.map(teacher => <TeacherInfo
                key={teacher.id}
                teacher={teacher}
                ></TeacherInfo>)
            }
            
        </div>
    );
};

export default Teachers;