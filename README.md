# MERN Stack Uptime Tracker

A full-stack project developed using the **MERN stack** to monitor the uptime of websites and their specific endpoints. This system provides real-time health checks and an intuitive dashboard for tracking and analyzing endpoint statuses.

---

## Key Features

- **Real-time Monitoring**: Automatically checks the uptime of websites and endpoints at user-defined intervals.
- **User Account Management**: Secure signup and login functionality, enabling users to manage their monitored websites and endpoints.
- **Comprehensive Reporting**: Generate detailed reports on endpoint downtime, available on a daily or monthly basis.
- **Configurable Settings**: Users can prioritize critical endpoints and define custom rules for rate limiting and monitoring frequency.

---

## Requirements for Status Beacon Design

### Functional Requirements
- **Add Websites and Endpoints**:  
  Users can register websites and specific endpoints for monitoring through a simple interface.
- **User Account Management**:  
  Users can create accounts, log in securely, and manage their personalized monitoring data.
- **Periodic Tracking**:  
  The system triggers URLs and endpoints at regular intervals, as configured by the user, to ensure uptime monitoring.

### Non-Functional Requirements
- **Scalability**:  
  The system must handle a high volume of endpoints concurrently without degradation in performance.
- **Rate Limiting**:  
  Configurable rate-limiting rules prevent overloading target systems and ensure responsible monitoring practices.
- **Resource Optimization**:  
  Critical endpoints are prioritized during health checks, optimizing resource allocation.
- **Data Retention**:  
  User data and reports are retained based on the user’s subscription plan and system policies.

---

## Architecture Overview

### Frontend
- **Technology**: React
- **Language**: TypeScript
- **UI Frameworks**: Tailored for intuitive and responsive design.

### Backend
- **Runtime Environment**: Node.js
- **Task Scheduler**: BullMQ for job queuing and scheduling.
- **In-memory Database**: Redis for caching and temporary data storage.

### Database
- **Relational Database**: MySQL to store user accounts and configuration details.
- **Time-Series Database**: InfluxDB for efficient storage and retrieval of trace logs and reporting data.

---

## End-to-End Workflow

1. **User Signup and Login**:  
   Users create an account, and their details are securely stored in the MySQL `users` table.  
   
2. **Website and Endpoint Management**:  
   Users can add, edit, or delete websites and endpoints to be monitored.  

3. **Real-time Monitoring Dashboard**:  
   Displays the current status of all monitored websites and endpoints.  

4. **Downtime Reports**:  
   Users can generate reports to review historical uptime/downtime data for all monitored endpoints.

---

## Development Practices

- **Test-Driven Development (TDD)**:  
  We follow TDD principles using **Mocha**, **Chai**, and **Supertest** to ensure code reliability and maintainability.
- **Continuous Integration/Continuous Deployment (CI/CD)**:  
  Automated pipelines for building, testing, and deploying the application.
- **Scalable Architecture**:  
  The architecture is designed to efficiently handle a growing number of users and monitored endpoints.
- **Rate Limiting and Queuing**:  
  Implements intelligent scheduling and throttling for optimal resource usage and compliance with third-party server limits.

---

## Resource and Storage Estimation

### Storage Requirements
- Assuming half the world's active websites (~100 million) use this platform:
  - 1 User: ~10 KB
  - 100 Million Users: ~1 TB of storage required in MySQL.

---

## Milestones and Targets

### Target 1: User Authentication
- Setup MySQL for user account storage.
- Implement RESTful APIs for signup and login functionality.

### Target 2: Website and Endpoint Management
- Build a screen for managing websites and endpoints.
- Implement APIs for adding and removing websites and endpoints

### Target 3: Endpoint Scheduler
- Implement scheduler in the background which will trigger URLs and endpoints at regular intervals, as configured by the user
- Build a dashboard where user can see the uptime and downtime for the last few hours or mins

### Target 4: Dashboard for reports
- Build a dashboard where users can see reports of days or months to analyze the downtime of their websites/endpoints

---

## Tools and Technologies

- **Frontend**: React, TypeScript
- **Backend**: Node.js, BullMQ, Redis
- **Database**: MySQL, InfluxDB
- **Testing Frameworks**: Mocha, Chai, Supertest

---

## Future Enhancements

- **Advanced Analytics**: Incorporate machine learning to predict downtime trends and suggest optimizations.
- **Mobile Support**: Extend functionality to mobile platforms (iOS and Android).
- **Multitenancy**: Enable support for multiple organizations and users within a shared infrastructure.

---


## Developers

- **Mughees Qasim**
- **Ahmad Rasool** 

---

## License

This project is licensed under the MIT License. For details, refer to the LICENSE file.
