import React from 'react';

const Post = ({ post, resource }) => {
  try {
    let p = post;
    if (!p && resource) {
      p = resource.read();
    }
    if (!p) return null;

    const truncate = (text, words = 28) => {
      if (!text) return '';
      const parts = text.split('\n').join(' ').split(' ');
      if (parts.length <= words) return text;
      return parts.slice(0, words).join(' ') + '...';
    };

    return (
      <div className="post-item">
        <h3 className="post-title">{p.title}</h3>
        <p className="post-body">{truncate(p.body, 32)}</p>
      </div>
    );
  } catch (error) {
    if (error && typeof error.then === 'function') throw error;
    const errorMsg = error?.message || error?.toString() || 'Đã có lỗi xảy ra';
    console.error('Post component error:', errorMsg);
    throw new Error(errorMsg);
  }
};

export default Post;
