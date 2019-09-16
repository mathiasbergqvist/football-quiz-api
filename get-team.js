import {call} from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
import lineups from "./data/lineups.js";
import findKey from "lodash/findKey";

export async function main(event, context) {
  const teamId = event.pathParameters.id;
  const params = {
    TableName: "Teams",
    Key: {
      teamId
    }
  };
  try {
    const result = await call("get", params);
    const lineup = findKey(lineups, (item, index) => index === teamId);
    if (result.Item) {
      return success({...result.Item, ...lineup});
    } else {
      return failure({ status: false, error: "Team not found"});
    }
  } catch (e) {
    return failure({status: false});
  }
};
