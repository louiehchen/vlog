class AddPseudoUserIdColumnToPhoneTable < ActiveRecord::Migration
  def change
  	add_column :phones, :pseudo_user_id, :integer
  end
end
