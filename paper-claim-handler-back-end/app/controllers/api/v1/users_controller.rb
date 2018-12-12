class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[login register]

  def login
    authenticate(params["email"], params["password"])
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def register
    @user = User.create(user_params)
   if @user.save
    response = { message: 'User created successfully'}
    render json: response, status: :created
   else
    render json: @user.errors, status: :bad
   end
  end

  def authorize_token
    @user_id = JsonWebToken.decode(request.headers["Authorization"])["user_id"]
    @user = User.find(@user_id)
    render json: @user
  end


private


  def authenticate(email, password)
    command = AuthenticateUser.call(email, password)
    if command.success?
      @user = User.find(JsonWebToken.decode(command.result)["user_id"])
      render json: {
        access_token: command.result,
        user: { email: @user.email, first_name: @user.first_name, id: @user.id,  username: @user.username, last_name: @user.last_name
        }}



    else
      render json: { error: command.errors }, status: :unauthorized
    end
   end


  def user_params
    params.permit(:username, :email, :password, :first_name, :last_name)
  end


  def token_params
    params.permit(:token)
  end

end
