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

    public List<Course> allCourses(){
        return courseRepository.findAll();
    }

    public Optional<Course> courseByCourseNumber(int courseNumber){
        return courseRepository.findCourseByCourseNumber(courseNumber);
    }

    public Optional<Course> courseByCollege(String college){
        return courseRepository.findCourseByCollege(college);
    }

    public Optional<Course> courseByDepartment(String department){
        return courseRepository.findCourseByDepartment(department);
    }

    public Optional<Course> courseBySemester(String semester){
        return courseRepository.findCourseBySemester(semester);
    }

    public Optional<Course> courseByProfessor(String professor){
        return courseRepository.findCourseByProfessor(professor);
    }

}
