import React from "react";
import {getAllHashtags} from "../api/twittsApi"

var CounterStateContext = React.createContext();
var CounterDispatchContext = React.createContext();

function TwittReducer(state, action) {
  switch (action.type) {
    case "TWEET_TEXT":
      return {...state, TweetText: action.payload};
    case "TWEET_HASHTAG_LIST":
      return {...state, Hashtags: action.payload};
    case "TWEET_LIST":
      return {...state, TweetList: action.payload};
    case "TWEET_LIKE":
      const tweetid = action.payload;
      const tweetindex = state.TweetList.findIndex(item => item.textid === tweetid);
      if(tweetindex === -1) {
        return state
      }
      return {...state , TweetList:[...state.TweetList.slice(0 , tweetindex),{...state.TweetList[tweetindex] , likes:state.TweetList[tweetindex].likes+1}, ...state.TweetList.slice(tweetindex + 1)]}
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TwittProvider({children}) {
  var [state, dispatch] = React.useReducer(TwittReducer, {
    TweetText:"",
    TweetList:[],
    Hashtags:[]
  });
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useTwittState() {
  var context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useTwittDispatch() {
  var context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {TwittProvider, useTwittState, useTwittDispatch, setTweetText , setTweetLikes, setTweetList ,setHashtagList, updateHashtagList};

// ###########################################################
function setTweetText(dispatch , TweetText) {
  dispatch({
    type: "TWEET_TEXT",
    payload:TweetText
  });
}

function setTweetLikes(dispatch , id) {
  dispatch({
    type: "TWEET_LIKE",
    payload:id
  });
}

function setTweetList(dispatch , list) {
  dispatch({
    type: "TWEET_LIST",
    payload:list
  });
}

function setHashtagList(dispatch , list) {
  dispatch({
    type: "TWEET_HASHTAG_LIST",
    payload:list
  });
}
function updateHashtagList(dispatch) {
getAllHashtags((isok,data)=>{
  if(isok){
    dispatch({
      type: "TWEET_HASHTAG_LIST",
      payload:data
    });
  }
  }
)}



