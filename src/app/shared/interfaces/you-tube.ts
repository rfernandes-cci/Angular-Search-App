export interface YouTube {
    snippet: {
        title: boolean,
        channelTitle: string,
        description: string,
        thumbnails: {
            medium: {
                url: string
            }
        }
    }
}
