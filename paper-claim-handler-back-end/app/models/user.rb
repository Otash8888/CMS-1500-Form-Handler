class User < ApplicationRecord
  has_many :claims
  has_many :recipients, through: :claims

  validates_presence_of :email, :password_digest
  validates :email, uniqueness: true
  has_secure_password
end
