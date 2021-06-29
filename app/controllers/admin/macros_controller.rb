module Admin
  class MacrosController < BaseController
    def new
      @calories = 1600
      @weight = 60
    end
  end
end