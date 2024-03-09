import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/PostList.store"
import Welcome from "./Welcome";
import Loading from "./Loading";
const PostList=()=>{
  const{postList,fetching}=useContext(PostListData);
 
  
  return(
    <>
    {fetching &&<Loading />}
    {!fetching &&postList.length==0 && <Welcome  />}
    {!fetching &&postList.map((post)=>(<Post key={post.id} post={post} />))}

</>
  );

};

export default PostList;