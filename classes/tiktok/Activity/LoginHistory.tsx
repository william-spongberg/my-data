import { DataType, FileData } from "../../../global/types.ts";
import { Login } from "../../../types/tiktok.ts";
import LineChart from "../../../islands/LineChart.tsx";
import { convertDateToUnixTime, randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class LoginHistory implements DataType {
  logins: Login[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>Login History</Text.SubHeading>
        <Text.Small>
          {`You have logged in ${this.logins.length} times`}
        </Text.Small>
        <LineChart
          id="LoginHistory"
          datasets={[{
            label: "History",
            data: this.logins,
            color: randColour(),
          }]}
        />
      </>
    );
  }

    parse(fileData: FileData) {
      const jsonData = JSON.parse(fileData.text).Activity["Login History"].LoginHistoryList;
  
      this.logins = jsonData.map((
        login: any,
      ) => {
        return {
          timestamp: convertDateToUnixTime(login.Date),
          IP: login.IP,
          DeviceModel: login.DeviceModel,
          DeviceSystem: login.DeviceSystem,
          NetworkType: login.NetworkType,
          Carrier: login.Carrier,
        } as Login;
      }).reverse();
    }
}
