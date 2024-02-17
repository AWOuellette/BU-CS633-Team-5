package BU.MET.CS3.Team5.BU.Course.Inquiry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class, UserDetailsServiceAutoConfiguration.class})
public class BuCourseInquiryApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuCourseInquiryApplication.class, args);
	}

}
