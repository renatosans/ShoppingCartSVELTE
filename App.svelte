
<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { Button, Modal, Offcanvas } from 'sveltestrap';
    import CartItem from './componentes/CartItem.svelte';
    import ProductCatalog from './componentes/ProductCatalog.svelte';


    let dadosProdutos = [];
    let shoppingCart = { cliente:"Cliente 1", total: 0, produtosAdicionados: [] };


	onMount(async () => {
        // axios.get('mock_data/listaProdutos.json').then( response => { renderizar(response.data); });
		const res = await fetch('mock_data/listaProdutos.json');
		dadosProdutos = await res.json();
	});

    let showItems = false;

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<style>
    .cart{
        position: fixed;
        top: 0;
        right: 0;
    }

    input[type="checkbox"] {
        width: 30px;
        height: 30px;
        appearance: none;
        background-color: white;
    }

    input[type="checkbox"]:checked {
        background-color: green;
    }
</style>

<!-- Triggers the shopping cart -->
<a on:click={toggle} href={null} >
    <i class="fas fa-shopping-cart b-bar-icon" style="color:blue"></i>
</a>

<main>
    <div class="container">
        <div id="grid" class="grid">
            {#each dadosProdutos as produto}
                <ProductCatalog produto={produto} shoppingCart={shoppingCart}></ProductCatalog>
            {/each}
        </div>
    </div>
</main>

<div class="cart">
    <input type="checkbox" class="fas fa-shopping-cart b-bar-icon" bind:checked={showItems}>
    {#if showItems}
        {#each shoppingCart.produtosAdicionados as produto}
            <div transition:slide>
                <CartItem produto={produto} shoppingCart={shoppingCart}></CartItem>
            </div>
        {/each}
    {/if}
</div>

<Offcanvas isOpen={isOpen} toggle={toggle} placement="end" header="Cart">
    {#each shoppingCart.produtosAdicionados as produto}
        <CartItem produto={produto} shoppingCart={shoppingCart}></CartItem>
    {/each}
</Offcanvas>    
