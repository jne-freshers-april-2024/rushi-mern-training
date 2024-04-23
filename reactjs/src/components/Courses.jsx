import { useState } from "react";
import CourseDetails from "./CourseDetails";
import 'bootstrap/dist/css/bootstrap.css'
import './Courses.css'

const Courses = ()=>{
    const [Courses,setCourse] = useState([]);
    const [totalCourse,setTotal] = useState(0);

    const addCourse = (e)=>{
        e.preventDefault()
        const newCourse = document.getElementById('newcourse');
        Courses.push(newCourse.value)
        setCourse([...Courses]);
        setTotal(totalCourse+1);
        newCourse.value = "";
    }

    const deleteCourse = (course)=>{
        const newCourses = Courses.filter(c=>c!==course)
        setTotal(totalCourse-1);
        setCourse([...newCourses]);
    }

    const editCourse = (course,index)=>{
        Courses[index] = course;
        setCourse([...Courses]);
    }

    return(
        <>
            <CourseDetails courses={Courses} totalCourse={totalCourse} deleteCourse={deleteCourse} editCourse={editCourse}/>
            <br></br>
            <form id="form">
                <h2>Enter New Course:</h2>         
                <input id='newcourse' className="p-1 m-1" type='text' name="course"></input>
                <input onClick={addCourse} className="btn btn-primary m-1" type='submit' value="Add Course"></input>
            </form>
        </>
    )
}

export default Courses;