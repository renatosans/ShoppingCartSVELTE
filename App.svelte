
<script>
    import { onMount } from 'svelte';
    import { Button, Modal, Offcanvas } from 'sveltestrap';
    import CartItem from './componentes/CartItem.svelte';
    import ProductCatalog from './componentes/ProductCatalog.svelte';


    let dadosProdutos = [];
    let shoppingCart = { cliente:"Ayrton Senna", total: 0, produtosAdicionados: [] };


	onMount(async () => {
        // axios.get('mock_data/listaProdutos.json').then( response => { renderizar(response.data); });
		const res = await fetch('mock_data/listaProdutos.json');
		dadosProdutos = await res.json();
	});

    let showItems = false;
    const toggle = () => (showItems = !showItems);
</script>

<style>
    .cart{
        position: fixed;
        top: 0;
        right: 0;
        color: blue;
    }
</style>

<!-- triggers the shopping cart -->
<div class="cart">
    <a on:click={toggle} href={null} >
        <i class="fas fa-shopping-cart fa-lg"></i>
    </a>
</div>

<main>
    <div class="container">
        <div id="grid" class="grid">
            {#each dadosProdutos as produto}
                <ProductCatalog produto={produto} shoppingCart={shoppingCart}></ProductCatalog>
            {/each}
        </div>
    </div>
</main>

{#if showItems}
<Offcanvas isOpen={showItems} toggle={toggle} placement="end" header={'Carrinho ' + shoppingCart.cliente}>
    {#each shoppingCart.produtosAdicionados as produto}
        <CartItem produto={produto} shoppingCart={shoppingCart}></CartItem>
    {/each}
</Offcanvas>
{/if}
