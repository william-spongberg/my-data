import { DataType, FileData } from "../../../types/global/types.ts";

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
        <p>Your personal information</p>
        <p>{`Email: ${this.email}`}</p>
        <p>{`Phone: ${this.phone}`}</p>
        <p>{`Username: ${this.username}`}</p>
        <p>{`Name: ${this.name}`}</p>
        <p>{`Gender: ${this.gender}`}</p>
        <p>{`Date of Birth: ${this.dob}`}</p>
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