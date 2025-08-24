# dotnet-clean-architecture-sample
A .NET 9 + React Task Management App demonstrating Clean Architecture, DDD, CQRS, EF Core, and Docker.

# 📝 Task Management App

A small but realistic **.NET 9 + React + Clean Architecture** application built as part of a recruitment assessment.  
The goal was to demonstrate how I approach designing, structuring, and delivering software using modern patterns and tools.

---

## 🚀 Tech Stack

**Backend (API – .NET 9)**
- Clean Architecture (Domain, Application, Infrastructure, API)
- CQRS with **MediatR**
- **DDD-inspired** Entities & Repositories
- **Entity Framework Core** + Migrations
- **FluentValidation** for input validation
- **Swagger / OpenAPI** for API documentation

**Frontend**
- **React + TypeScript**
- Axios for API calls
- Simple project/task management UI

**Other**
- **Unit Tests** with xUnit + Moq
- **Docker Compose** (API + SQL Server)
- **README with setup steps**

---

## 🗂️ Architecture Overview
```
TaskManagementApp/
├── TaskManagementApp.Domain/ # Core domain models & logic
├── TaskManagementApp.Application/ # CQRS (commands, queries, handlers, validation)
├── TaskManagementApp.Infrastructure/ # EF Core repositories, DbContext
├── TaskManagementApp.API/ # Controllers, DI setup, Swagger
├── frontend/ # React + TypeScript UI
├── TaskManagementApp.Tests/ # Unit tests
└── docker-compose.yml # API + DB containers
```

---

## 🧪 Features

- Create and list **Projects**
- Create, list, and complete **Tasks**
- Validation for required fields
- Unit tests for:
  - **Domain layer** (entity behavior)
  - **Application layer** (CQRS handlers)
  - **Validation** (FluentValidation rules)
- Swagger UI for API testing
- Simple React UI for interaction

---

##  Getting Started

### 1. Backend
```bash
cd TaskManagementApp.API
dotnet run
```
API will be available at: http://localhost:5295/swagger

### 2. Frontend
```bash
cd frontend
npm install
npm start
```
Frontend will be available at: http://localhost:5173

3. Tests
```bash
dotnet test
```
🐳 Docker Setup
This project includes a Dockerfile for the API and a docker-compose.yml for API + SQL Server.

Run with:
```bash

docker compose up --build
```
 Note: Running both SQL Server + .NET SDK containers requires at least 4–6 GB of memory allocated to Docker Desktop.
On lower-memory machines, the containers  fail to start.
In such cases, the backend can be run locally with your own SQL Server, while the Docker setup remains valid for standard environments.

📸 Screenshots
Swagger
<img width="1805" height="932" alt="image" src="https://github.com/user-attachments/assets/0b11175e-08db-4922-a2c3-88263c6a66d1" />

Frontend UI
<img width="1693" height="866" alt="image" src="https://github.com/user-attachments/assets/d4495ac5-385b-4b00-8a4d-43c49b78c6a3" />


