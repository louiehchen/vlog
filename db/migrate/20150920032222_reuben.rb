class Reuben < ActiveRecord::Migration
  def change
    create_table :reuben do |t|
      t.string :restaurant, null: false
      t.decimal :rating
      t.string :desc
      t.string :location
      t.decimal :lat
      t.decimal :lon
    end
  end
end
