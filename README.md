# Blog Platform with Comments

## Author

**Priya **

---

## Project Description

Blog Platform with Comments is a full-stack web application where users can register, log in, create blog posts, edit and delete their own posts, and interact through comments. The application uses JWT authentication for secure user access and MongoDB for database storage.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Create Blog Posts
- Edit Blog Posts
- Delete Blog Posts
- View All Blog Posts
- Add Comments
- View Comments
- Responsive User Interface
- RESTful APIs
- MongoDB Database Integration

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs

---

## Project Structure

```
blog-platform/

│── frontend/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   └── style.css

│── backend/
│   ├── server.js
│   ├── package.json
│   ├── models/
│   ├── routes/
│   └── middleware/

│── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <your-github-repository-url>
```

---

### Go to Backend Folder

```bash
cd backend
```

---

### Install Dependencies

```bash
npm install
```

---

### Create Environment File

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogplatform
JWT_SECRET=mySuperSecretKey123
```

---

### Start the Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### Run Frontend

Open the `frontend` folder using Live Server or Live Preview.

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Blog Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Get All Posts |
| POST | /api/posts | Create Post |
| PUT | /api/posts/:id | Update Post |
| DELETE | /api/posts/:id | Delete Post |

### Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/comments/:postId | Get Comments |
| POST | /api/comments | Add Comment |

---

## Future Improvements

- User Profile
- Upload Blog Images
- Search Blogs
- Categories
- Like Posts
- Pagination

---

## License

This project is developed for educational and internship purposes.

---

## Author

**Priya Yadav**
