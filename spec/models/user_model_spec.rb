require 'rails_helper'

describe User do

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }

  before :each do
    @user = FactoryGirl.create :user
  end

  it "should have a current_user" do
    expect(@user).to be_truthy
  end

  it "should be an instance of user" do
    expect(@user).to be_instance_of(User)
  end

end