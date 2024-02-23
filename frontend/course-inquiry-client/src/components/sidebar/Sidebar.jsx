import React, {useEffect, useState} from 'react';
import '../../styles/Sidebar.css'
import TextField from "@mui/material/TextField";
import {Select} from "@mui/material";


const Sidebar = () => {
    const[search,setSearch]=useState([])
    return (
        <div>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search Courses"
                    size="small"
               onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div className="filter-parent">
                <h6>Filter By:</h6>

            </div>
        </div>
    );
};

export default Sidebar;