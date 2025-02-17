# frozen_string_literal: true

# == Schema Information
#
# Table name: macronutrients
#
#  id            :bigint           not null, primary key
#  carbohydrates :jsonb            not null
#  lipids        :jsonb            not null
#  protein       :jsonb            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  plan_id       :bigint           not null
#
# Indexes
#
#  index_macronutrients_on_plan_id  (plan_id)
#
# Foreign Keys
#
#  fk_rails_...  (plan_id => plans.id)
#
require 'test_helper'

class MacronutrientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
