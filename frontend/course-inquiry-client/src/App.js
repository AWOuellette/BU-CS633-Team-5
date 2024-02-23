import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import './styles/App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Browse from './Pages/Browse';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Course from "./Pages/Course";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


    const [courses, setCourses] = useState();
   const [course,setCourse ]= useState();
   const[reviews, setReviews]= useState([]);
   const[tips,setTips]=useState([]);
   const[categories, setCategories]= useState([]);
   const[college, setCollege]= useState();
    const[department, setDepartment]= useState();
    const[courseNumber, setCourseNumber]= useState();
    const[semester, setSemester]= useState();
    const[description, setDescription]= useState();
    const[syllabus, setSyllabus]= useState();
    const[professor, setProfessor]= useState();
    const[courseimage, setImage]= useState();
    const[title,setTitle]=useState();


    const getAllCourses = async () =>{


        try
        {

            const response = await api.get("/api/v1/courses");
            console.log(response.data);

            setCourses(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }


    const getCourseData=async (id) => {

        try
        {

            const response = await api.get(`/api/v1/courses/ID/${id}`);
            const singleCourse= response.data
            console.log(response.data);

            setCourse(response.data);
            setReviews(singleCourse.reviewIds);
            setTips(singleCourse.tipIds);
            setCategories(singleCourse.categories);
            setCollege(singleCourse.college);
            setDepartment(singleCourse.department);
            setCourseNumber(singleCourse.courseNumber);
            setSemester(singleCourse.semester);
            setDescription(singleCourse.description);
            setSyllabus(singleCourse.syllabus);
            setProfessor(singleCourse.professor);
            setImage(singleCourse.image);
            setTitle(singleCourse.title);

        }
        catch(err)
        {
            console.log(err);
        }
    }




   useEffect(() =>{
   getAllCourses();
   },[])



  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Browse' element={<Browse getCourseData={getCourseData} courses={courses} categories={categories} setCategories={setCategories} />}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Course/:id' element={<Course getCourseData={getCourseData} course={course} reviews = {reviews} tips={tips} setReviews={setReviews} setTips={setTips} college={college} setCollege={setCollege} department={department} setDepartment={setDepartment} courseNumber={courseNumber} setCourseNumber= {setCourseNumber} description={description} setDecription={setDescription} semester={semester} setSemester={setSemester} syllabus={syllabus} setSyllabus={setSyllabus} professor={professor} setProfessor={setProfessor} courseimage={courseimage} setImage={setImage} title={title} setTitle={setTitle} categories={categories} setCategories={setCategories}/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}


export default App;
