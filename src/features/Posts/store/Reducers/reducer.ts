import {POSTSARELOADED} from "../Constants/ActionTypes";
import {Post, PostState} from "../models/post";

export const posts = (state: PostState = {
    postIsLoading: false,
    postLoaded: false,
    PostMap: {},
    SelectedPostId: 0
} as PostState, action:any) => {
    switch (action.type) {
        case POSTSARELOADED:
            console.log(state,action)
            let newPostMap:any = {}
            Array.from(action.payload as Post[]).forEach((post: Post) => {
                if (post.PostID != null) {
                    console.log(post.PostID)
                    newPostMap[post.PostID]= post
                }
            })
            console.log(typeof newPostMap)
            return {
                // `login` is the username
                postLoaded: true,
                postIsLoading: false,
                PostMap:newPostMap
            };

        default:
            return state;
    }
};
