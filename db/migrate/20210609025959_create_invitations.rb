# frozen_string_literal: true

class CreateInvitations < ActiveRecord::Migration[6.1]
  def change
    create_table :invitations do |t|
      t.string :name
      t.string :email
      t.string :city
      t.boolean :nutrition_professional

      t.timestamps
    end
  end
end
