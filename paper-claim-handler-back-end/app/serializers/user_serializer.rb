class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :claims
  has_many :recipients, through: :claims
end
