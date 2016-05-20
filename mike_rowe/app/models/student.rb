class Student < ActiveRecord::Base
  has_many :groups
  has_many :teachers, through: :groups

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  def is_free?(student_id, date)
    return false if Group.find_by(student_id: student_id, date: date)
  end


  store_accessor :grades

end
