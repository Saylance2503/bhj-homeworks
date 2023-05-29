const products = document.querySelectorAll('.product');

const cart = document.querySelector('.cart__products');

products.forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const quantityDec = product.querySelector('.product__quantity-control_dec');
  const quantityInc = product.querySelector('.product__quantity-control_inc');
  const addToCartButton = product.querySelector('.product__add');

  quantityDec.addEventListener('click', () => decreaseQuantity(quantityValue));
  quantityInc.addEventListener('click', () => increaseQuantity(quantityValue));
  addToCartButton.addEventListener('click', () => addToCart(product));
});

function decreaseQuantity(quantityValue) {
  let quantity = parseInt(quantityValue.textContent);

  if (quantity > 1) {
    quantity--;
    quantityValue.textContent = quantity;
  }
}

function increaseQuantity(quantityValue) {
  let quantity = parseInt(quantityValue.textContent);
  quantity++;
  quantityValue.textContent = quantity;
}

function addToCart(product) {
  const productId = product.dataset.id;
  const productImage = product.querySelector('.product__image').src;
  const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

  const cartProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

  if (cartProduct) {
    const cartProductCount = cartProduct.querySelector('.cart__product-count');
    const currentQuantity = parseInt(cartProductCount.textContent);
    const newQuantity = currentQuantity + productQuantity;
    cartProductCount.textContent = newQuantity;
  } else {
    const newCartProduct = document.createElement('div');
    newCartProduct.classList.add('cart__product');
    newCartProduct.dataset.id = productId;

    const newProductImage = document.createElement('img');
    newProductImage.classList.add('cart__product-image');
    newProductImage.src = productImage;
    newCartProduct.appendChild(newProductImage);

    const newProductCount = document.createElement('div');
    newProductCount.classList.add('cart__product-count');
    newProductCount.textContent = productQuantity;
    newCartProduct.appendChild(newProductCount);

    cart.appendChild(newCartProduct);
  }
}
