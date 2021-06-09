class Invitation < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :city, presence: true
end
