# OLX Clone - Online Classifieds Platform

**Developed by a team as a course project** implementing an **online classifieds platform**. Built with **ASP.NET Core** backend and React frontend.

## 🛠️ Tech Stack

**Backend**: ASP.NET Core + Entity Framework Core + SQLite  
**Frontend**: React + PrimeReact  
**Authentication**: JWT + Google OAuth  
**API Documentation**: Swagger/OpenAPI  
**File Storage**: Local file system  

## ✨ Features

### User Management
- User registration & login
- Google OAuth external login
- Password reset & change
- User profiles & admin user list

### Advertisements (Core Feature)
- Create advertisements with images
- List all advertisements
- VIP advertisements (featured)
- Filter by category/subcategory
- Filter by user
- Edit & delete advertisements

### Categories Management
- Add new categories & subcategories
- List categories & subcategories
- Edit & delete categories

### Shopping Cart
- Add advertisements to cart
- View cart items
- Remove cart items

### Orders
- Create orders from cart
- View order history

## 🚀 Quick Start

### Prerequisites
- .NET 6.0+ SDK
- Node.js 16+ (LTS recommended)

### Backend Setup
```bash
git clone https://github.com/NazariiKon/DiplomnaOLX.git
cd OLX
dotnet restore
dotnet ef database update
dotnet run
```

#### Swagger API
Open http://localhost:5000/swagger for interactive API testing.

## 🔐 Authentication
JWT Bearer tokens for API authorization

Google OAuth integration

Protected routes require Authorization: Bearer <token> header

## 📁 Database
Uses SQLite (BaseDB.sqlite) with Entity Framework Core:

Users & Roles (Identity)

Advertisements with images

Categories & Subcategories

Shopping carts & Orders

## 📚 Learning Outcomes
Our team project demonstrates:

✅ ASP.NET Core REST API design & JWT authentication

✅ Entity Framework Core with SQLite

✅ File upload & image processing

✅ Swagger API documentation

✅ Google OAuth integration

✅ React SPA integration with ASP.NET Core proxy

✅ Category/Subcategory hierarchical data

✅ Shopping cart & order workflows

## 📄 License
This project is licensed under the MIT License.