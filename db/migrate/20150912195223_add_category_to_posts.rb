class AddCategoryToPosts < ActiveRecord::Migration
  def up
    add_column :posts, :category, :string
    Post.all.each {|post| post.save}
    change_column_null :posts, :category, false
  end

  def down
    remove_column :posts, :category
  end
end
