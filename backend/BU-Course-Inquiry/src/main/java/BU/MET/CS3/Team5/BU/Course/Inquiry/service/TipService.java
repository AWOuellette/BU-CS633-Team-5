package BU.MET.CS3.Team5.BU.Course.Inquiry.service;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Tip;
import BU.MET.CS3.Team5.BU.Course.Inquiry.repository.TipRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TipService {
    @Autowired
    private TipRepository tipRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void delete(ObjectId id){
        tipRepository.deleteById(id);
    }
    public Tip createTip(String body, String id){
        Tip tip =tipRepository.insert(new Tip(body, LocalDateTime.now()));

        mongoTemplate.update(Course.class).matching(Criteria.where("id").is(id)).apply(new Update().push("tipIds").value(tip)).first();
        return tip;
    }

    public List<Tip> allTips(){
        return tipRepository.findAll();
    }
}
