post '/questions/:question_id/comments' do
	@question = Question.find(params[:question_id])
	@comment = @question.comments.build(params[:comment])
	if @comment.save
		current_user.comments << @comment
		if request.xhr?
	    erb :'/comments/comment', layout: false
	  else
			@question_id = params[:question_id]
			redirect "/questions/#{@question_id}/answers"
		end
	else
		@error = "Sorry, server error" 
		erb :'/questions/#{@question.id}/answers'
	end
end



post '/answers/:answer_id/comments' do
	@answer = Answer.find(params[:answer_id])
	@comment = @answer.comments.build(params[:comment])
	if @comment.save
		current_user.comments << @comment
		if request.xhr?
	    erb :'/comments/comment', layout: false
	  else
			@answer_id = params[:answer_id]
			question = Answer.find(@answer_id).question
			redirect "/questions/#{question.id}/answers"
	end
	else
		@error = "Sorry, server error" # Tell Pamela to display server error in the show answer view
		erb :'/questions/#{@question.id}/answers'
	end
end


get '/comments' do
	@question = Question.first
	erb :'/comments/new'
end

get '/commentss' do
	@answer = Answer.first
	erb :'/comments/new_answer_comment'
end
