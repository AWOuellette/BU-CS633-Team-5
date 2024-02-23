package BU.MET.CS3.Team5.BU.Course.Inquiry.controller;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.service.CourseService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @DeleteMapping("/secure/delete/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable ObjectId id){
        courseService.delete(id);
        return new ResponseEntity<String>("Course deleted.",HttpStatus.OK);
    }

    @PostMapping("/secure/upsert")
    public ResponseEntity<Course> createCourse(@RequestBody Course course){
        return new ResponseEntity<Course>(courseService.save(course),HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return new ResponseEntity<List<Course>>(courseService.allCourses(),HttpStatus.OK);
    }
    @GetMapping("/courseNumber/{courseNumber}")
    public ResponseEntity<Optional<List<Course>>> getCourseByCourseNumber(@PathVariable String courseNumber){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByCourseNumber(courseNumber),HttpStatus.OK);
    }

    @GetMapping("/ID/{id}")
    public ResponseEntity<Object> findById(@PathVariable ObjectId id){
        return new ResponseEntity<Object>(courseService.findById(id),HttpStatus.OK);
    }

    @GetMapping("/college/{college}")
    public ResponseEntity<Optional<List<Course>>> getCourseByCollege(@PathVariable String college){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByCollege(college),HttpStatus.OK);
    }

    @GetMapping("/department/{department}")
    public ResponseEntity<Optional<List<Course>>> getCourseByDepartment(@PathVariable String department){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByDepartment(department),HttpStatus.OK);
    }

    @GetMapping("/semester/{semester}")
    public ResponseEntity<Optional<List<Course>>> getCourseBySemester(@PathVariable String semester){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseBySemester(semester),HttpStatus.OK);
    }

    @GetMapping("/professor/{professor}")
    public ResponseEntity<Optional<List<Course>>> getCourseByProfessor(@PathVariable String professor){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByProfessor(professor),HttpStatus.OK);
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<Optional<List<Course>>> getCourseByTitle(@PathVariable String title){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByTitle(title),HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<Optional<List<Course>>> getCourseByCategory(@PathVariable String category){
        return new ResponseEntity<Optional<List<Course>>>(courseService.courseByCategory(category),HttpStatus.OK);
    }
}
