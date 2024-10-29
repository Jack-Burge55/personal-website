import { useNavigate, useParams } from "react-router-dom";
import blogPosts from "../assets/blogPosts.json";
import { useEffect } from "react";

const BlogPage = () => {
  const navigate = useNavigate();
  const { blogId } = useParams() as { blogId: number };
  const blogPost = blogPosts[blogId - 1];

  useEffect(() => {
    if (blogPost === undefined) {
      navigate("/");
    }
  }, [blogPost, navigate]);

  return (
    <>
      {blogPost &&
        blogPost.body.map((segment, index) => {
          if (segment.type === "title") {
            return (
              <h3 className="title is-3" key={index}>
                {segment.content}
              </h3>
            );
          }
          if (segment.type === "subtitle") {
            return (
              <h3 className="title is-5" key={index}>
                {segment.content}
              </h3>
            );
          }
          if (segment.type === "text") {
            return (
              <p className="block" key={index}>
                {segment.content}
              </p>
            );
          }
          if (segment.type === "central-picture") {
            console.log(segment.content);

            return (
              <div key={index} className="block">
                <img
                  className="photo"
                  src={segment.content}
                  alt={segment.alt}
                />
                <p>{segment.text}</p>
              </div>
            );
          }
          return <div />;
        })}
    </>
  );
};

export default BlogPage;
