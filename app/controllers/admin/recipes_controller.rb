module Admin
  class RecipesController < BaseController
    layout 'recipes'

    def index
      @recipes = Recipe.all
      render layout: 'admin'
    end

    def show
      @recipe = Recipe.find(params[:id])
    end

    def new
      @recipe = Recipe.new
    end

    def create
      @recipe = Recipe.new(recipe_params)
      if @recipe.save
        redirect_to admin_recipe_url(id: @recipe.id), notice: 'Receta creada satisfactoriamente'
      else
        render :new, status: :unprocessable_entity
      end
    end

    private

    def recipe_params
      params.require(:recipe).permit(:name, :image, :custom_id, :preparation_time, :cooking_time, :recipe_type, food_time: [])
    end
  end
end