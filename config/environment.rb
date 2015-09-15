# Load the Rails application.
require File.expand_path('../application', __FILE__)

ActionMailer::Base.smtp_settings = {
  :user_name => ENV['MAILCHIMP_USERNAME'],
  :password => ENV['MAILCHIMP_API'],
  :domain => 'http://www.lowellmower.com',
  :address => 'smtp.mandrillapp.com',
  :port => 25,
  :authentication => :plain,
  :enable_starttls_auto => true
}

# Initialize the Rails application.
Rails.application.initialize!
