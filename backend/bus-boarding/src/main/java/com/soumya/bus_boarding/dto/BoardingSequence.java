package com.soumya.bus_boarding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardingSequence {

    private int sequence;

    private Long bookingId;
}