import {call} from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "Teams",
    Key: {
      teamId: event.pathParameters.id
    }
  };
  try {
    const result = await call("get", params);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Team not found"});
    }
  } catch (e) {
    return failure({status: false});
  }
};
