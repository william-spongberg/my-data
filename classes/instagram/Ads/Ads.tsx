import { RenderType } from "../../../global/types.ts";
import ImpressionsInfo from "./Impressions/ImpressionsInfo.tsx";
import Avertisers from "./Advertisers/Advertisers.tsx";
import * as Text from "../../../components/Text.tsx";

export default class Ads implements RenderType {
  impressions: ImpressionsInfo = new ImpressionsInfo();
  advertisers: Avertisers = new Avertisers();

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
