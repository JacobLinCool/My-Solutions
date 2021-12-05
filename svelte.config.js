import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],

    kit: {
        adapter: adapter(),
        target: "#app",
        vite: {
            server: {
                fs: {
                    allow: [".."],
                },
            },
        },
        paths: {
            base: process.env.GITHUB_WORKFLOW === "build_gh_pages" ? "/my-solutions" : "",
        },
    },
};

export default config;
