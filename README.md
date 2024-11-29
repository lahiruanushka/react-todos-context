# Todo List Application 📋

A modern, responsive Todo List application built with React and Tailwind CSS, featuring local storage persistence and intuitive todo management.

## Features ✨

- **Add Todos**: Quickly create new tasks with a user-friendly form
- **Edit Todos**: Modify existing todo items seamlessly
- **Delete Todos**: Remove tasks you no longer need
- **Toggle Completion**: Mark todos as complete or incomplete
- **Local Storage**: Persist todos between browser sessions
- **Responsive Design**: Works well on desktop and mobile devices

## Screenshots 🖼️

![Todo List Interface](/screenshots/todo-list-interface.png)

## Tech Stack 🛠️

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: Browser's localStorage API

## Prerequisites 📋

- Node.js (v14 or later)
- npm (v6 or later)

## Installation & Setup 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-todos-context-api.git
   cd react-todos-context-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3174](http://localhost:3174) to view the app in your browser.

## Project Structure 📂

```
react-todos-context-api/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── contexts/
│   │   └── TodoContext.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Key Components 🧩

### App.jsx

- Manages the overall application state
- Handles todo operations (add, update, delete, toggle)
- Implements local storage persistence

### TodoForm.jsx

- Provides an interface to add new todos
- Manages form input state

### TodoItem.jsx

- Renders individual todo items
- Supports editing and deletion of todos

## Local Storage 💾

The application uses `localStorage` to persist todos:

- Todos are automatically saved when added, updated, or deleted
- Saved todos are loaded when the application initializes
