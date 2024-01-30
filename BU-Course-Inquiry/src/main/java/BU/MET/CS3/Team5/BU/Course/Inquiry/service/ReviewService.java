package BU.MET.CS3.Team5.BU.Course.Inquiry.service;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Review;
import BU.MET.CS3.Team5.BU.Course.Inquiry.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void delete(ObjectId id){
        reviewRepository.deleteById(id);
    }
    public Review createReview(String body,  String college, String department, String courseNumber){
        Review review =reviewRepository.insert(new Review(body, LocalDateTime.now()));

        mongoTemplate.update(Course.class).matching(Criteria.where("college").is(college).and("department").is(department).and("courseNumber").is(courseNumber)).apply(new Update().push("reviewIds").value(review)).first();
        return review;
    }
}
