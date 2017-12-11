require 'rails_helper'

RSpec.describe "users/index", type: :view do
  before(:each) do
    assign(:users, [
      User.create!(
        :email => "Email",
        :name => "Name",
        :password_digest => "Password Digest",
        :role => nil
      ),
      User.create!(
        :email => "Email",
        :name => "Name",
        :password_digest => "Password Digest",
        :role => nil
      )
    ])
  end

  it "renders a list of users" do
    render
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Password Digest".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
