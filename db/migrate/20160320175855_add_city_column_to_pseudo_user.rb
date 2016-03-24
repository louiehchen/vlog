class AddCityColumnToPseudoUser < ActiveRecord::Migration
  def change
  	add_column :pseudo_users, :city, :string
  end
end
