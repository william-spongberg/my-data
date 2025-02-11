export interface Avertiser {
  name: string;
  has_data_file_on_you: boolean;
  has_remarketing: boolean;
  has_in_person_store_visit: boolean;
}

export interface Post {
  author: string;
  href: string;
  timestamp: number;
}
