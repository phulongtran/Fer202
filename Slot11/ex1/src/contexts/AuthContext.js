import { createContext, useReducer } from "react";

/* =====================================================
   1. Mock Data (Thay thế API call)
===================================================== */
const mockAccounts = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "123456",
    role: "admin",
    status: "active"
  },
  {
    id: 2,
    username: "user1",
    email: "user1@example.com",
    password: "123456",
    role: "user",
    status: "active"
  },
  {
    id: 3,
    username: "user2",
    email: "user2@example.com",
    password: "123456",
    role: "user",
    status: "locked"
  }
];

/* =====================================================
   2. Tạo AuthContext
===================================================== */
export const AuthContext = createContext();

/* =====================================================
   3. Initial State
===================================================== */
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

/* =====================================================
   4. Reducer xử lý state
===================================================== */
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}

/* =====================================================
   5. AuthProvider
===================================================== */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  /* ==============================
     Hàm Login
     - Kiểm tra username/password
     - Kiểm tra status active
     - Kiểm tra role admin
  ============================== */
  const login = (username, password) => {
    const account = mockAccounts.find(
      (acc) =>
        acc.username === username &&
        acc.password === password
    );

    // Sai tài khoản
    if (!account) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Sai username hoặc password"
      });
      return;
    }

    // Tài khoản bị khóa
    if (account.status !== "active") {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Tài khoản đã bị khóa"
      });
      return;
    }

    // Không phải admin
    if (account.role !== "admin") {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Chỉ admin mới được đăng nhập"
      });
      return;
    }

    // Thành công
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: account
    });
  };

  /* ==============================
     Hàm Logout
  ============================== */
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  /* ==============================
     Trả dữ liệu cho toàn app
  ============================== */
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};