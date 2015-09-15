class MailerController < ApplicationController

  def contact_mailer
    @mail_info = {
      :name => params[:name],
      :email => params[:email],
      :body => params[:body]
    }

    UserMailer.admin_contact(@mail_info).deliver_now

    render :text => "Your mail has been sent, thank you!"
  end

  private

  def form_params
    params.permit(:name, :email, :body)
  end

end