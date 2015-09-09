require 'rails_helper'

describe Users::SessionsController do

  before :each do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    @user = FactoryGirl.create :user
    sign_in @user
  end

  it "should have a current_user" do
    expect(@user).to be_truthy
  end

  it "should be an instance of user" do
    expect(@user).to be_instance_of(User)
  end

  it "should have a session" do
    expect(session).to be_truthy
  end

  it "should have an identifying session number" do
    expect(session["warden.user.user.key"][0][0]).to be_a(Fixnum)
  end

end
# {"warden.user.user.key"=>[[9], "$2a$04$2MwO38qXcxr/3I2f7zb60O"]}