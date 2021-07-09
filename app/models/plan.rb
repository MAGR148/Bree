# == Schema Information
#
# Table name: plans
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  patient_id :bigint           not null
#
# Indexes
#
#  index_plans_on_patient_id  (patient_id)
#
# Foreign Keys
#
#  fk_rails_...  (patient_id => patients.id)
#
class Plan < ApplicationRecord
  belongs_to :patient
  has_one :macronutrient

  after_create :create_associations

  def create_associations
    self.create_macronutrient
  end
end
