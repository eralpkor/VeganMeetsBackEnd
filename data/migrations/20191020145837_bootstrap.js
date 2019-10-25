
exports.up = function(knex) {
  return knex.schema.createTable('restaurants', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();

    tbl.increments();
    tbl.string('email', 255).notNullable()
    tbl.string('username', 128).notNullable().unique();
    tbl.string('password', 128).notNullable();
  })
  .createTable('vegan_favorites', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.text('notes');
    tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') // delete if parent deleted
        .onDelete('RESTRICT');
    
    tbl.integer('restaurant_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
