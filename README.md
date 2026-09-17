# 🚌 Bus Boarding Sequence Generator

A full-stack application that generates an organized bus boarding sequence from booking data provided through a CSV file.

The application uses **Spring Boot** for the backend API and **React + Vite** for the frontend.

---

## 📌 Problem Statement

Given a list of bus bookings and their assigned seats, the application generates a boarding sequence designed to reduce unnecessary movement during boarding.

Each booking can contain multiple seats.

The boarding priority is determined by the **farthest seat number** in the booking.

### Boarding Rules

1. Find the highest seat number for each booking.
2. Bookings with a higher maximum seat number board first.
3. If two bookings have the same maximum seat number, the booking with the smaller `Booking_ID` boards first.
4. The final result is returned as an ordered boarding sequence.

---

## ✨ Features

- Upload booking data using a CSV file
- Validate the uploaded file
- Parse multiple seats per booking
- Calculate the farthest seat for each booking
- Generate the boarding sequence
- Handle ties using `Booking_ID`
- REST API using Spring Boot
- React-based user interface
- Loading and error states
- Responsive UI
- Dedicated error page
- Clean separation between frontend and backend

---

## 🛠️ Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Web
- Maven
- Lombok

### Frontend

- React
- Vite
- JavaScript
- Axios
- React Router

---

## 📂 Project Structure

```text
bus-boarding-sequence-generator/
│
├── backend/
│   └── bus-boarding/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/
│       │   │   │   └── com/
│       │   │   │       └── soumya/
│       │   │   │           └── bus_boarding/
│       │   │   │               ├── controller/
│       │   │   │               ├── dto/
│       │   │   │               ├── exception/
│       │   │   │               └── service/
│       │   │   │
│       │   │   └── resources/
│       │   │
│       │   └── test/
│       │
│       ├── pom.xml
│       └── test-bookings.csv
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── routes/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
