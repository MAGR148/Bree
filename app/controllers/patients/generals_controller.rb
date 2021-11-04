module Patients
  class GeneralsController < ApplicationController

    def new
      @patient = Patient.new
    end

    def create
      @user = User.find(1)
      @patient = @user.patients.new(patient_params)
      
      if @patient.save #Validar la insercion
        render json: @patient
      else
        render json: :unprocessable_entity
      end
    end

    private
    def patient_params
      params.require(:patient).permit(:name,:email,:avatar,:user_id,:age,:weight,
        :height,:gender,:physical_activity_factor,
        :last_name,:mothers_last_name,:phone,
        :birth_date,:occupation,objectives: [])
    end
  end
end