class AddSubTitleToPost < ActiveRecord::Migration

  def up
    add_column :posts, :sub_title, :string
    Post.all.each {|post| post.save }
    change_column_null :posts, :sub_title, false
  end

  def down
    remove_column :posts, :sub_title
  end

end
