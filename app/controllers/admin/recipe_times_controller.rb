# frozen_string_literal: true

module Admin
  class RecipeTimesController < BaseController
    def edit
      @recipes = Recipe.limit(30)
      @patient = Patient.find(params[:patient_id])
      @time = params[:recipe_time]
      # meal / first_collation / second_collation / dinner
    end
  end
end
