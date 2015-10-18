class CreateConfession < ActiveRecord::Migration
  def change
    create_table :confessions do |t|
      t.text :body
      t.string :owner, default: "Anonymous"

      t.timestamps
    end
  end
end
