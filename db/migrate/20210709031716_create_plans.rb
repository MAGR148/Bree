# frozen_string_literal: true

class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
