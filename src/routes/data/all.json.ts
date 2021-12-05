import type { EndpointOutput } from "@sveltejs/kit";
import { get_solutions } from "$lib/actions/solutions";

export async function get(): Promise<EndpointOutput> {
    const list = await get_solutions();

    const body = JSON.stringify(list);

    return { body };
}
