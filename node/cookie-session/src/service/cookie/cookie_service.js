const cart = require("../../db/user_cart")
const getCart = () => {
    return cart
}

const save = (cart_list, goods_id) =>{
    const goods = cart.filter(data => data.goods_id == goods_id)
    cart_list = goods[0]
    return cart_list
}

module.exports = {getCart, save}