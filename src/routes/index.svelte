<script lang="ts">
    export const title = "My Solutions";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section>
    <h1>Welcome to <b>{title}</b>!</h1>
    <p>
        This website is created by
        <a href="https://github.com/jacoblincool" target="_blank">JacobLinCool</a> with
        <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a> &
        <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>
        .
    </p>
</section>

<style lang="postcss">
    section {
        @apply max-w-screen-xl mx-auto px-4 py-8;
    }

    a::after {
        content: "";

        @apply absolute w-0 h-0.5 left-0 bottom-0 bg-nord8 transition-all duration-200;
    }

    a:hover::after {
        @apply w-full;
    }
</style>
