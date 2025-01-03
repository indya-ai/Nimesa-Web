import { useState, useEffect } from "react";
import Card from "@/components/blog/Card";
import Banner from "@/components/common/Banner";
import Link from "next/link";

function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  // Fetch Tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "https://nimesa.io/wp-json/wp/v2/categories"
        );
        const data = await response.json();
        const allTags = [{ name: "All", id: null }, ...data];
        setTags(allTags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  // Fetch Posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://nimesa.io/wp-json/wp/v2/posts?_embed&per_page=100"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Format Date
  const timeAgo = (date) => {
    const postDate = new Date(date);
    return postDate.toLocaleDateString("en-GB"); // 'dd/mm/yyyy' format
  };

  // Filter Posts by Search and Tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearchTerm = post.title.rendered
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === null || post.categories.includes(selectedTag);

    return matchesSearchTerm && matchesTag;
  });

  return (
    <div>
      <Banner title="Blog" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto py-8 px-[2px]">
        {/* Search Bar */}
        <div className="group relative bg-white md:w-[453px] overflow-hidden rounded-full">
          <img
            src="/assets/images/career/search-icon.svg"
            alt="search icon"
            className="absolute left-3 top-1/2 -mt-2.5 text-gray pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500"
          />
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-gray py-3 pl-10 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-row items-center overflow-x-auto md:flex-wrap my-7 gap-4">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`py-2 px-4 min-w-fit mb-3 rounded-full md:text-base text-xs transition ${
                selectedTag === tag.id
                  ? "bg-black text-white"
                  : "bg-white text-gray border border-gray-300"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="loader">Loading...</div>
          </div>
        ) : filteredPosts.length > 0 ? (
          <>
            {/* First Card */}
            <div className="rounded-[24px] rounded-r-0 grid md:grid-cols-2 items-center mb-4 bg-[#F8F8F9] overflow-hidden">
              <img
                src={
                  filteredPosts[0]._embedded?.["wp:featuredmedia"]?.[0]
                    ?.source_url
                }
                alt={filteredPosts[0].title.rendered}
                className="w-full object-cover"
              />
              <div className="md:px-9 px-4 py-5 space-y-3">
                <p className="text-gray">{timeAgo(filteredPosts[0].date)}</p>
                <Link
                  href={`/resources/blog/${filteredPosts[0].id}`} // Dynamic route
                >
                  <h4 className="md:text-[44px] text-[24px] text-[#212121] font-bold playfair-font">
                    {filteredPosts[0].title.rendered}
                  </h4>
                </Link>
              </div>
            </div>

            {/* Remaining Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(1).map((post, index) => (
                <Card
                  key={index}
                  title={post.title.rendered}
                  imageSrc={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                  }
                  excerpt={post.excerpt.rendered}
                  date={timeAgo(post.date)}
                  postId={post.id} // Pass postId to Card
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-black">No posts found.</div>
        )}
      </div>
    </div>
  );
}

export default Index;
