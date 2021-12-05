import type { EndpointOutput } from "@sveltejs/kit";
import { get_solutions_meta } from "$lib/actions/solutions";

export async function get(): Promise<EndpointOutput> {
    const list = await get_solutions_meta();

    const body = JSON.stringify(list);

    return { body };
}
