package BU.MET.CS3.Team5.BU.Course.Inquiry.controller;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Review;
import BU.MET.CS3.Team5.BU.Course.Inquiry.service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.List;

@RestController
@CrossOrigin(origins = "https://bu-course-inquiry.onrender.com/")
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @DeleteMapping("/secure/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable ObjectId id){
        reviewService.delete(id);
        return new ResponseEntity<String>("Review deleted.",HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload){

        return new ResponseEntity<Review>(reviewService.createReview(payload.get("body"),payload.get("id")), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<List<Review>>(reviewService.allReviews(),HttpStatus.OK);
    }
}
