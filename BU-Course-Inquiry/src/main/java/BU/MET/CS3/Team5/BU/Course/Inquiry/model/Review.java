package BU.MET.CS3.Team5.BU.Course.Inquiry.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Review {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;
    private String body;

    public Review(String body, LocalDateTime created) {
        this.body = body;
        this.created=created;
    }

    @CreatedDate
    private LocalDateTime created;

}
