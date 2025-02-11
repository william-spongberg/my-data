import { DataType, FileData } from "../../../types/global/types.ts";
import * as Text from "../../../components/Text.tsx";

export default class PersonalInfo implements DataType {
  email: string = "Unknown";
  phone: string = "Unknown";
  username: string = "Unknown";
  name: string = "Unknown";
  gender: string = "Unknown";
  dob: string = "Unknown";

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>
          Personal Information
        </Text.SubHeading>
        <Text.Small>{`Email: ${this.email}`}</Text.Small>
        <Text.Small>{`Phone: ${this.phone}`}</Text.Small>
        <Text.Small>{`Username: ${this.username}`}</Text.Small>
        <Text.Small>{`Name: ${this.name}`}</Text.Small>
        <Text.Small>{`Gender: ${this.gender}`}</Text.Small>
        <Text.Small>{`Date of Birth: ${this.dob}`}</Text.Small>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    const stringMapData = jsonData.profile_user[0].string_map_data;

    this.email = stringMapData["Email"]?.value || "Unknown";
    this.phone = stringMapData["Phone Number"]?.value || "Unknown";
    this.username = stringMapData["Username"]?.value || "Unknown";
    this.name = stringMapData["Name"]?.value || "Unknown";
    this.gender = stringMapData["Gender"]?.value || "Unknown";
    this.dob = stringMapData["Date of birth"]?.value || "Unknown";
  }
}
