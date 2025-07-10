// will create users and tasks tables

exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('mobile');
    })
    .createTable('tasks', function(table) {
      table.increments('id').primary();
      table.string('task_name');
      table.string('status');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('users');
};

