<script lang="ts">
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import logo from "./logo.svg";

    type NavList = [name: string, path: string, active: RegExp][];
    export const list: NavList = [
        ["About", base + "/about", /\/about/],
        ["Solutions", base + "/solutions", /\/solution/],
    ];
</script>

<header>
    <div class="corner">
        <a href="{base}/">
            <img src={logo} alt="Logo" />
        </a>
    </div>

    <nav>
        <svg id="nav-left" viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>

        <ul>
            {#each list as [name, path, active]}
                <li class:active={active.test($page.path)}>
                    <a sveltekit:prefetch href={path}>{name}</a>
                </li>
            {/each}
        </ul>

        <svg id="nav-right" viewBox="0 0 0.5 3" aria-hidden="true">
            <path d="M0,0 L0,3 L0.5,3 L0.5,0" />
        </svg>
    </nav>
</header>

<style lang="postcss">
    header {
        @apply flex justify-between;
    }

    .corner {
        @apply w-12 h-12;
    }

    .corner a {
        @apply w-full h-full flex justify-center items-center;
    }

    .corner img {
        filter: hue-rotate(180deg);

        @apply w-8 h-8 object-contain;
    }

    nav {
        --background: var(--nord2);

        @apply flex justify-center;
    }

    #nav-left {
        @apply w-8 h-12 block;
    }

    #nav-right {
        @apply w-2 h-12 block;
    }

    path {
        fill: var(--background);
    }

    ul {
        list-style: none;
        background: var(--background);

        @apply p-0 m-0 h-12 flex justify-center items-center bg-contain;
    }

    li {
        @apply h-full;
    }

    li.active::before {
        --size: 6px;
        content: "";
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--nord8);

        @apply absolute w-0 h-0 top-0;
    }

    nav a {
        letter-spacing: 0.1em;

        @apply h-full px-4 flex items-center text-sm font-bold uppercase text-nord6;
    }

    nav a:hover {
        @apply text-nord8;
    }
</style>
