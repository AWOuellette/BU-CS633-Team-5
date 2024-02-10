import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import './styles/App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Browse from './Pages/Browse';
import popup from './components/popup/Popup';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {


    const [courses, setCourses] = useState();

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
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}


export default App;