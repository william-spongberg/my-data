import { RenderType } from "../../../types/global/types.ts";
import ImpressionsInfo from "./Impressions/ImpressionsInfo.tsx";
import Avertisers from "./Advertisers/Advertisers.tsx";

export default class Ads implements RenderType {
  impressions: ImpressionsInfo = new ImpressionsInfo();
  advertisers: Avertisers = new Avertisers();

  render() {
    return (
      <>
        <p class="text-2xl">Ad Information</p>
        {this.impressions.render()}
        <br />
        {this.advertisers.render()}
      </>
    );
  }
}
