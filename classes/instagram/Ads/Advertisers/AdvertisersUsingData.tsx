import { DataType, FileData } from "../../../../types/global/types.ts";
import { Avertiser } from "../../../../types/instagram/types.ts";

export default class AdvertisersUsingData implements DataType {
  advertisers: Avertiser[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.advertisers.length === 0) {
      return (
        <p>
          No advertisers found.
        </p>
      );
    }

    return (
      <>
        <p>Advertisers using your data</p>
        <p class="text-sm italic">
          {`Your data has been sold to ${this.advertisers.length} advertisers`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with data files on you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_data_file_on_you
            ).length
          }`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with remarketing just for you: ${
            this.advertisers.filter((advertiser) => advertiser.has_remarketing)
              .length
          }`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with in-person store visits from you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_in_person_store_visit
            ).length
          }`}
        </p>
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
        } as Avertiser;
      },
    );
  }
}
