class Api::V1::FighterController < ApplicationController
  def index
    render json: Fighter.all
  end

  def create
    fighter = Fighter.create(fighter_params)
    render json: fighter
  end

  def destroy
    Fighter.destroy(params[:id])
  end

  def update
    fighter = Fighter.find(params[:id])
    fighter.update_attributes(fighter_params)
    render json: fighter
  end

  private

  def fighter_params
    params.require(:fighter).permit(:id, :name, :description)
  end
end