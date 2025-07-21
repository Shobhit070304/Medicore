import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { auth, googleProvider, signInWithPopup } from "../lib/firebase";
import { toast } from "react-toastify";
import React from "react";

const Auth = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  const { user, leading } = useAuth();

  const loginWithGoogle = async () => {
    try {
      const userData = await signInWithPopup(auth, googleProvider);
      login(userData.user);
      navigate("/");
      toast.success("Authentication successful");
    } catch (error) {
      toast.error("Google authentication failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link
          to="/"
          className="text-2xl flex justify-end hover:text-gray-400 cursor-pointer"
        >
          ✕
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          {!user ? (
            <>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Welcome to MediCore
              </h2>
              <p className="text-white/60 text-base">
                Sign in or create your account to continue
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Hello, {user.name.split(" ")[0] || "User"} 👋
              </h2>
              <p className="text-white/60 text-base">
                Welcome back! Manage your account and explore features
              </p>
            </>
          )}
        </div>

        {/* Google Sign-In Button */}
        {!user ? (
          <button
            type="button"
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-2 border border-white/20 bg-transparent hover:bg-white/10 text-white py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_993_771)">
                <path
                  d="M19.8052 10.2306C19.8052 9.55053 19.7491 8.86797 19.629 8.20001H10.2V12.0491H15.6262C15.3982 13.2821 14.6691 14.3566 13.6272 15.0386V17.0371H16.6872C18.3482 15.5251 19.8052 13.1491 19.8052 10.2306Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.2 20C12.7009 20 14.7718 19.1791 16.2872 17.8371L13.6272 15.0386C12.8136 15.5986 11.7655 15.9246 10.2 15.9246C7.78909 15.9246 5.73727 14.2936 4.96455 12.1182H1.80365V14.1918C3.34818 17.3664 6.57455 20 10.2 20Z"
                  fill="#34A853"
                />
                <path
                  d="M4.96455 12.1182C4.76455 11.5582 4.64909 10.9582 4.64909 10.3336C4.64909 9.70898 4.76455 9.10898 4.96455 8.54898V6.47546H1.80364C1.16455 7.75898 0.8 9.19181 0.8 10.3336C0.8 11.4755 1.16455 12.9082 1.80364 14.1918L4.96455 12.1182Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.2 4.74182C11.6655 4.74182 12.7655 5.34909 13.3891 5.92455L16.3409 3.05818C14.7655 1.64182 12.7009 0.666382 10.2 0.666382C6.57455 0.666382 3.34818 3.29909 1.80365 6.47546L4.96455 8.54898C5.73727 6.37364 7.78909 4.74182 10.2 4.74182Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_993_771">
                  <rect
                    width="19.0052"
                    height="19.3333"
                    fill="white"
                    transform="translate(0.8 0.666382)"
                  />
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button>
        ) : (
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center bg-red-600 justify-center gap-2 border border-white/20 bg-transparent hover:bg-red-500 text-white py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            Logout
          </button>
        )}

        {/* Footer */}
        {!user && (
          <div className="text-center text-xs text-white/40 mt-8">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
