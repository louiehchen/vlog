class UserMailer < ApplicationMailer
  default from: "lowell@example.com"

  def admin_contact(mail_info)
    mail(
      to: "lowell.mower@gmail.com",
      subject: mail_info[:name] + " || " + mail_info[:email],
      body: mail_info[:body],
      content_type: "text/html")
  end

end