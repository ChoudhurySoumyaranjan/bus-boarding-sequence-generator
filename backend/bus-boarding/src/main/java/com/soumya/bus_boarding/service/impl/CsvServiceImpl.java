package com.soumya.bus_boarding.service.impl;

import com.soumya.bus_boarding.dto.Booking;
import com.soumya.bus_boarding.service.CsvService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CsvServiceImpl implements CsvService {

    @Override
    public List<Booking> parse(MultipartFile file) throws IOException {

        if (file.isEmpty()) {
            throw new IllegalArgumentException("Uploaded file is empty.");
        }

        if (file.getOriginalFilename() == null ||
                !file.getOriginalFilename().toLowerCase().endsWith(".csv")) {
            throw new IllegalArgumentException("Only CSV files are allowed.");
        }

        List<Booking> bookings = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(
                        file.getInputStream(),
                        StandardCharsets.UTF_8))) {

            // Skip header
            reader.readLine();

            String line;

            while ((line = reader.readLine()) != null) {

                if (line.isBlank()) {
                    continue;
                }

                String[] parts = line.split(",", 2);

                // Validate CSV row
                if (parts.length != 2 ||
                        parts[0].isBlank() ||
                        parts[1].isBlank()) {

                    throw new IllegalArgumentException(
                            "Each CSV row must contain Booking_ID and Seats."
                    );
                }

                Long bookingId = Long.parseLong(parts[0].trim());

                List<String> seats = Arrays.stream(parts[1].split("\\|"))
                        .map(String::trim)
                        .toList();

                bookings.add(new Booking(bookingId, seats));
            }
        }

        return bookings;
    }
}
