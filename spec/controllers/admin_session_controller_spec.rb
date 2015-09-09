require 'rails_helper'

describe Admins::SessionsController do

  before :each do
    @request.env["devise.mapping"] = Devise.mappings[:admin]
    @admin = FactoryGirl.create :admin
    sign_in @admin
  end

  it "should have a current_user" do
    expect(@admin).to be_truthy
  end

  it "should be an instance of admin" do
    expect(@admin).to be_instance_of(Admin)
  end

  it "should have a session" do
    expect(session).to be_truthy
  end

  it "should have an identifying session number" do
    expect(session["warden.user.admin.key"][0][0]).to be_a(Fixnum)
  end

end
