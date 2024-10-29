import blogPosts from "../assets/blogPosts.json";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <h3 className="title is-3">My Blog</h3>
      {blogPosts.map((post) => {
        return (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="tileSquare">
              <h5 className="title is-4">{post.title}</h5>
              <p>{post.description}</p>
              <p>{post.date}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Blog;
