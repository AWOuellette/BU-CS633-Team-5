import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import './styles/App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Browse from './Pages/Browse';
import popup from './components/popup/Popup';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Course from "./Pages/Course";
import Admin from "./Pages/Admin";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {


    const [courses, setCourses] = useState();
   const [course,setCourse ]= useState();
   const[reviews, setReviews]= useState([]);
   const[tips,setTips]=useState([]);


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
            setReviews(course.reviewIds);
            setTips(course.tipIds)
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
                <Route path='/Browse' element={<Browse courses={courses}/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Course/:id' element={<Course getCourseData={getCourseData} course={course} reviews = {reviews} tips={tips} setReviews={setReviews} setTips={setTips} />}/>
                <Route path='/Admin' element={<Admin/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}


export default App;
