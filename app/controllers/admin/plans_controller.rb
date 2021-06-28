module Admin
  class PlansController < BaseController
    def new
      @patient = Patient.find(params[:patient_id])
    end
  
    def create; end
  end
end