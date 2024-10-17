import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Define the Post type
type Post = {
    id: number;
    title: string;
    content: string;
};

// Simulated post data
const posts: Post[] = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." }
];

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the post ID from the URL
    const post = id ? posts.find((p) => p.id === parseInt(id)) : undefined;

    if (!post) return <h2>Post not found!</h2>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/posts/${id}/edit`}>Edit</Link>
        </div>
    );
};

export default PostDetails;
