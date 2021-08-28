class AddPhosphorusAndPotassiumToAliments < ActiveRecord::Migration[6.1]
  def change
    add_column :aliments, :potassium, :string
    add_column :aliments, :phosphorus, :string
  end
end
