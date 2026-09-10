import React from 'react'

interface UserPostsProps {
  userId: string,
}
export default function UserPosts({userId}: UserPostsProps) {
      const [posts, setPosts] = useState([]);
      
      const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
        );
        setPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch posts");
      }
    };


  return (
   <div className="user-posts">
        <h2>Recent Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 150)}...</p>
              <span className="post-date">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
  )
}
