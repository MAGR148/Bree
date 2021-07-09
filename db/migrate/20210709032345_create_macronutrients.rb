class CreateMacronutrients < ActiveRecord::Migration[6.1]
  def change
    create_table :macronutrients do |t|
      t.references :plan, null: false, foreign_key: true
      t.jsonb :carbohydrates, null: false, default: { percentage: 50 }
      t.jsonb :protein, null: false, default: { percentage: 25 }
      t.jsonb :lipids, null: false, default: { percentage: 25 }

      t.timestamps
    end
  end
end
