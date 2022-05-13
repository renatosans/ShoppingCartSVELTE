
<script>
    import { Modal } from 'sveltestrap';

    export let modalContent;

    let isOpen = false;

    export const toggle = () => (isOpen = !isOpen);
</script>

<Modal body {isOpen} {toggle} header="Informação">
    <span>{modalContent}</span>
    <br/><br/>
    <div class="d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary" on:click={toggle}>Close</button>
    </div>
</Modal>
