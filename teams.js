import { call } from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: "Teams"
    };
    try {
        const result = await call("scan", params);
        return success(result.Items);
    } catch (e) {
        return failure({ status: false, message: e });
    }
}
