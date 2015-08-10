class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.string :description, null: false
      t.references :admin

      t.timestamps null: false
    end
  end
end
