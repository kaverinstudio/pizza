export const getCartItem = () => {
  const data = window.localStorage.getItem('cart')
  return data ? JSON.parse(data) : []
}