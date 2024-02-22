import React from 'react';
import fetchPosts from '../api/fetchpost';


const resource = fetchPosts(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
); // returns a promise


const Postselector = ({ onSelectPost }) => {
    // throw new Promise(()=>console.log("data"))  // example
   const posts=resource.read()
   

    return (
        <div className='border w-fit rounded-md'>
    <select onChange={onSelectPost}>
    <option value="">Select Post</option>
    {posts.map((post) => (
        <option key={post.id} value={post.id}>
            {post.title}
        </option>
    ))}
</select>
</div>
    )
};

export default Postselector;
