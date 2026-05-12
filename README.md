# CV Application

Curriculum builder project developed as part of the React course from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application), focused on state management, form handling, and component composition.

## Project Objective

The main goals were to practice:
- Managing form state with React hooks
- Splitting a UI into reusable components
- Adding and removing dynamic form sections
- Validating input before previewing the final CV
- Switching between edit and preview modes

## What Is It?

A single-page CV generator where users enter personal, educational, and practical experience details, then switch to a formatted preview. The app supports multiple entries for education and experience and includes a simple image upload preview.

## How To Use

1. Go to the project folder:
	`cd React/top-cv-application`
2. Install dependencies:
	`npm install`
3. Run the development server:
	`npm run dev`

## Features

- Personal information form with image upload preview
- Dynamic education and practical experience sections (add/remove)
- Required field validation before switching to preview
- Edit/preview toggle for the final CV output
- Clear separation between form components and CV view

## File Structure

- `src/App.jsx`: app state, handlers, and view toggle
- `src/components/PersonalInfo.jsx`: personal data form
- `src/components/EducationalInfo.jsx`: education entry form
- `src/components/PraticalInfo.jsx`: practical experience form
- `src/components/CVView.jsx`: CV preview layout
- `src/styles/App.css`: app styling
- `src/main.jsx`: app bootstrap

## Technologies Used

- React
- Vite
- JavaScript
- HTML and CSS

## Visualization

<img width="1170" height="1149" alt="localhost_5173_" src="https://github.com/user-attachments/assets/d9e99215-cd2f-49b7-83bb-da8f0b46091d" />

---

Project built following: [The Odin Project - CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
