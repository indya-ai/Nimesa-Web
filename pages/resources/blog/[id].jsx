// pages/resources/blog/[id].jsx

import Banner from "@/components/common/Banner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(
            `https://nimesa.io/wp-json/wp/v2/posts/${id}?_embed`
          );
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Banner title="Blog" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto py-8 px-2">
        <h1 className="text-3xl font-bold mb-8 md:px-4">
          {post.title.rendered}
        </h1>
        <div
          className="prose space-y-6 md:px-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
}

export default BlogDetails;
