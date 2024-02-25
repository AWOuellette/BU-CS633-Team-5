package BU.MET.CS3.Team5.BU.Course.Inquiry.service;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Course;
import BU.MET.CS3.Team5.BU.Course.Inquiry.repository.CourseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class CourseServiceTest {

    @Mock
    CourseRepository courseRepository;

    @InjectMocks
    CourseService courseService;

    private Course course;

    private Course courseAdded;

    @BeforeEach void setup(){

        List categories = new ArrayList<String>();
        categories.add("Computers");
        // Given
        course = Course.builder()
                .college("MET")
                .department("CS")
                .courseNumber("123")
                .title("Computer Science")
                .semester("Fall 1")
                .description("Learn about computers.")
                .syllabus("CS_Syllabus.com")
                .professor("Andrew O")
                .categories(categories)
                .image("CS.png")
                .build();
    }

    @Test
    public void testCourseService() {
        // When
        when(courseRepository.save(any(Course.class))).thenReturn(course);
        courseAdded = courseService.save(course);

        // Then
        assertEquals(course,courseAdded);
    }

}
