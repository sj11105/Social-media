import { useContext, useRef } from "react";
import {PostList} from '../store/PostList.store'

const Form=()=>{
  const{addpost}=useContext(PostList)
  const UserIdelemenet=useRef();
  const titleelement=useRef();
  const bodyelement=useRef();
  const reactionelement=useRef();
  const tagelement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
   const userid= UserIdelemenet.current.value;
   const  title=titleelement.current.value;
   const body=bodyelement.current.value;
   const reactions= reactionelement.current.value;
   const tags=tagelement.current.value.split("");
   UserIdelemenet.current.value=""
   titleelement.current.value=""
   bodyelement.current.value=""
   reactionelement.current.value=""
   tagelement.current.value="";

   fetch("https://dummyjson.com/posts/add", {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userid:userid,
    title: title,
    body: body,
    reactions:reactions,
    tags:tags,
    
    /* other post data */
  }),
})
.then((res) => res.json())
.then(console.log);

addpost(userid,title,body,reactions,tags);


  };

  return(
<form className="postform" onSubmit={handleSubmit}>
  
  <div class="mb-3 " >
    <label for="UserId" class="form-label">User Id</label>
    <input type="text" ref={UserIdelemenet} placeholder="enter your user id here"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" ref={titleelement} class="form-control" id="exampleInputPassword1" placeholder="Tell us how you feel today"/>
  </div>
  <div class="mb-3">
    <label for="body" class="form-label" >body</label>
    <textarea type="text"  ref={bodyelement}class="form-control"  row="8" id="exampleInputPassword1" placeholder="Tell us More about the  post"/>
  </div>
  <div class="mb-3">
    <label for="reactions" class="form-label">reactions</label>
    <input type="number"  ref={reactionelement}class="form-control" id="exampleInputPassword1" placeholder="number of reactions"/>
  </div>
  <div class="mb-3">
    <label for="tags" class="form-label">tags</label>
    <input type="text"  ref={tagelement}class="form-control" id="exampleInputPassword1" placeholder="enter tags here"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Post</button>
</form>
  )
}
export default Form;