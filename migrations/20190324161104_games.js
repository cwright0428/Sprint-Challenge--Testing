exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', gameInfo => {
        gameInfo.increments();
        gameInfo.string('Title').notNullable().unique();
        gameInfo.string('Genre').notNullable();
        gameInfo.integer('Release Year').notNullable();
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
  };
