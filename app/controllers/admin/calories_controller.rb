module Admin
  class CaloriesController < BaseController
    def edit
      @patient = Patient.find(params[:id])
      @calories = 2100
      @weight = 90
    end

    def update
    end
  end
end