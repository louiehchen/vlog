FactoryGirl.define do
  factory :user do
    email "lowell@example.com"
    password "Password123"
    password_confirmation {|u| u.password}
  end
end