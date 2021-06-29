module Admin
  class MacrosController < BaseController
    def new
      @calories = 1600
      @weight = 80
    end
  end
end