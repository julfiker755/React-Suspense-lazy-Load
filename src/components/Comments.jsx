import { useEffect, useState } from "react";


export default function Comments({ postId }) {
    const [comments, setcomments] = useState([]);
    const [iscommentsLoading, setcommentsLoading] = useState(false);
    const [commentsError, setcommentsError] = useState(null);

    useEffect(() => {
        setcommentsLoading(true);
        setcommentsError(null);
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                const data = await response.json();

                if (response.ok) {
                    setcommentsLoading(false);
                    setcomments(data);
                } else {
                    setcommentsLoading(false);
                    setcommentsError("There was an error");
                }
            } catch (err) {
                setcommentsLoading(false);
                setcommentsError(err?.message);
            }
        })();
    }, [postId]);

// set content
    let commentcontent;

    if (iscommentsLoading) {
        commentcontent = <div>Comments Loading....</div>;
    } else if (!iscommentsLoading && commentsError) {
        commentcontent = <div className='text-white bg-[red] p-5'>{commentsError}</div>;
    } else {
        commentcontent = (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.name}</li>
                    ))}
                </ul>
        );
    }


//    return data for website
    return <div className="mt-5 border p-3 rounded-md">
        <h1 className="text-3xl font-bold py-2">Comments</h1>
        {commentcontent}
        </div>
}