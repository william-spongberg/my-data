import { RenderType} from "../../../types/global/types.ts";
import PersonalInfo from "./PersonalInfo.tsx";
import CurrentLocation from "./CurrentLocation.tsx";
import PreviousLocations from "./PreviousLocations.tsx";

export default class Info implements RenderType {
  personalInfo: PersonalInfo = new PersonalInfo();
  currentLocation: CurrentLocation = new CurrentLocation();
  previousLocations: PreviousLocations = new PreviousLocations();

  render() {
    return (
      <>
        <p class="text-2xl">Your Information</p>
        {this.personalInfo.render()}
        <br />
        {this.currentLocation.render()}
        <br />
        {this.previousLocations.render()}
      </>
    );
  }
}