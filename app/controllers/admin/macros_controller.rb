module Admin
  class MacrosController < BaseController
    def edit
      @patient = Patient.find(params[:patient_id])
      @macronutriment = Macronutrient.find(params[:id])
    end
  end
end