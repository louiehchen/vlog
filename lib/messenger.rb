module Messenger

  def send_sms(number)
    acct_sid = ENV['TWILIO_ACCT_SID']
    auth_token = ENV['TWILIO_AUTH']

    @client = Twilio::REST::Client.new acct_sid, auth_token

    from = '+12055442814'

    message = @client.account.messages.create(
        :from => from,
        :to => '+1'+number,
        :body => 'Work Hard. Do Good. Change the World. http://bit.ly/1VWLByF'
        )
  end

  def start_call(number)
    acct_sid = ENV['TWILIO_ACCT_SID']
    auth_token = ENV['TWILIO_AUTH']

    @client = Twilio::REST::Client.new acct_sid, auth_token
    from = '+12055442814'

    @call = @client.account.calls.create(
        from: from,
        to: '+1'+number,
        url: 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.ambient',
        :status_callback => "http://www.lowellmower.com/apps/voip/connection",
        :status_callback_method => "POST",
        :status_callback_event => "answered"
        )
  end

end