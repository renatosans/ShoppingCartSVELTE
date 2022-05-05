
<style>
    .rounded-corners {
        overflow: hidden;
        border-radius: 10px;
        background-color:silver;
    }

    .vertical-container {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .productImage {
        height: 250px;
    }

    .roundIcon {
        border: 0px;
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }

    .roundIcon:hover {
        background-color: #FF8C00;
    }

    .addToCart {
        position: absolute;
        bottom: 90px;
        right: 30px;
        background-image: url('icons/cart.svg');
        background-color: #00AAFF;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 65%;
    }
</style>

<script>
    export let produto;
    export let shoppingCart;

    function addToCart(){
        let cartItem = shoppingCart.produtosAdicionados.find( item => item.id === produto.id );
        if (cartItem !== undefined){
            alert('Este produto já se encontra no carrinho!');
            return;
        }

        shoppingCart.produtosAdicionados.push(produto);
        alert('Produto adicionado ao carrinho.');
    }

    let showComponent = false;
    if( (produto !== undefined) && (shoppingCart !== undefined) ) showComponent = true;
</script>

{#if showComponent}
    <div class='vertical-container rounded-corners'>
        <img class='productImage' src={produto.imagem} alt={produto.nome}>
        <span> {produto.nome} </span> <br/>
        <span> {produto.descricao} </span> <br/>
        <span> Preço: R$ {produto.preco} </span> <br/>
        <button class='roundIcon addToCart' on:click={addToCart} />
    </div>
{/if}
