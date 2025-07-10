const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');
const exportToExcel = require('../utils/excelExporter');

router.get('/', async (req, res) => {
  const users = await User.query();
  res.render('home', { users });
});

router.get('/add-user', (req, res) => res.render('addUser'));
router.post('/add-user', async (req, res) => {
  const { name, email, mobile } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!emailRegex.test(email) || !mobileRegex.test(mobile)) {
    return res.send('Invalid input');
  }
  await User.query().insert({ name, email, mobile });
  res.redirect('/');
});

router.get('/add-task', async (req, res) => {
  const users = await User.query();
  res.render('addTask', { users });
});

router.post('/add-task', async (req, res) => {
  const { task_name, status, user_id } = req.body;
  await Task.query().insert({ task_name, status, user_id });
  res.redirect('/');
});

router.get('/export', async (req, res) => {
  const users = await User.query().withGraphFetched('tasks');
  const buffer = exportToExcel(users);
  res.setHeader('Content-Disposition', 'attachment; filename=UsersTasks.xlsx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.send(buffer);
});

router.get('/user/:id/tasks', async (req, res) => {
  const tasks = await Task.query().where('user_id', req.params.id);
  res.json(tasks);
});

module.exports = router;
