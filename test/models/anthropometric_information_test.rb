# == Schema Information
#
# Table name: anthropometric_informations
#
#  id           :bigint           not null, primary key
#  bmi          :float
#  size         :float
#  usual_weight :float
#  weight       :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require "test_helper"

class AnthropometricInformationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
