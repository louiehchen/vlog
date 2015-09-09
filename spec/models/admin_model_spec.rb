require 'rails_helper'

describe Admin do

  it { should have_many(:posts) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }

  before :each do
    @admin = FactoryGirl.create :admin
  end

  it "should have a current_user" do
    expect(@admin).to be_truthy
  end

  it "should be an instance of admin" do
    expect(@admin).to be_instance_of(Admin)
  end

end