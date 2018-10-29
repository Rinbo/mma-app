Given("the follwing fighters are in the database") do |table|
  table.hashes.each do |fighter|
    FactoryBot.create(:fighter, fighter)
  end
end

Given("I visit the main page of the app") do
  visit root_path
end

Given("I fill in {string} in the {string} field") do |content, field_name|
  fill_in field_name, with: content
end

Given("I click on {string}") do |button|
  click_on button
end

Then("I should see {string}") do |content|
  expect(page).to have_content content
end

Then("wait") do
  sleep 2
end

Then("reload") do
  visit current_path
end