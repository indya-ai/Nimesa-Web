import { useState, useEffect } from "react";
import Card from "@/components/blog/Card";
import Banner from "@/components/common/Banner";

function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [tags, setTags] = useState([
    { name: "All", id: null },
    { name: "AWS", id: 1 },
    { name: "Cost Optimisation", id: 2 },
    { name: "Data Protection", id: 3 },
    { name: "MSSQL", id: 4 },
    { name: "MySQL", id: 5 },
    { name: "Nimesa 2.0", id: 6 },
    { name: "Nimesa for Cloud", id: 7 },
    { name: "Nimesa for Database", id: 8 },
    { name: "Oracle", id: 9 },
    { name: "Press Release", id: 10 },
    { name: "Ransomware Attacks", id: 11 },
    { name: "vSphere", id: 12 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Show loader
      try {
        const response = await fetch(
          "https://nimesa.io/wp-json/wp/v2/posts?_embed&per_page=100"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchPosts();
  }, []);

  const timeAgo = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    if (diffInHours > 0)
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    if (diffInMinutes > 0)
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearchTerm = post.title.rendered
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

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
              onClick={() => setSelectedTag(tag.id)} // Set selected tag
              className={`py-2 px-4 min-w-fit mb-3 rounded-full md:text-base text-xs transition ${
                selectedTag === tag.id
                  ? "bg-black text-white" // Highlight selected tag
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
                <h4 className="md:text-[44px] text-[24px] text-[#212121] font-bold playfair-font">
                  {filteredPosts[0].title.rendered}
                </h4>
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
