export interface Post {
    PostID?:number
    PostTitle: string
    PostSubTitle: string
    author:string
    PostThumbNailImage: string
    CreatedDate: Date | string
    UpdateDate: Date | string
    DRAFT: boolean
    PostContent: string
}

export interface PostState{
    PostMap:Object,
    SelectedPostId:number,
    postIsLoading:boolean,
    postLoaded:boolean
}
