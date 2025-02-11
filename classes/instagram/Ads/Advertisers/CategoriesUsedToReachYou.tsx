import { DataType, FileData } from "../../../../global/types.ts";
import * as Text from "../../../../components/Text.tsx";

export default class CategoriesUsedToReachYou implements DataType {
  categories: string[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.categories.length === 0) {
      return (
        <Text.Small>
          No categories found.
        </Text.Small>
      );
    }

    return (
      <>
        <Text.SubHeading>Categories used to reach you</Text.SubHeading>
        <Text.Small>
          {`Your data has been used to reach you in ${this.categories.length} categories`}
        </Text.Small>
        {this.categories.map((category) => (
          <Text.Small>
              {`${category}`}
          </Text.Small>
        ))}
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.categories = jsonData.label_values[0].vec.map(
      (category: any) => {
        return category.value;
      },
    );
  }
}
