
<style>
    .input-spinner {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: 100%;
    }

    .svgicon{
        background-color: transparent;
        border: 0px;
        width: 25px;
        height: 25px;
    }
</style>

<script>
    export let currentCount;

    function increase(){
        currentCount++;
        if (currentCount > 99) currentCount = 99;
    }

    function decrease(){
        currentCount--;
        if (currentCount < 0) currentCount = 0;
    }

    let showComponent = false;
    if( currentCount !== undefined ) showComponent = true;
</script>

{#if showComponent}
    <div class="input-spinner">
        <div id="decrease">
            <button class="svgicon" style="background-image: url('./icons/circle_minus.svg')" on:click={decrease} />
        </div>
        <div id="item_count" style="width: 40px; height: 30px; line-height: 30px; text-align: center;">
            <span style="font-size: 20px;">{ currentCount }</span>
        </div>
        <div id="increase">
            <button class="svgicon" style="background-image: url('./icons/circle_plus.svg')" on:click={increase} />
        </div>
    </div>
{/if}
