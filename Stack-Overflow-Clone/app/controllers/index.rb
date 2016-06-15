get '/' do
  redirect '/questions'
end

get '/session' do
  @session = session[:user_id]
  erb :session
end
