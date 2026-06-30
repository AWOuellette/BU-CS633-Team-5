# BU Course Inquiry

A full-stack web application that helps Boston University students browse courses, read peer reviews, and discover tips for succeeding in specific classes. Admins can manage course listings through a secured API.

**Live site:** https://bu-course-inquiry.onrender.com/

> **Note:** The app is hosted on Render's free tier. If courses don't load immediately, wait a moment for the server to spin up.

---

## Tech Stack

**Frontend**
- React 18 + React Router
- Material UI (MUI) 5 + React Bootstrap
- Tailwind CSS
- Axios

**Backend**
- Java 17 + Spring Boot 3.2
- Spring Security (API key authentication)
- Spring Data MongoDB
- Maven

**Database**
- MongoDB Atlas (cloud)

**Deployment**
- Docker (multi-stage build)
- Hosted on Render

---

## Project Structure

```
BU-CS633-Team-5/
├── backend/
│   └── BU-Course-Inquiry/
│       ├── Dockerfile
│       ├── pom.xml
│       └── src/main/java/.../
│           ├── config/          # Security & API key auth
│           ├── controller/      # REST endpoints
│           ├── model/           # Course, Review, Tip
│           ├── repository/      # MongoDB data access
│           └── service/         # Business logic
├── frontend/
│   └── course-inquiry-client/
│       └── src/
│           ├── Pages/           # Home, Browse, Course, About
│           ├── components/      # Navbar, Footer, Cards, Popups
│           ├── api/             # Axios config
│           └── styles/          # CSS files
├── courses.json                 # Sample course data
└── BU.postman_collection.json   # API test collection
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- Java 17+
- Maven 3.9+
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Create a `.env` file at `backend/BU-Course-Inquiry/src/main/resources/.env`:

```env
MONGO_DATABASE=your_database_name
MONGO_USER=your_mongo_username
MONGO_PASSWORD=your_mongo_password
MONGO_CLUSTER=your_cluster_url
API_KEY=your_secret_api_key
```

2. Run the backend:

```bash
cd backend/BU-Course-Inquiry
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`.

### Frontend Setup

```bash
cd frontend/course-inquiry-client
npm install
npm start
```

The app will open at `http://localhost:3000`.

### Docker (Backend)

```bash
cd backend/BU-Course-Inquiry
docker build -t bu-course-inquiry .
docker run -p 8080:8080 bu-course-inquiry
```

---

## Features

- **Browse courses** — search and filter by course number, department, college, professor, semester, or category
- **Course details** — view full course info including syllabus, description, and professor
- **Reviews** — students can leave reviews on any course
- **Tips** — students can share tips for succeeding in a course
- **Admin management** — create, update, and delete courses via API key-protected endpoints

---

## API Reference

All public endpoints are under `/api/v1/`. Write operations require an `X-API-KEY` header.

### Courses

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/courses` | Get all courses |
| GET | `/api/v1/courses/ID/{id}` | Get course by ID |
| GET | `/api/v1/courses/courseNumber/{courseNumber}` | Filter by course number |
| GET | `/api/v1/courses/college/{college}` | Filter by college |
| GET | `/api/v1/courses/department/{department}` | Filter by department |
| GET | `/api/v1/courses/semester/{semester}` | Filter by semester |
| GET | `/api/v1/courses/professor/{professor}` | Filter by professor |
| GET | `/api/v1/courses/category/{category}` | Filter by category |
| POST | `/api/v1/courses/secure/upsert` | Create or update a course (admin) |
| DELETE | `/api/v1/courses/secure/delete/{id}` | Delete a course (admin) |

### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/reviews` | Get all reviews |
| POST | `/api/v1/reviews` | Add a review |
| DELETE | `/api/v1/reviews/secure/{id}` | Delete a review (admin) |

### Tips

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tips` | Get all tips |
| POST | `/api/v1/tips` | Add a tip |
| DELETE | `/api/v1/tips/secure/{id}` | Delete a tip (admin) |

A Postman collection (`BU.postman_collection.json`) is included for testing all endpoints.

---

## Running Tests

```bash
cd backend/BU-Course-Inquiry
./mvnw test
```

---

## Team

Boston University MET CS 633 — Team 5
