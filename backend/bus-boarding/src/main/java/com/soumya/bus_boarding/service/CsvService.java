package com.soumya.bus_boarding.service;

import com.soumya.bus_boarding.dto.Booking;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


public interface CsvService {

    List<Booking> parse(MultipartFile file) throws IOException;
}
