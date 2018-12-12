class Api::V1::RecipientsController < ApplicationController
  
  def create
   @recipient = Recipient.create(recipient_params)
   render json: @recipient
  end

  def recipient_params
    params.permit( :first_name, :last_name, :mi, :address, :city, :state, :zip_code, :patient_dob)
  end
end
