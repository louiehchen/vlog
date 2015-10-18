class Confession < ActiveRecord::Base

  validates :body, presence: true

end