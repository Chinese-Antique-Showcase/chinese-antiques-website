export interface DisplayAntique {
  Name: string;

  ID: string;
  Description: string;

  Price: number;
  MainPhotoURL: string;
  AdditionalPhotoURLs: string[];
}

// From the Strapi api response
export interface RawResponseAntique {
  Name: string;

  documentId: string;
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

export interface IDItem {
  documentId: string;
}
