# Project Questions and Answers

## 1. Project Concept & Purpose

**Q: What is the main goal of "Notun Poth"? Who is the target audience?**
**A:** "Notun Poth" is an awareness app for Bangladeshi teens and parents, focusing on adolescent health education.

**Q: Why did you choose to build this as a web application?**
**A:** It's easily accessible on any device with a web browser, requiring no installation.

## 2. React & Application Architecture

**Q: Why did you choose React for this project?**
**A:** React is ideal for creating a dynamic and responsive user interface with reusable components, which simplifies development and maintenance.

**Q: Explain the structure of your `src` directory. What is the purpose of the `Pages` and `data` folders?**
**A:**
*   `Pages`: Holds the main components for each page or view of the application.
*   `data`: Stores static content like text for modules and FAQs in JSON files.

**Q: How do you handle navigation between pages like `Home.js` and `About.js`?**
**A:** By using a library like React Router, which defines routes in `App.js` to render different page components based on the URL.

**Q: Explain the role of `App.js` in your application's component hierarchy.**
**A:** It's the main container component that sets up the application's structure and routing.

## 3. Data Handling

**Q: How are you storing and loading the data for the modules and FAQs?**
**A:** Data is stored in local JSON files and imported directly into the React components where it's needed.

**Q: What are the advantages and disadvantages of using JSON files for data versus a real database?**
**A:** JSON is simple for this project's static content. A database would be better for dynamic data that users can change, but adds complexity.

**Q: Show me the code in `Modules.js` that reads and displays the list of modules from `modules.json`.**
**A:** The `Modules.js` component imports the `modules.json` file, then maps over the array of modules to render a list or grid of them on the page.

## 4. Future Improvements

**Q: What would be your next step to make this application more dynamic?**
**A:** The next step would be to build a backend API and connect it to a database to manage content and user data.

**Q: If you were to add user accounts and login functionality, how would you approach it?**
**A:** This would require a backend for user authentication, a database to store user profiles, and creating frontend login/registration forms.
