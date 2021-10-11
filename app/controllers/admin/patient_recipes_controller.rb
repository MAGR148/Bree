module Admin
  class PatientRecipesController < BaseController
    def edit
      @recipes = Recipe.all
      @patient = Patient.find(params[:patient_id])
    end
  end
end