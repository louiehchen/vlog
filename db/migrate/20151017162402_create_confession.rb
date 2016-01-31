class CreateConfession < ActiveRecord::Migration
  def change
    create_table :confessions do |t|
      t.text :body, null: false
      t.string :owner, default: "Anonymous"

      t.timestamps
    end
  end
end
