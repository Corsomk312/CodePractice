get '/questions/:question_id/answers' do
 @question = Question.find(params[:question_id])
 @answers = @question.answers.all
 @answer_comments = Comment.where(commentable_type: 'Answer')

 @question_comments = Comment.where(commentable_type: 'Question')
 erb :'answers/index'
end


get '/questions/:question_id/answers/new' do
  if request.xhr?
    @question = Question.find(params[:question_id])
    erb :"answers/new", layout: false
  else
    # @answers = @question.answers.find(params[:id])
    erb :'answers/new'
  end
end


post '/questions/:question_id/answers' do
  @question = Question.find(params[:question_id])
  @new_answer = @question.answers.new(params[:answer])
    if @new_answer.save
      redirect "/questions/#{@question.id}/answers"
    else
      @errors = @new_answer.errors.full_messages
      erb :'answers/new'
    end
end
