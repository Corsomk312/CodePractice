get '/login' do
  erb :'/users/login'
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if @user.authenticate(@user.username, params[:password])
    session[:user_id] = @user.id
    redirect "/users/#{@user.id}"
  else
    erb :'/users/new'
  end
end

get '/logout' do
  session.clear[:user_id]
  redirect '/login'
end
