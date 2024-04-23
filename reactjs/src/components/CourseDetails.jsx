import Swal from 'sweetalert2';
import './CourseDetails.css';
import 'bootstrap/dist/css/bootstrap.css';

const CourseDetails =  (props)=>{
    const editCourse = async (course,index)=>{
        const { value: courseName } = await Swal.fire({
            title: 'Edit Course Name',
            input: 'text',
            inputPlaceholder: 'Course Name',
            showCancelButton: true,
            confirmButtonText: 'Edit Course',
          });
      
          // Check if course name was entered
          if (courseName)
          {
            Swal.fire({
              icon: 'success',
              title: 'Course Name Updated!',
              text: `New course name: ${courseName}`,
            });
            props.editCourse(courseName,index);
          } 
          else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You must enter a course name!',
            });
          }
    }

    if(props.totalCourse===0)
    {
       return(
          <h1 id="header">0 Courses Are Available</h1>
        )
    }
    else{
        return(
            
            <div className='container'>
                    <h1 className="mb-4" id="msg">Available Courses</h1>
                    <table className="courseChild table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">CourseName</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            { props.courses.map((course,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{course}</td>
                                    <td> <button onClick={()=>{props.deleteCourse(course)}} className="btn btn-danger m-1">Delete</button></td>
                                    <td> <button onClick={()=>{editCourse(course,index)}} className="btn btn-primary ps-4 pe-4">Edit</button></td>

                                </tr>
                            ))}
                        </tbody>
                        </table>
                        <h3 id="footer">Total {props.totalCourse} Courses Are Available</h3>
                </div>
            
        )
    }
}


export default CourseDetails;