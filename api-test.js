import { getSquad } from "./api";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    try {
        // const result = await getTeam(33);
        const result = await getSquad(33, "2018-2019");
        console.log("API KEY", process.env.API_KEY);
        return success(result);
    } catch (e) {
        console.log("API KEY", process.env.API_KEY);
        return failure({ status: false, message: e });
    }
}
