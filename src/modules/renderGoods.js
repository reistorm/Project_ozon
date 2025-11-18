const renderGoods = () => {
    const goodsWrapper = document.querySelector('.goods')
    
    goodsWrapper.innerHTML = ''
    goods.forEach((goodItems) => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
			<div class="card">
            ${goodItems.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${goodItems.img}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${goodItems.price}</div>
					<h5 class="card-title">${goodItems.title}</h5>
					<button class="btn btn-primary">В корзину</button>
				</div>
			</div>
		</div>  
        `)
    });
}

export default renderGoods;