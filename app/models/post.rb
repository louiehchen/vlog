class Post < ActiveRecord::Base
  validates :title, :url, :description, presence: true
  belongs_to :admin
  before_save :add_subtitle

  def add_subtitle
    if self.subtitle == nil || self.subtitle.empty?
      self.subtitle = Nokogiri::HTML(self.description).inner_text
    end
  end

end
