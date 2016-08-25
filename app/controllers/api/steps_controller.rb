class Api::StepsController < ApplicationController


   def create
     @step = Step.new(step_params)
     @step[:todo_id] = params[:todo_id]
     if @step.save
       render json: @step
     else
       render json: @step.errors
     end
   end


   def update
     @step = Step.find(params[:id])
     if @step.update(step_params)
       render json: @step
     else
       render json: @step.errors
     end
   end


   def index
     render json: Step.where(todo_id: params[:todo_id])
   end


   def destroy
     @step = Step.find(params[:id])
     if @step.destroy
       render json: @step
     else
       render json: @step.errors
     end
   end


   private

   def step_params
     params.require(:step).permit(:title, :done);
   end




end
