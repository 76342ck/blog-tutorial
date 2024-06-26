import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

// Make the posts route loader
export const loader = async () => {
    return json({
        posts: await getPosts()
    });
};

//Render links to our posts
export default function Posts() {
    const { posts } = useLoaderData<typeof loader>()
    return (
        <main>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            to={post.slug}
                            className="text-blue-600 underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}