class CreatePseudoUser < ActiveRecord::Migration
  def change
    create_table :pseudo_users do |t|
    	t.string :name
    	t.string :email
    	t.float :lat
    	t.float :lon
    	
    	t.references :phone
    end
  end
end
