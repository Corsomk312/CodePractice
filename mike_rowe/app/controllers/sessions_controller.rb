class SessionsController < ApplicationController

def new
end

def create
  teacher = Teacher.find_by_email(params[:email])
  # If the user exists AND the password entered is correct.
  if teacher && teacher.authenticate(params[:password])
    # Save the user id inside the browser cookie. This is how we keep the user
    # logged in when they navigate around our website.
    session[:teacher_id] = teacher.id
    redirect_to '/teachers/'+session[:teacher_id].to_s
  else
  # If user's login doesn't work, send them back to the login form.
    redirect_to '/login'
  end
end

def destroy
  session[:teacher_id] = nil
  redirect_to '/login'
end

end
