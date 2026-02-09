// Simple suspense-compatible resource wrapper and fetch helpers
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      const status = response.status;
      if (status === 404) throw new Error('Không tìm thấy người dùng (404)');
      if (status >= 500) throw new Error('Lỗi máy chủ, vui lòng thử lại sau.');
      throw new Error(`Lỗi khi truy vấn dữ liệu (mã ${status})`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    const msg = (error && error.message) ? error.message : String(error);
    // network errors in fetch typically throw a TypeError with message 'Failed to fetch'
    if (msg.includes('Failed to fetch') || msg.toLowerCase().includes('network')) {
      throw new Error('Lỗi kết nối mạng — không thể kết nối server. Vui lòng kiểm tra kết nối Internet.');
    }
    throw new Error(msg);
  }
};

export const fetchPost = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      const status = response.status;
      if (status === 404) throw new Error('Không tìm thấy bài viết (404)');
      if (status >= 500) throw new Error('Lỗi máy chủ, vui lòng thử lại sau.');
      throw new Error(`Lỗi khi truy vấn dữ liệu (mã ${status})`);
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    const msg = (error && error.message) ? error.message : String(error);
    if (msg.includes('Failed to fetch') || msg.toLowerCase().includes('network')) {
      throw new Error('Lỗi kết nối mạng — không thể kết nối server. Vui lòng kiểm tra kết nối Internet.');
    }
    throw new Error(msg);
  }
};

// Create suspense resources
export const createUserResource = (userId) => {
  return wrapPromise(fetchUser(userId));
};

export const createPostResource = (postId) => {
  return wrapPromise(fetchPost(postId));
};

export const fetchAllUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      const status = response.status;
      if (status === 404) throw new Error('Không tìm thấy resource users (404)');
      if (status === 405) throw new Error('Phương thức không được phép (405)');
      if (status >= 500) throw new Error('Lỗi máy chủ khi lấy users, vui lòng thử lại sau.');
      throw new Error(`Lỗi khi truy vấn dữ liệu users (mã ${status})`);
    }
    const users = await response.json();
    if (!Array.isArray(users)) throw new Error('Dữ liệu trả về không đúng định dạng (expected array)');
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    const msg = (error && error.message) ? error.message : String(error);
    if (msg.includes('Failed to fetch') || msg.toLowerCase().includes('network')) {
      throw new Error('Lỗi kết nối mạng — không thể kết nối server để lấy danh sách users.');
    }
    throw new Error(msg);
  }
};

export const fetchAllPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      const status = response.status;
      if (status === 404) throw new Error('Không tìm thấy resource posts (404)');
      if (status === 405) throw new Error('Phương thức không được phép (405)');
      if (status >= 500) throw new Error('Lỗi máy chủ khi lấy posts, vui lòng thử lại sau.');
      throw new Error(`Lỗi khi truy vấn dữ liệu posts (mã ${status})`);
    }
    const posts = await response.json();
    if (!Array.isArray(posts)) throw new Error('Dữ liệu trả về không đúng định dạng (expected array)');
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    const msg = (error && error.message) ? error.message : String(error);
    if (msg.includes('Failed to fetch') || msg.toLowerCase().includes('network')) {
      throw new Error('Lỗi kết nối mạng — không thể kết nối server để lấy danh sách posts.');
    }
    throw new Error(msg);
  }
};

export const createAllUsersResource = () => {
  return wrapPromise(fetchAllUsers());
};

export const createAllPostsResource = () => {
  return wrapPromise(fetchAllPosts());
};
