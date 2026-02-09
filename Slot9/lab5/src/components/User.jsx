import React from 'react';

const User = ({ user, resource }) => {
  try {
    let u = user;
    if (!u && resource) {
      u = resource.read();
    }
    if (!u) return null;

    return (
      <div className="user-card">
        <h4 className="mb-1">{u.name}</h4>
        <div className="user-meta">
          <div>Email: {u.email}</div>
          {u.phone && <div>Phone: {u.phone}</div>}
          {u.website && <div>Website: {u.website}</div>}
          {u.company?.name && <div>Company: {u.company.name}</div>}
        </div>
      </div>
    );
  } catch (error) {
    // If it's a Promise (suspender), rethrow so Suspense can handle it
    if (error && typeof error.then === 'function') throw error;
    const errorMsg = error?.message || error?.toString() || 'Đã có lỗi xảy ra';
    console.error('User component error:', errorMsg);
    throw new Error(errorMsg);
  }
};

export default User;
