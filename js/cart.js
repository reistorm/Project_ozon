const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')

    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    //cartBtn.onClick = openCart

    cartBtn.addEventListener('click', openCart)

    //cartCloseBtn.onClick = closeCart

    cartCloseBtn.addEventListener('click', closeCart)
}

cart();