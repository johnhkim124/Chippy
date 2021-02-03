class CartsController < ApplicationController
  before_action :authorize_request, only: [:index, :addToCart, :show]
  before_action :set_cart, only: [:show, :update, :destroy]


  # GET /carts
  def index
    # @carts = @current_user.cart.snacks
    @carts = Cart.all
    p "cart:#{@carts}"
    render json: @carts
  end

  def addToCart
    # find snack id from db

    @cartitem = @current_user.cart.cart_items.find_by(snack_id: params[:snack_id])
    if(@cartitem)
      @cartitem.quantity = @cartitem + 1;
    else
      @snack = Snack.find(params[:snack_id])
      @current_user.cart.snacks<<@snack
    end
    render json: @current_user.cart.snacks
  end
  # GET /carts/1
  def show
    render json: @cart.snacks
  end

  # POST /carts
  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render json: @cart, status: :created, location: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carts/1
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carts/1
  def destroy
    @cart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
      @cart = @current_user.cart
    end

    # Only allow a list of trusted parameters through.
    def cart_params
      params.require(:cart).permit(:user_id)
    end
end
