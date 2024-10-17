import React from 'react';
import { Link } from 'react-router-dom';

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

const PostsList: React.FC = () => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
