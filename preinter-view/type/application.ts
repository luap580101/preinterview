export interface ApplicationFeed {
  feed: {
    title: string;
    id: string;
    updated: string;
    entry: ApplicationEntry[];
  };
}

export interface ApplicationEntry {
  "im:name": {
    label: string;
  };
  "im:id": {
    label: string;
  };
  "im:price": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  category: {
    attributes: {
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
  };
  title?: {
    label: string;
  };
  "im:rating"?: {
    label: number;
  };
  "im:ratingCount"?: {
    label: number;
  };
}
