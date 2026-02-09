import React, { Suspense } from 'react';
import { createAllPostsResource } from '../api';
import Post from './Post';
import ErrorBoundary from './ErrorBoundary';
import './AllPosts.css';

const allPostsResource = createAllPostsResource();

const AllPostsList = () => {
  try {
    const posts = allPostsResource.read();
    if (!posts || posts.length === 0) {
      return (
        <div className="alert alert-warning" role="alert">
          ⚠️ Không tìm thấy bài viết
        </div>
      );
    }
    return (
      <div className="all-posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  } catch (error) {
    if (error && typeof error.then === 'function') throw error;
    const errorMsg = error?.message || error?.toString() || 'Đã có lỗi xảy ra';
    console.error('Error rendering posts:', { error, message: errorMsg });
    throw new Error(errorMsg);
  }
};

const AllPosts = () => {
  return (
    <div className="all-posts py-4">
      <div className="container">
        <div className="posts-header text-center mb-4">
          <div className="header-icon">📰</div>
          <h1>Posts</h1>
          <p className="text-muted">All posts from JSONPlaceholder</p>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5"><span>⏳ Đang tải danh sách posts...</span></div>}>
            <AllPostsList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AllPosts;