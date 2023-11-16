let cart = []
let valorTotal = 0

function addProduct(id) {
    let product = document.getElementById(id);
    console.log(product)

    let prod = {}

    prod = {
        "id": product.id,
        "name": product.name,
        "price": product.getAttribute("data-price"),
        "src": product.getAttribute("data-img"),
        "qnt": 1
    }

    if (localStorage.length != 0) {
        oldCart = JSON.parse(localStorage.getItem('cart'))
        let itemExists = oldCart.some(item => item.name === product.name)

        if (!itemExists) {
            oldCart.push(prod);
            localStorage.setItem('cart', JSON.stringify(oldCart));
        }else{
            oldCart.forEach(item => {
                if (item.name == product.name) {
                    item.qnt += 1
                }
            });
            localStorage.setItem('cart', JSON.stringify(oldCart));
        }
    }else{
        cart.push(prod);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    /* enable cart buttons */
    document.getElementById("checkout-btn").style.display = "unset";
    document.getElementById("clear-btn").style.display = "unset"

    valorTotal += parseFloat(prod.price) * prod.qnt
    document.getElementById('total-div').innerText = "Total: R$ " + valorTotal.toFixed(2)

    document.getElementById("cart-length").innerText = JSON.parse(localStorage.getItem('cart')).length
}
