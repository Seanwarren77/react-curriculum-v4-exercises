import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    try {
      setLoading(true);
      setError('');

      const data = await getSinglePost(1);

      setPost(data);
    } catch (err) {
      setError('Failed to fetch post');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleGetPost}>
        Get post
      </button>

      <div className="content">
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
