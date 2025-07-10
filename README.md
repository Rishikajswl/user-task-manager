# User Task Manager (Node.js + MySQL)

A simple web app where admin can:
- Add users (name, email, mobile)
- Assign tasks to users (Pending or Done)
- Export data to Excel (two sheets: Users & Tasks)
- View tasks of a specific user

### Tech Stack
- Node.js + Express
- MySQL with Objection.js
- Template Engine: Handlebars
- Excel Export: XLSX

### Setup
1. Clone the repo
2. Create a `.env` file (refer `.env.example`)
3. Run `npm install`
4. Create database `user_task_db` and run migrations
5. Run app: `node app.js`

That's it.
