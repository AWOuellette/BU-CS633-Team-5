package BU.MET.CS3.Team5.BU.Course.Inquiry.service;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Review;
import BU.MET.CS3.Team5.BU.Course.Inquiry.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String body, String courseID){
        Review review =reviewRepository.insert(new Review(body));

        mongoTemplate.update(Course.class).matching(Criteria.where("id").is(courseID)).apply(new Update().push("reviewIds").value(review)).first();
        return review;
    }
}
