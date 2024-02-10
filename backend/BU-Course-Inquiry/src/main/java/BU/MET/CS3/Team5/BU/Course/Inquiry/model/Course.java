package BU.MET.CS3.Team5.BU.Course.Inquiry.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Builder;
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
@Builder
public class Course {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;
    private String college;
    private String department;
    private String courseNumber;
    private String title;
    private String semester;
    private String description;
    private String syllabus;
    private String professor;
    private List<String> categories;
    @DocumentReference
    private List<Review> reviewIds;
    @DocumentReference
    private List<Tip> tipIds;

    public Course(String college, String department, String courseNumber, String title, String semester, String description, String syllabus, String professor, List<String> categories) {
        this.college = college;
        this.department = department;
        this.courseNumber = courseNumber;
        this.title = title;
        this.semester = semester;
        this.description = description;
        this.syllabus = syllabus;
        this.professor = professor;
        this.categories = categories;
    }
}
