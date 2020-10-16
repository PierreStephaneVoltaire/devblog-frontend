import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';



import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {GetPostEpic} from "../features/Posts/store/Epics/Post.epic";
import {posts} from "../features/Posts/store/Reducers/reducer";
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import {catchError} from "rxjs/operators";



const epicMiddleware = createEpicMiddleware();
 


const rootEpic = (action$:any) =>
    combineEpics(...[    GetPostEpic
    ])(action$).pipe(
        catchError((error, source) => {
           console.error(error);
           return source;
        })
    );

export const rootReducer = combineReducers({
   posts,    counter: counterReducer,

});


export const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
