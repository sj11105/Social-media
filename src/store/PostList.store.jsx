import { createContext, useState,useEffect, useReducer } from "react";

   export const PostList=createContext({
  postList:[],
  addpost: ()=>{},
  fetching:false,
  deletepost:()=>{},
 

 });
 const PostListProvider=({children})=>{
  const postlistreducer=(currpostlist,action)=>{
    let newpostlist=currpostlist;
    if(action.type==="Delete"){
      
      newpostlist=currpostlist.filter((post)=>post.id !==action.payload.postId);

    }
    else if(action.type==="Add"){
      newpostlist=[action.payload,...currpostlist]
    }
    else if(action.type==="AddInitial"){
      newpostlist=action.payload.posts;
    }
    return newpostlist;
  };
  const[postList,dispatchPostList]=useReducer(postlistreducer,[])
  const[fetching,setfetching]=useState(false);


  const addpost=(userid,title,body,reactions,tags)=>{
dispatchPostList({
  type:'Add',
  payload:{
    userid,title,body,reactions,tags

  },
});
  };
  const deletepost=(postId)=>{
    dispatchPostList({
      type:'Delete',
      payload:{postId,},
    });
  

  };
  const addinitialpost=(posts)=>{
    dispatchPostList({
      type:'AddInitial',
      payload:{
     
    posts,
    
      },
    });
      };
      useEffect(()=>
      {
        setfetching(true);
        fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then((data)=>{
        addinitialpost(data.posts)
        setfetching(false)
      });
    
        },[]);
  return(
<PostList.Provider value={{
  postList,addpost,deletepost,fetching,
}}>  {children}</PostList.Provider>
  )
 }

 export default PostListProvider;