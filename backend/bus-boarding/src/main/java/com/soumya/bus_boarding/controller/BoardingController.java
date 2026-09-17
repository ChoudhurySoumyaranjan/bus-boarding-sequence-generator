package com.soumya.bus_boarding.controller;

import com.soumya.bus_boarding.dto.BoardingSequence;
import com.soumya.bus_boarding.dto.Booking;
import com.soumya.bus_boarding.service.BoardingService;
import com.soumya.bus_boarding.service.CsvService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/boarding")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BoardingController {

    private final CsvService csvService;
    private final BoardingService boardingService;

    @PostMapping("/generate")
    public ResponseEntity<List<BoardingSequence>> generateSequence(
            @RequestParam("file") MultipartFile file) throws IOException {

        List<Booking> bookings = csvService.parse(file);

        List<BoardingSequence> sequence =
                boardingService.generateSequence(bookings);

        return ResponseEntity.ok(sequence);
    }
}