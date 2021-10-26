# frozen_string_literal: true

module Admin
  class DashboardController < BaseController
    def show
      redirect_to admin_patients_path
    end
  end
end
