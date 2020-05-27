
exports.up = function(knex) {
  return knex.schema
      .createTable('users',tbl => {
          tbl.increments();
          tbl.string('name',128)
              .notNullable();
          tbl.string('email',128)
              .notNullable()
              .unique();
          tbl.string('password',128)
              .notNullable()
      })

      .createTable('cannabis_list',tbl => {
          tbl.increments();
          tbl.string('Strain',128)
              .notNullable();
          tbl.string('Type',128)
              .notNullable();
          tbl.float('Rating')
              .notNullable();
          tbl.string('Effects', 128)
              .notNullable()
          tbl.string('Flavor',128)
              .notNullable();
          tbl.string('Description',256)
              .notNullable()
      })

      .createTable('liked',tbl => {
          tbl.increments();
          tbl.integer('user_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')

          tbl.integer('can_strain')
              .unique()
              .notNullable()
              .references('id')
              .inTable('cannabis_list')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
      })

      .createTable('treated',tbl => {
          tbl.increments();
          tbl.integer('liked_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('liked')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
          tbl.string('what_treated_name', 128)
              .notNullable();
      })


};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('treated')
        .dropTableIfExists('liked')
        .dropTableIfExists('cannabis_list')
        .dropTableIfExists('users')
};
