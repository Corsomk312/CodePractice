class TeachersController < ApplicationController
  before_filter :authorize
  def index
    @teachers = Teacher.all
  end

  def new

  end

  def create
    teacher = Teacher.new(teacher_params)
    if teacher.save
      session[:teacher_id] = teacher.id
      redirect_to '/teachers'
    else
      flash[:error] = 'An error occured!'
      redirect_to '/teachers'
    end
  end

  def show
    require 'date'
    if Teacher.all.length > 0
      @week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      @teacher = Teacher.find(params[:id])
      @date = Date.today
    end
  end

private
  def teacher_params
    params.require(:teacher).permit(:name, :email, :avatar, :password, :admin)
  end

end