class Post < ActiveRecord::Base
  validates :title, :url, :description, presence: true
  belongs_to :admin
  before_save :add_subtitle, :add_category

  def add_subtitle
    if self.subtitle == nil || self.subtitle.empty?
      self.subtitle = Nokogiri::HTML(self.description).inner_text
    end
  end

  def add_category
    if self.category == nil || self.category.empty?
      self.category = "tech"
    end
  end

end
