import React, { Suspense } from 'react';
import { createAllUsersResource } from '../api';
import User from './User';
import ErrorBoundary from './ErrorBoundary';
import './AllUsers.css';

const allUsersResource = createAllUsersResource();

const AllUsersList = () => {
  try {
    const users = allUsersResource.read();
    if (!users || users.length === 0) {
      return (
        <div className="alert alert-warning" role="alert">
          ⚠️ Không tìm thấy user
        </div>
      );
    }

    return (
      <div className="all-users-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
              <div style={{color: '#888', fontSize: 13}}>{user.company?.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    // If Suspense pending Promise was thrown, rethrow it so Suspense can handle loading state
    if (error && typeof error.then === 'function') throw error;
    const errorMsg = error?.message || error?.toString() || 'Đã có lỗi xảy ra';
    console.error('Error rendering users:', { error, message: errorMsg });
    // throw readable message for ErrorBoundary
    throw new Error(errorMsg);
  }
};

const AllUsers = () => {
  return (
    <div className="all-users py-4">
      <div className="container">
        <div className="users-header text-center mb-4">
          <div className="header-icon">👥</div>
          <h1>Danh sách User</h1>
          <p className="text-muted">Hiển thị danh sách users từ JSONPlaceholder (demo)</p>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5"><span>⏳ Đang tải danh sách users...</span></div>}>
            <AllUsersList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AllUsers;