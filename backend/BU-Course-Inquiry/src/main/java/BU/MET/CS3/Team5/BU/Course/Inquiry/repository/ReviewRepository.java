package BU.MET.CS3.Team5.BU.Course.Inquiry.repository;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
}
