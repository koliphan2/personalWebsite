exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.text('image').notNull().defaultTo("");
      table.string('description');
      table.string('location');
      table.string('user_id').defaultTo("KOliphant");
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images'),
  ]);
};
