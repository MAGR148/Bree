module Admin
  class GroupPortionsController < BaseController
    def edit
      @patient = Patient.find(params[:patient_id])
      @group_portion = GroupPortion.find(params[:id])
    end

    def update
      @group_portion = GroupPortion.find(params[:id])
      @group_portion.update!(group_portion_params)
    end

    private

    def group_portion_params
      params.require(:group_portion).permit!
    end
  end
end