// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);
  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('#cart .product');
  allProducts.forEach((product)=> {
    updateSubtotal(product)
  })

  // ITERATION 3
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach((product => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  }))
  const totalValue = document.querySelector('total-value span')
  totalValue.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}