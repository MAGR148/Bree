# == Schema Information
#
# Table name: recipes
#
#  id               :bigint           not null, primary key
#  cooking_time     :string
#  food_time        :string           is an Array
#  image            :string
#  name             :string
#  preparation_mode :string           is an Array
#  preparation_time :string
#  type             :string
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
