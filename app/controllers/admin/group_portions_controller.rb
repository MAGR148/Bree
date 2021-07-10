module Admin
  class GroupPortionsController < BaseController
    def edit
      @patient = Patient.find(params[:patient_id])
      @portions = GroupPortion.find(params[:id])
    end
  end
end