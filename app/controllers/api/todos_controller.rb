class Api::TodosController < ApplicationController


 def create
   @todo = Todo.new(todo_params)
   if @todo.save
     render json: @todo
   else
     render json: @todo.errors
   end
 end


 def update
   @todo = Todo.find(params[:id])
   if @todo.update(todo_params)
     render json: @todo
   else
     render json: @todo.errors
   end
 end


 def index
   render json: Todo.all
 end


 def destroy
   @todo = Todo.find(params[:id])
   if @todo.destroy
     render json: @todo
   else
     render json: @todo.errors
   end
 end


 private

 def todo_params
   params.require(:todo).permit(:body, :title, :done);
 end


end
