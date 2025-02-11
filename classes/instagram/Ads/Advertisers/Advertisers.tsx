import { RenderType } from "../../../../global/types.ts";
import AdvertisersUsingData from "./AdvertisersUsingData.tsx";
import CategoriesUsedToReachYou from "./CategoriesUsedToReachYou.tsx";
import * as Text from "../../../../components/Text.tsx";

export default class Advertisers implements RenderType {
  advertisers_using_your_data: AdvertisersUsingData =
    new AdvertisersUsingData();
  categories_used_to_reach_you: CategoriesUsedToReachYou =
    new CategoriesUsedToReachYou();

  render() {
    return (
      <>
        <Text.Heading>Instagram Ads</Text.Heading>
        <br />
        {this.advertisers_using_your_data?.render()}
        <br />
        {this.categories_used_to_reach_you?.render()}
        <br />
      </>
    );
  }

  // for later if needed
  //ads_about_meta: AdsAboutMeta;
}
