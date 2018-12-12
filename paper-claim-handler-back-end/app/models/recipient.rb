class Recipient < ApplicationRecord
  has_many :claims
  has_many :users, through: :claims
end
