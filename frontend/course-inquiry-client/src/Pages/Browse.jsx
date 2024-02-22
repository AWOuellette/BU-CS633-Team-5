
import React, {useState} from 'react'
import Coursecard from "../components/course/Coursecard";
import TextField from "@mui/material/TextField";
import '../styles/Browse.css'
import headerimg from "../icons/courseheader.png";
import '../styles/Sidebar.css'
import {MenuItem, Select} from "@mui/material";
import {FormControl, InputLabel} from "@mui/material";

 const Browse= ({courses}) => {
     const[search,setSearch]=useState([])
     const[category,setFilter]=useState([])
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
             <div className="bottom">
.             <div className="sidebar">
                 <div className="search">
                     <TextField
                         id="outlined-basic"
                         variant="outlined"
                         fullWidth
                         label="Search Courses"
                         size="small"
                         onChange={(e)=>setSearch(e.target.value)}/>

                 </div>
                 <div className="filter-parent">
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                         <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                         <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"

                             label="Category"
                             onChange={(e)=>setFilter(e.target.value)}
                         >
                             <MenuItem value="">
                                 <em>None</em>
                             </MenuItem>
                             <MenuItem value={10}>Software Development</MenuItem>
                             <MenuItem value={20}>Security Management</MenuItem>
                             <MenuItem value={30}>Software Engineering</MenuItem>
                             <MenuItem value={30}>Data Structures</MenuItem>
                             <MenuItem value={30}>Algorithms</MenuItem>
                         </Select>
                     </FormControl>
                 </div>
             </div>
                 <div className="courseList">


                     <Coursecard courses={courses} search={search} setSearch={setSearch} category={category} setFilter={setFilter}>
                     </Coursecard>
                 </div>
             </div>
         </div>

         </div>
     )
 }

export default Browse
