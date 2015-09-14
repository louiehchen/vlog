class UserMailer < ApplicationMailer
  default from: "lowell@example.com"
  def admin_contact(mail_info)
    mail(to: "lowell.mower@gmail.com", subject: "Contact Message", body: mail_info[:body], content_type: "text/html")
  end
end