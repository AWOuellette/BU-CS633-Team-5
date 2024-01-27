package BU.MET.CS3.Team5.BU.Course.Inquiry.controller;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.service.CourseService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return new ResponseEntity<List<Course>>(courseService.allCourses(),HttpStatus.OK);
    }
    @GetMapping("/courseNumber/{courseNumber}")
    public ResponseEntity<Optional<Course>> getCourseByCourseNumber(@PathVariable int courseNumber){
        return new ResponseEntity<Optional<Course>>(courseService.courseByCourseNumber(courseNumber),HttpStatus.OK);
    }

    @GetMapping("/college/{college}")
    public ResponseEntity<Optional<Course>> getCourseByCollege(@PathVariable String college){
        return new ResponseEntity<Optional<Course>>(courseService.courseByCollege(college),HttpStatus.OK);
    }

    @GetMapping("/department/{department}")
    public ResponseEntity<Optional<Course>> getCourseByDepartment(@PathVariable String department){
        return new ResponseEntity<Optional<Course>>(courseService.courseByDepartment(department),HttpStatus.OK);
    }

    @GetMapping("/semester/{semester}")
    public ResponseEntity<Optional<Course>> getCourseBySemester(@PathVariable String semester){
        return new ResponseEntity<Optional<Course>>(courseService.courseBySemester(semester),HttpStatus.OK);
    }

    @GetMapping("/professor/{professor}")
    public ResponseEntity<Optional<Course>> getCourseByProfessor(@PathVariable String professor){
        return new ResponseEntity<Optional<Course>>(courseService.courseByProfessor(professor),HttpStatus.OK);
    }
}
