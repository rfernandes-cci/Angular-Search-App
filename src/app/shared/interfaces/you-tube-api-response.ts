import { YouTube } from "./you-tube";

export interface YouTubeApiResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: YouTube[];
}
