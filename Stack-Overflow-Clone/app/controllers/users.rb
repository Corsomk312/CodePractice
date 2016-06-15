get '/users' do
  @users = User.all
  erb :'/users/index'
end

get '/users/new' do
  erb :'users/new'
end

get '/users/:id' do
  #take user to profile page
  p current_user
  p session[:user_id]
  if current_user
    @answers = current_user.answers
    erb :'/users/profile'
  else
    redirect '/login'
  end
end

post '/users' do
  #take info and create new user in database
  @user = User.create(params[:login])
  p current_user
  if @user.authenticate(@user.username, params[:login][:password])
    session[:user_id] = @user.id
    redirect "/users/#{@user.id}"
  else
    redirect '/users/new'
  end
end

delete '/users/:id' do
  #delete users
end
