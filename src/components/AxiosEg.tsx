import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AxiosEg: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Post[]> = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error:', axiosError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Posts from JSONPlaceholder</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AxiosEg;
