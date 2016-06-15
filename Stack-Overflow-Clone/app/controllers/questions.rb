# display all questions
get '/questions' do
  @questions = Question.all
  erb :"/questions/show"
end

# get the form to create a question
get "/questions/new" do
	erb :"/questions/new"
end

# create a new question from the form
post "/questions" do
	if current_user
	  new_question = Question.create(params[:question])
	  redirect "/questions/#{new_question.id}/answers"
	end
end

