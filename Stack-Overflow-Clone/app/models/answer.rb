class Answer < ActiveRecord::Base
  has_many :comments, as: :commentable
  has_many :votes, as: :voteable
  belongs_to :user
  belongs_to :question

  validates :content, presence: true

  def points
    self.votes.count
  end

end
