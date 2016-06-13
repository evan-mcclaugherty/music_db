exports.up = function(knex, Promise) {
    return knex.schema.table("artist", function(table) {
        table.text('descriptions')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.table("artist", function (table) {
      table.dropColumn("descriptions")
    })}
