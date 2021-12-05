<script lang="ts">
    export const title = "About";
</script>

<svelte:head>
    <title>{title} | My Solutions</title>
</svelte:head>

<section>
    <h1>{title}</h1>
    <p>Hello.</p>
</section>

<style lang="postcss">
    section {
        @apply max-w-screen-xl mx-auto px-4 py-8;
    }
</style>
