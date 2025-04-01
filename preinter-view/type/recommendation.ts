export interface RecommendationFeed {
  feed: {
    title: string;
    id: string;
    updated: string;
    entry: RecommendationEntry[];
  };
}

export interface RecommendationEntry {
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
}
