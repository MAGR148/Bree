module Admin
  class PlansController < BaseController
    before_action :set_patient_plan

    def new
      @patient = @plan.patient
    end
  
    def create; end

    private

    def set_patient_plan
      @plan = Plan.find_or_create_by(patient_id: params[:patient_id])  
    end
  end
end