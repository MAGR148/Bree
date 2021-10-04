module Admin
  class GroupPortionTimesController < BaseController
    def edit
      @patient = Patient.find(params[:patient_id])
      @group_portion_times = GroupPortionTime.find(params[:id])
    end
  end
end