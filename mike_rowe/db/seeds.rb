# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'date'
1.times do
Teacher.create(name: "Zell", email: "zell@gmail.com", password: "zell", admin: true)
end

1.times do
Teacher.create(name: "Chris", email: "chris@gmail.com", password: "chris", admin: false)
end

10.times do
	Teacher.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Internet.password)
end

10.times do
	Student.create(name: Faker::Name.name, gender: ["M", "F"].sample, age: Faker::Number.between(1, 14), grade: Faker::Number.between(1, 8), detentions: Faker::Number.between(0, 4))
end

50.times do

  Group.create(student: Student.find(rand(1..Student.all.length)), teacher: Teacher.find(rand(1..Teacher.all.length)), date: Date.today - rand(0..6))

end

def assign_grades 
	s = Student.all
	s.each do |student|
		student.update_attribute(:grades, {history: "D", math: "A", science: "B"})
	end
end

assign_grades