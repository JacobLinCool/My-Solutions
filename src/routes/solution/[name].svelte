<script context="module" lang="ts">
    import type { Solution } from "$lib/actions/solutions";
    import { base } from "$app/paths";

    export async function load({ page, fetch }) {
        const res = await fetch(`${base}/data/solution-${encodeURIComponent(page.params.name)}.json`);
        let solution = await res.json();

        if (res.ok && solution) {
            return {
                props: { solution },
            };
        } else {
            return {
                status: 404,
                error: new Error(`Could not load.`),
            };
        }
    }
    export const prerender = true;
</script>

<script lang="ts">
    export let solution: Solution;
</script>

<svelte:head>
    <title>{solution.title} | My Solutions</title>
</svelte:head>

<section>
    <h1 id="solution-title">{solution.title}</h1>
    <div id="solution-content">
        {@html solution.content}
    </div>
</section>

<style lang="postcss">
    section {
        @apply max-w-screen-xl mx-auto px-4 py-8;
    }

    #solution-title {
        @apply mb-16;
    }

    #solution-content {
        @apply w-full;
    }

    #solution-content :global(p) {
        @apply my-4;
    }

    #solution-content :global(h1),
    #solution-content :global(h2),
    #solution-content :global(h3),
    #solution-content :global(h4),
    #solution-content :global(h5),
    #solution-content :global(h6) {
        @apply my-8;
    }

    #solution-content :global(h1) {
        @apply text-xl md:text-2xl lg:text-4xl;
    }

    #solution-content :global(h2) {
        @apply text-lg md:text-xl lg:text-3xl;
    }

    #solution-content :global(h3) {
        @apply md:text-lg lg:text-2xl;
    }

    #solution-content :global(code) {
        @apply whitespace-pre-wrap;
    }

    #solution-content :global(pre) {
        @apply p-4 bg-nord0 border border-nord2 rounded transition-all duration-200;
    }

    #solution-content :global(pre:hover) {
        background: var(--nord1) !important;

        @apply shadow-lg;
    }

    #solution-content :global(a::after) {
        content: "";

        @apply absolute w-0 h-0.5 left-0 bottom-0 bg-nord8 transition-all duration-200;
    }

    #solution-content :global(a:hover::after) {
        @apply w-full;
    }

    #solution-content :global(.katex-mathml) {
        @apply hidden;
    }
</style>
