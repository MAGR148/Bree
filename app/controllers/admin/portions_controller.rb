module Admin
  class PortionsController < BaseController
    def edit
      @patient = Patient.find(params[:id])
      @calories = 2100
      @weight = 90
    end
  end
end