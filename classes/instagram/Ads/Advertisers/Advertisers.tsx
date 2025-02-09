import { RenderType } from "../../../../types/global/types.ts";
import AdvertisersUsingData from "./AdvertisersUsingData.tsx";
import CategoriesUsedToReachYou from "./CategoriesUsedToReachYou.tsx";

export default class Avertisers implements RenderType {
  advertisers_using_your_data: AdvertisersUsingData =
    new AdvertisersUsingData();
  categories_used_to_reach_you: CategoriesUsedToReachYou =
    new CategoriesUsedToReachYou();

  render() {
    return (
      <>
        <p class="text-xl">Instagram Ads</p>
        <br />
        {this.advertisers_using_your_data?.render()}
        <br />
        {this.categories_used_to_reach_you?.render()}
      </>
    );
  }

  // for later if needed
  //ads_about_meta: AdsAboutMeta;
}