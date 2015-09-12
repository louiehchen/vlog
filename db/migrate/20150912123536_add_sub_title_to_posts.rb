class AddSubTitleToPosts < ActiveRecord::Migration

  def up
    add_column :posts, :subtitle, :string
    Post.all.each {|post| post.save}
    change_column_null :posts, :subtitle, false
    remove_column :posts, :sub_title
  end

  def down
    remove_column :posts, :subtitle
  end

end
