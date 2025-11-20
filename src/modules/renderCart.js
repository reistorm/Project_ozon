const renderCart = (goods) => {
	const cartWrapper = document.querySelector('.cart-wrapper')

	cartWrapper.innerHTML = ''

	if (goods.length === 0) {
		cartWrapper.insertAdjacentHTML('beforeend',
			`
				<div id="cart-empty">
						Ваша корзина пока пуста
					</div>
			`)
	} else {
		goods.forEach((goodItems) => {
			goodsWrapper.insertAdjacentHTML('beforeend', `
        
			<div class="card" data-key="${goodItems.id}>
            ${goodItems.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${goodItems.img}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${goodItems.price}</div>
					<h5 class="card-title">${goodItems.title}</h5>
					<button class="btn btn-primary">Удалить</button>
				</div>
			</div>
		 
        `)
		});
	}


}

export default renderCart;