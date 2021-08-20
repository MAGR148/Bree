class AddStepsFieldToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :steps, :jsonb
  end
end
