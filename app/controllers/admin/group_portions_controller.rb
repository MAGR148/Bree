module Admin
  class GroupPortionsController < BaseController
    def edit
      @patient = Patient.find(params[:patient_id])
      @group_portion = GroupPortion.find(params[:id])
    end

    def update
      @group_portion = GroupPortion.find(params[:id])
      @group_portion.update!(group_portion_params)
      
      # TODO: move this to servie object or Interactor
      @plan = @group_portion.plan
      @group_portion_time = @plan.group_portion_time
      @group_portion_time[group_portion_time_params.keys.first.to_sym][:quantity] = group_portion_time_params[group_portion_time_params.keys.first.to_sym][:quantity]
      @group_portion_time.save!
    end

    private

    def group_portion_params
      params.require(:group_portion).permit!
    end

    def group_portion_time_params
      params.require(:group_portion_time).permit!
    end
  end
end