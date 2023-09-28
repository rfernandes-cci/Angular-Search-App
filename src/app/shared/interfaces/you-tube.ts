export interface YouTube {

    snippet: {
        title: string,
        channelTitle: string,
        description: string,
        thumbnails: {
            medium: {
                url: string
            }
        }
    }
}
