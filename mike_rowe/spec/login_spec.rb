require "rails_helper"
require 'capybara/rspec'
require 'capybara/dsl'



feature "Logged in features" do
  before do 
    Teacher.delete_all
    Teacher.create(name: "Zell", :email => 'zell@gmail.com', :password => 'zell')
  end

  scenario "Signing in with correct credentials" do
    visit '/'
    within("#login") do
      fill_in 'Email', :with => 'zell@gmail.com'
      fill_in 'Password', :with => 'zell'
    end

      
    click_button 'Log In'

    expect(page).to have_content 'Log out'
    
 

    click_link 'Students'
    expect(page).to have_content 'Check out all these Students!'

    click_link 'Teachers'
    expect(page).to have_content 'All Teachers'

    
    visit('/teachers')
    click_link 'Zell'
    expect(page).to have_content 'Zell, here are your students'
    
  end

end
