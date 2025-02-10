import { RenderType } from "../../../types/global/types.ts";
import Impressions from "./Impressions/Impressions.tsx";
import Avertisers from "./Advertisers/Advertisers.tsx";

export default class Ads implements RenderType {
  impressions: Impressions = new Impressions();
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
