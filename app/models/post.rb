class Post < ActiveRecord::Base
  validates :title, :url, :description, presence: true
  belongs_to :admin
end
