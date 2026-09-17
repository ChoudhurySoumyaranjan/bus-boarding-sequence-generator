package com.soumya.bus_boarding.service;

import com.soumya.bus_boarding.dto.BoardingSequence;
import com.soumya.bus_boarding.dto.Booking;

import java.util.List;

public interface BoardingService {

    List<BoardingSequence> generateSequence(List<Booking> bookings);
}