<script lang="ts">
    export const title = "About";
    export const prerender = true;
</script>

<svelte:head>
    <title>{title} | My Solutions</title>
</svelte:head>

<section>
    <h1>{title}</h1>
    <p>Hello.</p>
    <br>
    <div>
        <a href="https://leetcode.card.workers.dev/" target="_blank">
            <img alt="leetcode-card" src="https://leetcode.card.workers.dev/?username=JacobLinCool&style=auto&font=&extension=null" /></a
        >
    </div>
</section>

<style lang="postcss">
    section {
        @apply max-w-screen-xl mx-auto px-4 py-8;
    }
</style>
