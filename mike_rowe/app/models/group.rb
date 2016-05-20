class Group < ActiveRecord::Base
	belongs_to :student
	belongs_to :teacher

  validates :student, uniqueness: {scope: :date, message: "This student is already assigned to a group that day."}
end
