import { DataType, FileData } from "../../../../types/global/types.ts";
import { Category } from "../../../../types/instagram/types.ts";

export default class CategoriesUsedToReachYou implements DataType {
  categories: Category[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.categories.length === 0) {
      return <p></p>;
    }

    return (
      <>
        <p>Categories used to reach you</p>
        <p class="text-sm italic">
          {`Your data has been used to reach you in ${this.categories.length} categories`}
        </p>
        {this.categories.map((category) => (
          <p key={category.name} class="text-sm">
            {`${category.name}`}
          </p>
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
