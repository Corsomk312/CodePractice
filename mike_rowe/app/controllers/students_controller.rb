class StudentsController < ApplicationController
  before_filter :authorize

  def index
    @students = Student.all
    @group = Group.new
  end

  def new

  end

  def create
    student = Student.new(student_params)
    if student.save
      redirect_to '/students'
    else
      flash[:error] = 'An error occured!'
      redirect_to '/students'
    end
  end

  def show
    if Student.all.length > 0
      @student = Student.find(params[:id])
    end
  end

  private

 def student_params
  p :student
  params.require(:student).permit(:avatar, :name, :gender, :age, :grade, :detentions, :grades=>[:history,:science,:math])
end

end
