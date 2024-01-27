package BU.MET.CS3.Team5.BU.Course.Inquiry.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "courses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    private ObjectId id;
    private String college;
    private String department;
    private int courseNumber;
    private String title;
    private String semester;
    private String description;
    private String syllabus;
    private String professor;
    private List<String> categories;
    @DocumentReference
    private List<Review> reviewIds;
}
