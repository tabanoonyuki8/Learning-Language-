import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleBtn}) => {

    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("Courses.json")
        .then (res => res.json())
        .then (data => setCourses(data))
    },[])
    return (
        <div className="text-white">
          
            <div className="md:w-2/3 grid grid-rows-3 grid-flow-col gap-3 m-2 ">
            {

courses.map(course => <Course key= {courses.id} course={course} handleBtn={handleBtn}>

</Course>)
}
            </div>
        </div>
    );
};

export default Courses;