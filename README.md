# Ilmgaah-e-Islam — Madrasa Management System

"Deen ki Taleem, Duniya ki Kamiyabi"

A web-based management system for Ilmgaah-e-Islam Madrasa built
using the MERN stack. It provides dedicated portals for Teachers
and Students to manage their daily academic activities.

---

## Tech Stack

- Frontend: React.js (v18+)
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- Authentication: JWT (JSON Web Token)
- Password Encryption: bcryptjs
- Styling: Tailwind CSS
- HTTP Requests: Axios
- State Management: Context API

---

## Project Structure

madrasa-app/
├── client/                  React Frontend
│   ├── public/
│   └── src/
│       ├── components/      Reusable UI components
│       ├── pages/           All pages
│       │   ├── public/      Home, About, Courses etc
│       │   ├── teacher/     Teacher dashboard pages
│       │   └── student/     Student dashboard pages
│       ├── context/         Auth context, global state
│       ├── routes/          Protected route logic
│       └── utils/           Helper functions, axios config
│
└── server/                  Node + Express Backend
    ├── config/              DB connection, env config
    ├── controllers/         Business logic
    ├── middleware/           Auth middleware, role check
    ├── models/              MongoDB schemas
    └── routes/              API route definitions

---

## User Roles

- Teacher: Manage courses, attendance, notes, results
- Student: View course, attendance, fees, results, notes
- Admin: Future scope

---

## Getting Started

1. Clone the repository
   git clone https://github.com/your-username/ilmgaah-e-islam.git

2. Install server dependencies
   cd server
   npm install

3. Install client dependencies
   cd client
   npm install


5. Run the project
   cd server → npm run dev
   cd client → npm start

---



---

## API Base URL

Development:  http://localhost:5000/api
Production:   https://your-domain.com/api

---

## Available Scripts

Server:
npm run dev       Start server with nodemon
npm start         Start server normally
npm run seed      Seed dummy data

Client:
npm start         Start React development server
npm run build     Build for production

---

## Key Features


Public Website:
- Home page with madrasa info
- Courses listing
- Testimonials
- Donation page
- Contact page

---

## Dependencies

Server:
express           Web framework
mongoose          MongoDB ODM
bcryptjs          Password hashing
dotenv            Environment variables
cors              Cross-origin requests
nodemon           Dev auto-restart


Client:
react             UI library
react-router-dom  Routing
axios             HTTP requests
tailwindcss       Styling
react-icons       Icons

---

## Folder Naming Convention

Files:         camelCase       e.g. userController.js
Components:    PascalCase      e.g. StudentCard.jsx
Routes:        kebab-case URL  e.g. /student/my-course
Models:        PascalCase      e.g. User.js, Course.js

---

## Author

Project: Ilmgaah-e-Islam Management System
Stack: MERN
Role: Full Stack Developer

---

## License

This project is private and built exclusively for
Ilmgaah-e-Islam Madrasa.