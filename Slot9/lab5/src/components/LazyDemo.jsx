import React, { Suspense, useMemo, useState } from 'react';
import { createUserResource, createPostResource } from '../api';
import ErrorBoundary from './ErrorBoundary';
import './LazyDemo.css';

const User = React.lazy(() => import('./User'));
const Post = React.lazy(() => import('./Post'));

const ids = [1,2,3,4,5];

const LazyDemo = () => {
  const [userId, setUserId] = useState(1);
  const [postId, setPostId] = useState(1);

  const userResource = useMemo(() => createUserResource(userId), [userId]);
  const postResource = useMemo(() => createPostResource(postId), [postId]);

  return (
    <div className="lazy-demo container py-4">
      <div className="hero">
        <div className="text-center">
          <h1 className="mb-2">Lazy Loading Demo</h1>
          <p className="mb-0">Demonstration of React.lazy + Suspense with on-demand fetching from JSONPlaceholder.</p>
        </div>
      </div>

      <div className="controls-bar">
        <div className="controls-left">
          <div className="me-2"><strong>Users</strong></div>
          {ids.map(id => (
            <button key={`u-${id}`} onClick={() => setUserId(id)} className={`btn btn-ghost btn-ghost-sm btn-ghost-${id} ${userId===id? 'active-pill': ''}`}>
              User {id}
            </button>
          ))}
        </div>
        <div className="controls-right">Selected User: <strong>{userId}</strong> • Selected Post: <strong>{postId}</strong></div>
      </div>

      <div className="grid">
        <div>
          <div className="card h-100">
            <div className="card-header bg-primary text-white">User Component</div>
            <div className="card-body">
              <p className="small text-muted">Select a user to load:</p>
              <div className="mb-3 btn-group-wrap controls-left">
                {ids.map(id => (
                  <button
                    key={`u2-${id}`}
                    className={`btn ${userId===id? 'btn-primary active-pill' : 'btn-outline-primary btn-ghost'}`}
                    onClick={() => setUserId(id)}
                  >
                    User {id}
                  </button>
                ))}
              </div>

              <ErrorBoundary>
                <Suspense fallback={<div className="p-3"><div className="skeleton title"/><div className="skeleton line"/><div className="skeleton line"/><div className="skeleton small"/></div>}>
                  <User resource={userResource} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>

        <div>
          <div className="card h-100">
            <div className="card-header bg-success text-white">Post Component</div>
            <div className="card-body">
              <p className="small text-muted">Select a post to load:</p>
              <div className="mb-3 btn-group-wrap controls-left">
                {ids.map(id => (
                  <button
                    key={`p-${id}`}
                    className={`btn ${postId===id? 'btn-success active-pill' : 'btn-outline-success btn-ghost'}`}
                    onClick={() => setPostId(id)}
                  >
                    Post {id}
                  </button>
                ))}
              </div>

              <ErrorBoundary>
                <Suspense fallback={<div className="p-3"><div className="skeleton title"/><div className="skeleton line"/><div className="skeleton line"/></div>}>
                  <Post resource={postResource} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 technical">
        <div className="card-body">
          <h5>Technical Details</h5>
          <ul>
            <li>React.lazy: enables code splitting for components</li>
            <li>Suspense: shows fallback UI while components/data load</li>
            <li>Resource pattern: wraps promises to work with Suspense</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LazyDemo;
