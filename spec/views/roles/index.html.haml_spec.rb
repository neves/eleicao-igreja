require 'rails_helper'

RSpec.describe "roles/index", type: :view do
  before(:each) do
    assign(:roles, [
      Role.create!(
        :title => "Title"
      ),
      Role.create!(
        :title => "Title"
      )
    ])
  end

  it "renders a list of roles" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
  end
end
