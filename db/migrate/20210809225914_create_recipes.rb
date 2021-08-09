class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :custom_id
      t.string :type
      t.string :preparation_time
      t.string :cooking_time
      t.string :food_time, array: true
      t.string :preparation_mode, array: true

      t.timestamps
    end

    add_index :recipes, :food_time, using: 'gin'
    add_index :recipes, :preparation_mode, using: 'gin'
  end
end
