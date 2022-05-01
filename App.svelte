
<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { Button, Modal } from 'sveltestrap';
    import CartItem from './componentes/CartItem.svelte';
    import NumberSpinner from './componentes/NumberSpinner.svelte';
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
        background-image: url('./icons/cart.svg');
    }

    input[type="checkbox"]:checked {
        background-color: green;
    }
</style>

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
    <input type="checkbox" bind:checked={showItems}>
    {#if showItems}
        {#each shoppingCart.produtosAdicionados as produto}
            <div transition:slide>
                <CartItem produto={produto} quantidade=1></CartItem>
            </div>
        {/each}
    {/if}
</div>

<!-- Button trigger modal -->
<Button color="primary" on:click={toggle}>Hello World!</Button>

<!-- Modal -->
<Modal body {isOpen} {toggle} header="Hello World!">
    <span>AGORA VAI</span>
    <br/><br/>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
</Modal>
