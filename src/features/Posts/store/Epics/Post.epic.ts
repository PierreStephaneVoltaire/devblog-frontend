import {GETPOSTS, POSTSARELOADED, POSTSARELOADING} from "../Constants/ActionTypes";
import {debounce, filter, map, mapTo, mergeMap} from "rxjs/operators";
import {ofType} from "redux-observable";
import {ajax} from "rxjs/ajax";
import {dispatch} from "rxjs/internal-compatibility";
import {interval} from "rxjs";


export const GetPostEpic=(action$:any)=>action$.pipe(
    ofType(GETPOSTS),
    debounce(() => interval(1000)),
    mergeMap(action =>
        ajax({
            method: "GET",
            url: `http://localhost:8040/post`}).pipe(
            map((res:any) => {console.log(res.response);
                return{type :POSTSARELOADED,payload:res.response}})
        )),
);
