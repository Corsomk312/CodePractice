get '/questions/:question_id/vote' do
  question = Question.find(params[:question_id])
  vote = question.votes.build(value: "up")

  if vote.save
    current_user.votes << vote
    points = vote.net_votes_question(params[:question_id])
    if request.xhr?
      content_type :json
      { points: points}.to_json
    else
      error = "you done fucked up"
    end
  else
    redirect '/questions/:question_id/answers'
  end
end

get '/questions/:question_id/downvote' do
  question = Question.find(params[:question_id])
  vote = question.votes.build(value: "down")

  if vote.save
    current_user.votes << vote
    points = vote.net_votes_question(params[:question_id])

    if request.xhr?
      content_type :json
      { points: points}.to_json
    else
      error = "you done fucked up"
    end
  else
    redirect '/questions/:question_id/answers'
  end
end

get '/answers/:answer_id/vote' do
  answer = Answer.find(params[:answer_id])
  vote = answer.votes.build(value: "up")

  if vote.save
    current_user.votes << vote
    points = vote.net_votes_answer(params[:answer_id])
    if request.xhr?
      content_type :json
      { points: points}.to_json
    else
      error = "you done fucked up"
    end
  else
    redirect '/questions/:answer_id/answers'
  end
end

get '/answers/:answer_id/downvote' do
  answer = Answer.find(params[:answer_id])
  vote = answer.votes.build(value: "down")

  if vote.save
    current_user.votes << vote
    points = vote.net_votes_answer(params[:answer_id])

    if request.xhr?
      content_type :json
      { points: points}.to_json
    else
      error = "you done fucked up"
    end
  else
    redirect '/questions/:answer_id/answers'
  end
end
