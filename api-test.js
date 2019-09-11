import { getTeam } from "./api";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    try {
        const result = await getTeam(33);
        return success(result);
    } catch (e) {
        return failure({ status: false, message: e });
    }
}
