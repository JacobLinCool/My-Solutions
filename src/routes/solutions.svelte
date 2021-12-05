<script context="module" lang="ts">
    import type { SolutionMeta } from "$lib/actions/solutions";
    import { base } from "$app/paths";

    export async function load({ fetch }) {
        const list = await fetch(`${base}/data/list.json`).then((r) => r.json());
        return {
            props: { list },
        };
    }
</script>

<script lang="ts">
    export const title = "Solutions";

    export let list: SolutionMeta[];
</script>

<svelte:head>
    <title>{title} | My Solutions</title>
</svelte:head>

<section>
    <h1>{title}</h1>
    <div id="search-box">
        <input type="text" placeholder="Search" />
        <button>Search</button>
    </div>
    <div id="solution-list">
        {#each list as { name, title, tags }}
            <a href={base + "solution/" + name}>
                <div class="solution">
                    <h2>{title}</h2>
                    <p>{name}</p>
                    <p>{tags ? tags.join(", ") : ""}</p>
                </div>
            </a>
        {/each}
    </div>
</section>

<style lang="postcss">
    section {
        @apply max-w-screen-xl mx-auto px-4 py-8;
    }

    #search-box {
        @apply w-full mb-4 flex items-center justify-between bg-nord1 transition-colors duration-300 ease-in-out;
    }

    #search-box input {
        @apply h-14 flex-1 px-4 py-2 text-lg bg-nord1 transition-colors duration-300 ease-in-out;
    }

    #search-box input:hover {
        @apply bg-nord2;
    }

    #search-box input:focus {
        @apply outline-none bg-nord3;
    }

    #search-box button {
        @apply w-24 h-full px-4 py-2 text-lg uppercase;
    }

    #search-box:hover {
        @apply bg-nord2;
    }

    .solution {
        @apply p-4 mb-4 bg-nord1 text-nord4 shadow-lg cursor-pointer transition-all duration-300 ease-in-out;
    }

    .solution:hover {
        @apply bg-nord2 text-nord6 shadow-xl;
    }
</style>
