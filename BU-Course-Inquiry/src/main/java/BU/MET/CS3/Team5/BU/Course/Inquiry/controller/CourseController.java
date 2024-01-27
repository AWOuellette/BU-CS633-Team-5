package BU.MET.CS3.Team5.BU.Course.Inquiry.controller;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return new ResponseEntity<List<Course>>(courseService.allCourses(),HttpStatus.OK);
    }
}
