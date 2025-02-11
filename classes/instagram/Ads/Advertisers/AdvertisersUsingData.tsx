import { DataType, FileData } from "../../../../global/types.ts";
import { Advertiser } from "../../../../types/instagram.ts";
import * as Text from "../../../../components/Text.tsx";

export default class AdvertisersUsingData implements DataType {
  advertisers: Advertiser[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.advertisers.length === 0) {
      return (
        <Text.Small>
          No advertisers found.
        </Text.Small>
      );
    }

    return (
      <>
        <Text.SubHeading>Advertisers using your data</Text.SubHeading>
        <Text.Small>
          {`Your data has been sold to ${this.advertisers.length} advertisers`}
        </Text.Small>
        <Text.Small>
          {`Advertisers with data files on you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_data_file_on_you
            ).length
          }`}
        </Text.Small>
        <Text.Small>
          {`Advertisers with remarketing just for you: ${
            this.advertisers.filter((advertiser) => advertiser.has_remarketing)
              .length
          }`}
        </Text.Small>
        <Text.Small>
          {`Advertisers with in-person store visits from you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_in_person_store_visit
            ).length
          }`}
        </Text.Small>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.advertisers = jsonData.ig_custom_audiences_all_types.map(
      (advertiser: any) => {
        return {
          name: advertiser.advertiser_name,
          has_data_file_on_you: advertiser.has_data_file_custom_audience,
          has_remarketing: advertiser.has_remarketing_custom_audience,
          has_in_person_store_visit: advertiser.has_in_person_store_visit,
        } as Advertiser;
      },
    );
  }
}
