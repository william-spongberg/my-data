import { RenderType } from "../../../global/types.ts";
import PersonalInfo from "./PersonalInfo.tsx";
import CurrentLocation from "./CurrentLocation.tsx";
import PreviousLocations from "./PreviousLocations.tsx";
import * as Text from "../../../components/Text.tsx";

export default class Info implements RenderType {
  personalInfo: PersonalInfo = new PersonalInfo();
  currentLocation: CurrentLocation = new CurrentLocation();
  previousLocations: PreviousLocations = new PreviousLocations();

  render() {
    return (
      <>
        <Text.Heading>
          Your Information
        </Text.Heading>
        <br />
        {this.personalInfo.render()}
        <br />
        {this.currentLocation.render()}
        <br />
        {this.previousLocations.render()}
        <br />
      </>
    );
  }
}
