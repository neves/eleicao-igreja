require 'rails_helper'

RSpec.describe "roles/edit", type: :view do
  before(:each) do
    @role = assign(:role, Role.create!(
      :title => "MyString"
    ))
  end

  it "renders the edit role form" do
    render

    assert_select "form[action=?][method=?]", role_path(@role), "post" do

      assert_select "input[name=?]", "role[title]"
    end
  end
end
