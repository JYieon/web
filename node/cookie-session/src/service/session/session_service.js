const list = require("../../db/session/session_mem")

const getList = () => {
    return list.cart
}

const getUser = () => {
    return list.user
}

const save = (cart_list, goods_id) =>{
    if( !cart_list[goods_id] ){
        cart_list[goods_id] = 0;
    }
    cart_list[goods_id] = cart_list[goods_id] + 1;
    return cart_list;
}

module.exports = {getList, save, getUser}