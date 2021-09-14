export const isProductFetched = (productList = []) => !!productList.length

export const isProductInCart = (cartList, currentProduct = {}) => cartList.some( product => product._id === currentProduct._id)

export const stockOfProducts = (productList = []) => productList.map( product => { return {id:product.id, stock: Number(product.rating.count)}})

export const isInStock = (productList = []) => productList.filter( product => !product._source.stock <= 0 )


// _source.stock - GET STOCK