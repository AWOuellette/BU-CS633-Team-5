package BU.MET.CS3.Team5.BU.Course.Inquiry.service;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.repository.CourseRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public void delete(ObjectId id){
        courseRepository.deleteById(id);
    }

    public Course save(Course course){
        return courseRepository.save(course);
    }

    public List<Course> allCourses(){
        return courseRepository.findAll();
    }

    public Optional<List<Course>> courseByCourseNumber(String courseNumber){
        return courseRepository.findCourseByCourseNumber(courseNumber);
    }
    public Optional<Course> findById(ObjectId id){
        return courseRepository.findById(id);
    }

    public Optional<List<Course>> courseByCollege(String college){
        return courseRepository.findCourseByCollege(college);
    }

    public Optional<List<Course>> courseByDepartment(String department){
        return courseRepository.findCourseByDepartment(department);
    }

    public Optional<List<Course>> courseBySemester(String semester){
        return courseRepository.findCourseBySemester(semester);
    }

    public Optional<List<Course>> courseByProfessor(String professor){
        return courseRepository.findCourseByProfessor(professor);
    }

    public Optional<List<Course>> courseByTitle(String title){
        return courseRepository.findCourseByTitle(title);
    }

    public Optional<List<Course>> courseByCategory(String category){
        return courseRepository.findCourseByCategory(category);
    }
}
