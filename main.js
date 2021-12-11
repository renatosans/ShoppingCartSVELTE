import App from './App.svelte';


const app = new App({
    target: document.getElementById("container"),
    props: { name: 'Shopping Cart' }
});

export default app;
