import React, { useEffect, useState } from 'react';

const Postselector = ({ onSelectPost }) => {
    const [posts, setPosts] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [postError, setPostError] = useState(null);

    useEffect(() => {
        setIsPostLoading(true);
        setPostError(null);
        (async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
                const data = await response.json();

                if (response.ok) {
                    setIsPostLoading(false);
                    setPosts(data);
                } else {
                    setIsPostLoading(false);
                    setPostError("There was an error");
                }
            } catch (err) {
                setIsPostLoading(false);
                setPostError(err?.message);
            }
        })();
    }, []);

    // return content
    let Postcontent;

    if (isPostLoading) {
        Postcontent = <div>Posts Loading....</div>;
    } else if (!isPostLoading && postError) {
        Postcontent = <div className='text-white bg-[red] p-5'>{postError}</div>;
    } else {
        Postcontent = (
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
        );
    }

    //  return data
    return <div>{Postcontent}</div>;
};

export default Postselector;
