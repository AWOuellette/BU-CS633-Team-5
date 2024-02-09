package BU.MET.CS3.Team5.BU.Course.Inquiry.controller;

import BU.MET.CS3.Team5.BU.Course.Inquiry.model.Tip;
import BU.MET.CS3.Team5.BU.Course.Inquiry.service.TipService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/tips")
public class TipController {
    @Autowired
    private TipService tipService;

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTip(@PathVariable ObjectId id){
        tipService.delete(id);
        return new ResponseEntity<String>("Tip deleted.",HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Tip> createTip(@RequestBody Map<String, String> payload){

        return new ResponseEntity<Tip>(tipService.createTip(payload.get("body"),payload.get("college"),payload.get("department"),payload.get("courseNumber")), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Tip>> getAllTips(){
        return new ResponseEntity<List<Tip>>(tipService.allTips(),HttpStatus.OK);
    }
}
