require 'faker'



  User.create!( :username   => 'aa',
                :hashed_password   => 'a' )

  User.create!( :username   => 'bb',
                :hashed_password   => 'b' )

  User.create!( :username   => 'cc',
                :hashed_password   => 'c' )

  User.create!( :username   => 'dd',
                :hashed_password   => 'd' )

  User.create!( :username   => 'ee',
                :hashed_password   => 'e' )

# user_id1 = User.find(1).id
# user_id2 = User.find(2).id
# user_id3 = User.find(3).id
# user_id2 = User.find(2).id
# user_id3 = User.find(3).id


  Question.create!(
                    :user_id => 1,
                    :title => 'First q: Do you like cheese ? ',
                    :content => 'Content: ' + Faker::Hipster.words.join(" ")
                     )

  Question.create!(
                    :user_id => 1,
                    :title => 'Second q: Do you like cheese ? ',
                    :content => 'Content: ' + Faker::Hipster.words.join(" ")
                     )


  question_id = Question.find(1).id # 1


  Answer.create!(
                    :user_id => 2,
                    :question_id => question_id,
                    :content => 'Content: ' + Faker::Lorem.sentence,
                    :favorite => false  )


  Answer.create!(   :user_id => 3,
                    :question_id => question_id,
                    :content => 'Content: ' + Faker::Lorem.sentence,
                    :favorite => false  )

  Answer.create!(   :user_id => 4,
                    :question_id => question_id,
                    :content => 'Content: ' + Faker::Lorem.sentence,
                    :favorite => false  )


  Answer.create!(   :user_id => 5,
                    :question_id => question_id,
                    :content => 'Content: ' + Faker::Lorem.sentence,
                    :favorite => false  )


  Comment.create!(  :user_id => 4,
                    :commentable_id => 1,
                    :commentable_type => 'Answer',
                    :content => 'Content: ' + Faker::Lorem.sentence)

  Comment.create!(  :user_id => 5,
                    :commentable_id => 1,
                    :commentable_type => 'Answer',
                    :content => 'Content: ' + Faker::Lorem.sentence)

  Comment.create!(  :user_id => 2,
                    :commentable_id => 1,
                    :commentable_type => 'Question',
                    :content => 'Content: ' + Faker::Lorem.sentence )

  Comment.create!(  :user_id => 3,
                    :commentable_id => 2,
                    :commentable_type => 'Question',
                    :content => 'Content: ' + Faker::Lorem.sentence )

  Vote.create!(  :user_id => 5,
                    :voteable_id => 1,
                    :voteable_type => 'Question',
                    :value => 'up' )


  Vote.create!(  :user_id => 4,
                    :voteable_id => 1,
                    :voteable_type => 'Question',
                    :value => 'up')


  Vote.create(  :user_id => 1,
                    :voteable_id => 1,
                    :voteable_type => 'Answer',
                    :value => 'up')


  Vote.create(  :user_id => 2,
                    :voteable_id => 1,
                    :voteable_type => 'Answer',
                    :value => 'up')

  Vote.create(    :user_id => 1,
                  :voteable_id => 2,
                  :voteable_type => 'Answer',
                  :value => 'up')


  Vote.create(  :user_id => 2,
                    :voteable_id => 2,
                    :voteable_type => 'Answer',
                    :value => 'up')

  Vote.create(    :user_id => 1,
                :voteable_id => 2,
                :voteable_type => 'Answer',
                :value => 'up')


  Vote.create(  :user_id => 2,
                    :voteable_id => 2,
                    :voteable_type => 'Answer',
                    :value => 'up')

  Vote.create(    :user_id => 1,
              :voteable_id => 3,
              :voteable_type => 'Answer',
              :value => 'up')


  Vote.create(  :user_id => 2,
                    :voteable_id => 3,
                    :voteable_type => 'Answer',
                    :value => 'up')

  Vote.create(    :user_id => 1,
            :voteable_id => 4,
            :voteable_type => 'Answer',
            :value => 'up')


  Vote.create(  :user_id => 2,
                    :voteable_id => 4,
                    :voteable_type => 'Answer',
                    :value => 'up')



  Vote.create(  :user_id => 3,
                    :voteable_id => 1,
                    :voteable_type => 'Comment',
                    :value => 'up')

  Vote.create(  :user_id => 4,
                    :voteable_id => 1,
                    :voteable_type => 'Comment',
                    :value => 'up')




