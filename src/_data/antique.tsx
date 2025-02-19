export interface DisplayAntique {
  Name: string;
  Price: number;
  MainPhotoURL: string;
  AdditionalPhotoURLs: string[];
}

// From the Strapi api response
export interface RawAntique {
  Name: string;
  TimePeriod: string;
  Price: number;
  MainPhoto: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  AdditionalPhotos: AdditionalPhoto[];
}

export interface AdditionalPhoto {
  formats: {
    thumbnail: {
      url: string;
    };
  };
}
