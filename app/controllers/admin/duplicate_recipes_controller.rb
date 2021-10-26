# frozen_string_literal: true

module Admin
  class DuplicateRecipesController < BaseController
    def edit
      @recipe = Recipe.find(params[:id])
      @cloned_recipe = Recipe.new(cloned_recipe_attributes)

      redirect_to edit_admin_recipe_path(id: @cloned_recipe.id) if @cloned_recipe.save
    end

    private

    def cloned_recipe_attributes
      cloned_recipe = @recipe.dup
      cloned_recipe.name = "#{cloned_recipe.name} Copy"

      cloned_recipe.attributes
    end
  end
end
