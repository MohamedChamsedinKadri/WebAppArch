import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Define the Post type
type Post = {
    id: number;
    title: string;
    content: string;
};

// Simulated post data
const posts: Post[] = [
    { id: 1, title: "First Post", content: "Mohammad kadri loves react hhhhhhhhhhhhhhhhhhhhhh" },
    { id: 2, title: "Second Post", content: "you know what they call cheese in france ? le fromaaaaaaage " }
];

const EditPost: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the post ID from the URL
    const post = id ? posts.find((p) => p.id === parseInt(id)) : undefined;
    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Updated Post: ${title}, ${content}`);
        // Simulate saving to the backend
        navigate(`/posts/${id}`);
    };

    if (!post) return <h2>Post not found!</h2>;

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    Content:
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
