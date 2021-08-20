# == Schema Information
#
# Table name: recipes
#
#  id               :bigint           not null, primary key
#  cooking_time     :integer
#  food_time        :string           default([]), is an Array
#  image            :string
#  ingredients      :string
#  name             :string
#  preparation_mode :string           default([]), is an Array
#  preparation_time :integer
#  recipe_type      :string
#  steps            :jsonb
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  custom_id        :string
#
# Indexes
#
#  index_recipes_on_food_time         (food_time) USING gin
#  index_recipes_on_preparation_mode  (preparation_mode) USING gin
#
require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
