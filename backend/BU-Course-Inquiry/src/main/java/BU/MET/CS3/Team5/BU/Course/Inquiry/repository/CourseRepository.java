package BU.MET.CS3.Team5.BU.Course.Inquiry.repository;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends MongoRepository<Course, ObjectId> {
    @Query("{'courseNumber': {'$regex': ?0}}")
    Optional<List<Course>> findCourseByCourseNumber(String courseNumber);
    @Query("{'college': {$regex: ?0}}")
    Optional<List<Course>> findCourseByCollege(String college);
    @Query("{'department': {$regex: ?0}}")
    Optional<List<Course>> findCourseByDepartment(String department);
    @Query("{'semester': {$regex: ?0}}")
    Optional<List<Course>> findCourseBySemester(String semester);
    @Query("{'professor': {$regex: ?0}}")
    Optional<List<Course>> findCourseByProfessor(String professor);
    @Query("{'title': {$regex: ?0}}")
    Optional<List<Course>> findCourseByTitle(String title);
    @Query("{'categories': {$regex: ?0}}")
    Optional<List<Course>> findCourseByCategory(String category);
}
