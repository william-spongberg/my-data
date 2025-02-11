import { DataType, FileData } from "../../../../types/global/types.ts";
import { Category } from "../../../../types/instagram/types.ts";
import * as Text from "../../../../components/Text.tsx";

export default class CategoriesUsedToReachYou implements DataType {
  categories: Category[] = [];

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
            <p key={category.name}>
              {`${category.name}`}
            </p>
          </Text.Small>
        ))}
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.categories = jsonData.label_values[0].vec.map(
      (category: any) => {
        return {
          name: category.value,
        } as Category;
      },
    );
  }
}
