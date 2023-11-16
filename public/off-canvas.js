let carrinho = JSON.parse(localStorage.getItem("cart"));

if (carrinho === null){
    document.getElementById("checkout-btn").style.display = "none";
    document.getElementById("clear-btn").style.display = "none"
}

function clearCart() {
    localStorage.clear()
    location.reload()
}

function checkout() {
    alert("Obrigado por comprar!")
    localStorage.clear()
    location.reload()
}

function addItens() {
    /* add off canvas elements */

    document.getElementById("listaCarrinho").innerHTML = ""

    let cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

    let cor = "#ebb608";
    
    cartLocalStorage.forEach(item => {
        let spanElement = document.createElement("span");
        spanElement.style.color = cor;

        let caminhoImagem = item.src;

        let liElement = document.createElement("li");

        let imgElement = document.createElement("img");
        imgElement.src = caminhoImagem;

        liElement.appendChild(imgElement);

        let textoElement = document.createTextNode(item.name + " - ");
        liElement.appendChild(textoElement);
        liElement.append(spanElement)

        let listaCarrinho = document.getElementById("listaCarrinho");
        listaCarrinho.appendChild(liElement);

        let priceNode = document.createTextNode("R$ " + parseFloat(item.price).toFixed(2));
        spanElement.appendChild(priceNode);

        let quantityText = document.createTextNode(" | Quantidade: ")
        liElement.appendChild(quantityText)

        let itemQuantitySpan = document.createElement("span")
        let itemQuantity = document.createTextNode(item.qnt)
        itemQuantitySpan.style.color = cor
        itemQuantitySpan.id = item.name
        itemQuantitySpan.className = "item-qnt"
        itemQuantitySpan.appendChild(itemQuantity)

        liElement.appendChild(itemQuantitySpan)

        var subButton = document.createElement("button");
        subButton.type = "button";
        subButton.ariaHidden = item.name
        subButton.textContent = "-"
        subButton.id = item.name;
        subButton.className = "sub-qnt" 
        subButton.addEventListener('click', function(event) {
            let ariaHidden = event.target.getAttribute('aria-hidden');
            console.log(ariaHidden); // Logs the aria-hidden attribute of the clicked button

            oldCart = JSON.parse(localStorage.getItem('cart'))
            oldCart.forEach(item => {
                if (item.name === ariaHidden) {
                    item.qnt -= 1
                    document.getElementById(ariaHidden).innerHTML = item.qnt
                    valorTotal -= parseFloat(item.price)
                    document.getElementById('total-div').innerText = "Total: R$ " + valorTotal.toFixed(2)
                }
            });
            localStorage.setItem('cart', JSON.stringify(oldCart));
           });

        liElement.appendChild(subButton);

        var addButton = document.createElement("button");
        addButton.type = "button";
        addButton.ariaHidden = item.name
        addButton.textContent = "+"
        addButton.id = item.name;
        addButton.className = "add-qnt"

        addButton.addEventListener('click', function(event) {
            let ariaHidden = event.target.getAttribute('aria-hidden');

            oldCart = JSON.parse(localStorage.getItem('cart'))
            oldCart.forEach(item => {
                if (item.name === ariaHidden) {
                    item.qnt += 1
                    document.getElementById(ariaHidden).innerHTML = item.qnt
                    valorTotal += parseFloat(item.price)
                    document.getElementById('total-div').innerText = "Total: R$ " + valorTotal.toFixed(2)
                }
            });
            localStorage.setItem('cart', JSON.stringify(oldCart));
           });

        liElement.appendChild(addButton);
    });
}