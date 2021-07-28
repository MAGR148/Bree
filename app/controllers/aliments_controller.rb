class AlimentsController < ApplicationController
  def index
    @aliments = Aliments.all
  end
end