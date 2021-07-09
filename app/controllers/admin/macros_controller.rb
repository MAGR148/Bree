module Admin
  class MacrosController < BaseController
    def edit
      @calories = 1100
      @weight = 90
      # @patient = Patient.find(params[:patient_id])
      @macronutriment = Macronutrient.find(params[:id])
      @macronutriment.reload
    end
  end
end