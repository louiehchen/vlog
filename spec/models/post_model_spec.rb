require 'rails_helper'

describe Post do

  it { should belong_to(:admin) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:description) }

  before :each do
    @post = FactoryGirl.create :post
  end

  it "should have a current_user" do
    expect(@post).to be_truthy
  end

  it "should be an instance of user" do
    expect(@post).to be_instance_of(Post)
  end

  it "should have a title" do
    expect(@post.title).to eq("Test Post")
  end

  it "should have a url" do
    expect(@post.url).to eq("http://www.example.com")
  end

  it "should have a description" do
    expect(@post.description).to eq("There once was a man from Nantucket")
  end

end