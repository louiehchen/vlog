class AddRatingToReubensTable < ActiveRecord::Migration
  def change
    add_column :reubens, :rating, :decimal
  end
end
