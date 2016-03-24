class Phone < ActiveRecord::Base

	belongs_to :pseudo_user

	validates :number, presence: true

  include Messenger

  def clean_number
    number = self.number.scan(/\d+/).join
    number[0] == "1" ? number[0] = '' : number
    number unless number.length != 10
  end

end