package BU.MET.CS3.Team5.BU.Course.Inquiry.repository;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends MongoRepository<Course, ObjectId> {
    Optional<Course> findCourseByCourseNumber(int courseNumber);
    Optional<Course> findCourseByCollege(String college);
    Optional<Course> findCourseByDepartment(String department);
    Optional<Course> findCourseBySemester(String semester);
    Optional<Course> findCourseByProfessor(String professor);
}
