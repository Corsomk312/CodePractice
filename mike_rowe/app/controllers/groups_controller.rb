require 'date'

class GroupsController < ApplicationController

  def index

  end

  def new

  end

  def create
    teacher = Teacher.find(session[:teacher_id])
    student = Student.find(params[:student_id])
    new_group = student.groups.create(date: params[:date], teacher: teacher)
  end

  def destroy
    student = Student.find(params[:student_id])
    teacher = Teacher.find(session[:id])
    group = Group.find_by(teacher.id).where(date: params[:date], student_id: params[:id])
    group.destroy
  end
end
