
<style>
    .cartItem {
        display: flex;
        flex-direction: row;
        background-color: white;
    }

    .itemImage {
        border-radius: 7px;
        width: 95px;
        height: 95px;
    }

    .itemText{
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .vertical-container {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import NumberSpinner from './NumberSpinner.svelte';


    export let produto;
    export let quantidade;


    function remover(){
        alert('O produto "' + produto.nome + '" foi removido do carrinho.');
    }

    let showComponent = false;
    if( (produto !== undefined) && (quantidade !== undefined) ) showComponent = true;
</script>

{#if showComponent}
    <div class="cartItem">
        <img class="itemImage" src={produto.imagem} alt={produto.nome} />
        <fieldset class="vertical-container">
            <span class="itemText">{produto.descricao}</span>
            <span>Preço: R$ {produto.preco}</span>
            <br/>
            <button style="width: 100px;" on:click={remover}><b>Remover</b></button>
            <NumberSpinner currentCount={quantidade} ></NumberSpinner>
        </fieldset>
    </div>
{/if}
