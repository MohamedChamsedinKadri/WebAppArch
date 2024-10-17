import {Link} from "react-router-dom";

const blogPosts = {
    'first-blog-post': {
        title: 'First Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
        title: 'Second Blog Post',
        description: 'Hello React Router v6'
    }
};
export default function PostLists(){
    return (
        <ul>
            {Object.entries(blogPosts).map(([slug, post]) =>
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        {post.title}
                    </Link>
                </li>
            )}
        </ul>
    );
}