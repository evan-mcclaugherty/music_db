exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('artist').del(),

    // Inserts seed entries
    knex('artist').insert({id: 1, name: 'The Beatles', description: 'sucks'}),
    knex('artist').insert({id: 2, name: 'The Flaming Lips', description: 'awesome'}),
    knex('artist').insert({id: 2, name: 'The Flaming Lips', description: 'still even more better awesome'})
  );
};
