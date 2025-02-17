import { RenderType } from "../../../global/types.ts";
import ImpressionsInfo from "./Impressions/ImpressionsInfo.tsx";
import Advertisers from "./Advertisers/Advertisers.tsx";
import * as Text from "../../../components/Text.tsx";

export default class Ads implements RenderType {
  impressions: ImpressionsInfo = new ImpressionsInfo();
  advertisers: Advertisers = new Advertisers();

  render() {
    return (
      <>
        <Text.Heading>Ad Information</Text.Heading>
        <br />
        {this.impressions.render()}
        <br />
        {this.advertisers.render()}
        <br />
      </>
    );
  }
}
