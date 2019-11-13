import {call} from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
import lineups from "./data/lineups.js";
import findKey from "lodash/findKey";
import { getSquad } from "./libs/api";

export async function main(event, context) {
  const teamId = event.pathParameters.id;
  const params = {
    TableName: "Teams",
    Key: {
      teamId
    }
  };
  try {
    const teamInfo = await call("get", params);
    const squad = await getSquad(teamInfo.Item.apiId, "2019-2020");
    const key = findKey(lineups, (item, index) => index === teamId);
    if (teamInfo.Item) {
      return success({
        team: teamInfo.Item,
        lineup: lineups[key],
        squad
      });
    } else {
      return failure({ status: false, error: "Team not found"});
    }
  } catch (e) {
    return failure({status: false, message: e});
  }
};
