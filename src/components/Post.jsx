import { MdDelete, MdOutlineUpdateDisabled } from "react-icons/md";
import { PostList } from "../store/PostList.store";
import { useContext } from "react";
const Post=({post})=>{
  const{deletepost}=useContext(PostList);
  return(
    <>
    <div class="card postcard" style={{width: "18rem"}}>
 
  <div class="card-body">
   
    <h5 class="card-title">{post.title}</h5>
    <div onClick={()=>deletepost(post.id)}>
  <MdDelete />
  </div>
    <p class="card-text">{post.body}</p>
    <div class="alert alert-success" role="alert">
  {`this post has been reacted by ${post.reactions} people`}
</div>

  </div>
 
</div>

</>

  )
}
export default Post;