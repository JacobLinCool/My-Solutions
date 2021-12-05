import type { EndpointOutput } from "@sveltejs/kit";
import { get_solution } from "$lib/actions/solutions";

export async function get({ params }): Promise<EndpointOutput> {
    const { name } = params;
    const solution = await get_solution(name);

    const body = JSON.stringify(solution);

    return { body };
}
