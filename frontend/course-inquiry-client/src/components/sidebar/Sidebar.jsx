import React from 'react';
import '../../styles/Sidebar.css'
import TextField from "@mui/material/TextField";

const Sidebar = () => {
    return (
        <div>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search Courses"
                    size="small"
                />
            </div>
            <div className="filter-parent">
                <h6>Filter By:</h6>
                <div className="filter-child">
                    <input type="radio"/>
                    <span>Department</span>
                </div>
                <div className="filter-child">
                    <input type="radio"/>
                    <span>Category</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;