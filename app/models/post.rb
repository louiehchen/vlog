class Post < ActiveRecord::Base
  validates :title, :url, :description, presence: true
  belongs_to :admin

  before_save :set_sub_title

  def set_sub_title
    if self.sub_title.empty?
      self.sub_title = Nokogiri::HTML(self.description).inner_text
    end
  end

end
 # p = Post.new(title: "hello", url: "www", description: "hello 2")