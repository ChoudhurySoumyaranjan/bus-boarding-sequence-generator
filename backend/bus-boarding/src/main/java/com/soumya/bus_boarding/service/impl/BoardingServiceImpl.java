package com.soumya.bus_boarding.service.impl;

import com.soumya.bus_boarding.dto.BoardingSequence;
import com.soumya.bus_boarding.dto.Booking;
import com.soumya.bus_boarding.service.BoardingService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class BoardingServiceImpl implements BoardingService {

    @Override
    public List<BoardingSequence> generateSequence(List<Booking> bookings) {

        bookings.sort(
                Comparator
                        .comparingInt(
                                (Booking booking) -> getMaxSeatNumber(booking.getSeats())
                        )
                        .reversed()
                        .thenComparing(Booking::getBookingId)
        );

        List<BoardingSequence> result = new ArrayList<>();

        for (int i = 0; i < bookings.size(); i++) {

            Booking booking = bookings.get(i);

            result.add(
                    new BoardingSequence(
                            i + 1,
                            booking.getBookingId()
                    )
            );
        }

        return result;
    }

    private int getMaxSeatNumber(List<String> seats) {

        return seats.stream()
                .mapToInt(this::getSeatNumber)
                .max()
                .orElse(0);
    }

    private int getSeatNumber(String seat) {

        return Integer.parseInt(
                seat.replaceAll("[A-Za-z]", "")
        );
    }
}