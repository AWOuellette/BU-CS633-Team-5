
import React, {useRef, useState} from 'react'
import Coursecard from "../components/course/Coursecard";
import TextField from "@mui/material/TextField";
import '../styles/Browse.css'
import headerimg from "../icons/courseheader.png";
import '../styles/Sidebar.css'
import {MenuItem, Select} from "@mui/material";
import {FormControl, InputLabel} from "@mui/material";
import {Link} from "react-router-dom";
import api from "../api/axiosConfig";
import UpdatePopup from "../components/popups/UpdatePopup";
import CreatePopup from "../components/popups/CreatePopUp";

 const Browse= ({courses,categories, setCategories,getCourseData}) => {
     const[search,setSearch]=useState([]);
     const[category,setCategory]=useState([]);
     const adminKey = useRef();

     const collegeTxt=useRef();
     const departmentTxt=useRef();
     const courseNumberTxt=useRef();
     const titleTxt=useRef();
     const semesterTxt=useRef();
     const descriptionTxt=useRef();
     const syllabusTxt=useRef();
     const professorTxt=useRef();
     const categoriesTxt=useRef();
     const imageTxt= useRef();


     const createCourse= async (e)=>{
         e.preventDefault();
         const collegetxt = collegeTxt.current;
         const departmenttxt = departmentTxt.current;
         const courseNumbertxt = courseNumberTxt.current;
         const titletxt = titleTxt.current;
         const semestertxt = semesterTxt.current;
         const descriptiontxt = descriptionTxt.current;
         const syllabustxt = syllabusTxt.current;
         const professortxt = professorTxt.current;
         const categoriestxt = categoriesTxt.current;
         const imagetxt= imageTxt.current;
         const adminkey= adminKey.current;

         var categoriesArray = categoriestxt.value.split(',');


         const axiosConfig = {
             withCredentials: true,

             headers: {

                 "Access-Control-Allow-Headers":"ApiKey",
                 ApiKey:`${adminkey.value}`
             }
         };
         try
         {

             const response = await api.post("/api/v1/courses/secure/upsert",{categories: categoriesArray, professor: professortxt.value, syllabus: syllabustxt.value, description: descriptiontxt.value, semester: semestertxt.value, title: titletxt.value, courseNumber: courseNumbertxt.value, department:departmenttxt.value, college: collegetxt.value, image: imagetxt.value, }, axiosConfig);
             console.log("create successful" + response.data);

         }
         catch(err)
         {
             // setRequestError(err.message)
             console.log(err);

             if (err.response){
                 console.log(err);
//do something

             }else if(err.request){
                 console.log(err);
//do something else

             }else if(err.message) {
                 console.log(err);
//do something other than the other two
             }
             }
     }

     return (
         <div>
             <div className="browsepage">
                 <div className="top">
                     <div className='banner'>
                         <img src={headerimg} alt=""/>

                         <div className="bannerText"><h1>Browse
                             Courses</h1></div>
                     </div>
                     <div className="headerimg">


                     </div>

                 </div>
                 <div className="create">
                     <CreatePopup labelText="Admin use only" handleSubmit={createCourse}
                                  adminKey={adminKey} getCourseData={getCourseData} imageTxt={imageTxt} categoriesTxt={categoriesTxt} professorTxt={professorTxt} syllabusTxt={syllabusTxt} descriptionTxt={descriptionTxt} semesterTxt={semesterTxt} titleTxt={titleTxt} collegeTxt={collegeTxt} departmentTxt={departmentTxt} courseNumberTxt={courseNumberTxt}/>
                 </div>


                 <div className="bottom">


                     <div className="sidebar">

                         <div className="search">
                             <TextField
                                 id="outlined-basic"
                                 variant="outlined"
                                 fullWidth
                                 label="Search Courses"
                                 size="small"
                                 onChange={(e) => setSearch(e.target.value)}/>

                         </div>
                         <div className="filter-parent">
                             <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                                 <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                                 <Select
                                     labelId="demo-simple-select-standard-label"
                                     id="demo-simple-select-standard"
                                     defaultValue=""
                                     label="Category"

                                     onChange={(e) => setCategory(e.target.value)}
                                 >
                                     <MenuItem value="">
                                         <em>None</em>
                                     </MenuItem>
                                     <MenuItem value={"Software Development"}>Software Development</MenuItem>
                                     <MenuItem value={"Security Management"}>Security Management</MenuItem>
                                     <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                                     <MenuItem value={"Data Structures"}>Data Structures</MenuItem>
                                     <MenuItem value={"Algorithms"}>Algorithms</MenuItem>
                                 </Select>
                             </FormControl>

                         </div>

                     </div>
                     <div className="courseList">


                         <Coursecard courses={courses} search={search} category={category} setCategory={setCategory}>
                         </Coursecard>
                     </div>
                 </div>
             </div>

         </div>
     )
 }

export default Browse
