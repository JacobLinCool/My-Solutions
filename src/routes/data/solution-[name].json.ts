import type { EndpointOutput } from "@sveltejs/kit";
import { get_solution } from "$lib/actions/solutions";
import type { ServerRequest } from "@sveltejs/kit/types/hooks";

export async function get({ params }: ServerRequest): Promise<EndpointOutput> {
    const { name } = params;
    const solution = await get_solution(name);

    const body = JSON.stringify(solution);

    return { body };
}
