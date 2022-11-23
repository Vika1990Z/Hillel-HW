import FormicForm from "../components/FormicForm"

import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]); 

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Posts</h2>
            <div className='detailes d-flex'>
                <FormicForm setPosts={setPosts} posts = {posts}/>
                <div className="posts-nav">
                  <h1>Available Posts</h1>
                  <ul>
                  {posts.length === 0 
                    ? <p>No added Posts</p>   
                    : posts.map(post => (
                  
                          <li 
                            className="post-title" 
                            key={Math.floor(Math.random()*100)}
                          >
                              {post.title}              
                          </li>
                  
                  )
                )}
                </ul>
                    </div>           
            </div>
            {posts.length === 0 
              ? ""
              :
              <div className='detailes'>
               {posts.map(post => (
                  <div className="post" key={Math.floor(Math.random()*100)}>
                    <h1 className="color">{post.title}</h1>
                    <h4>Author: User-{post.userId}</h4>
                    <p>{post.body}</p>
                    <hr className="color"/>
                    
                  </div>
                  
                  ))}
              </div>
            }
      </main>
    );
  }