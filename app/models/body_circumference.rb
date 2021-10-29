# == Schema Information
#
# Table name: body_circumferences
#
#  id          :bigint           not null, primary key
#  calf        :float
#  flexed_arm  :float
#  hip         :float
#  relaxed_arm :float
#  waist       :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class BodyCircumference < ApplicationRecord
    belongs_to :anthropometric_measurement
end
