class Question < ActiveRecord::Base
  has_many :comments, as: :commentable
  has_many :answers
  has_many :votes, as: :voteable
  belongs_to :user

  def points
    self.votes.count
  end
end
