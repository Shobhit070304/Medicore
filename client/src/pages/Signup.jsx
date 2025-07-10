import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // return (
  //   <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //     <div className="max-w-md w-full space-y-8">
  //       <div className="text-center">
  //         <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
  //           <UserPlus className="h-4 w-4 text-green-400 mr-2" />
  //           <span className="text-sm text-white/80">Join MediCore</span>
  //         </div>
  //         <h2 className="text-3xl font-bold gradient-text mb-4">
  //           Create Account
  //         </h2>
  //         <p className="text-gray-400 text-sm">
  //           Start your health journey with us
  //         </p>
  //       </div>

  //       <div className="glass-card rounded-3xl p-8 border border-white/10">
  //         <form onSubmit={handleSubmit} className="space-y-6">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               Full Name
  //             </label>
  //             <div className="relative">
  //               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
  //               <Input
  //                 type="text"
  //                 name="name"
  //                 required
  //                 value={formData.name}
  //                 onChange={handleChange}
  //                 className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-500 pl-10 rounded-xl focus:border-green-500/50 text-sm"
  //                 placeholder="Enter your full name"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               Email address
  //             </label>
  //             <div className="relative">
  //               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
  //               <Input
  //                 type="email"
  //                 name="email"
  //                 required
  //                 value={formData.email}
  //                 onChange={handleChange}
  //                 className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-500 pl-10 rounded-xl focus:border-green-500/50 text-sm"
  //                 placeholder="Enter your email"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               Password
  //             </label>
  //             <div className="relative">
  //               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
  //               <Input
  //                 type={showPassword ? "text" : "password"}
  //                 name="password"
  //                 required
  //                 value={formData.password}
  //                 onChange={handleChange}
  //                 className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-500 pl-10 pr-10 rounded-xl focus:border-green-500/50 text-sm"
  //                 placeholder="Create a password"
  //               />
  //               <button
  //                 type="button"
  //                 onClick={() => setShowPassword(!showPassword)}
  //                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
  //               >
  //                 {showPassword ? (
  //                   <EyeOff className="h-4 w-4" />
  //                 ) : (
  //                   <Eye className="h-4 w-4" />
  //                 )}
  //               </button>
  //             </div>
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               Confirm Password
  //             </label>
  //             <div className="relative">
  //               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
  //               <Input
  //                 type="password"
  //                 name="confirmPassword"
  //                 required
  //                 value={formData.confirmPassword}
  //                 onChange={handleChange}
  //                 className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-500 pl-10 rounded-xl focus:border-green-500/50 text-sm"
  //                 placeholder="Confirm your password"
  //               />
  //             </div>
  //           </div>

  //           <div className="flex items-center">
  //             <input
  //               id="agree-terms"
  //               name="agree-terms"
  //               type="checkbox"
  //               required
  //               className="h-4 w-4 rounded border-gray-600 bg-white/5 text-green-600 focus:ring-green-500 focus:ring-offset-0"
  //             />
  //             <label
  //               htmlFor="agree-terms"
  //               className="ml-2 block text-sm text-gray-300"
  //             >
  //               I agree to the{" "}
  //               <Link to="/terms" className="gradient-text hover:opacity-80">
  //                 Terms of Service
  //               </Link>{" "}
  //               and{" "}
  //               <Link to="/privacy" className="gradient-text hover:opacity-80">
  //                 Privacy Policy
  //               </Link>
  //             </label>
  //           </div>

  //           <Button
  //             type="submit"
  //             className="w-full gradient-secondary hover:opacity-90 transition-all duration-300 rounded-xl py-3 text-sm font-medium"
  //           >
  //             Create account
  //           </Button>
  //         </form>

  //         <div className="mt-8 text-center">
  //           <p className="text-sm text-gray-400">
  //             Already have an account?{" "}
  //             <Link
  //               to="/login"
  //               className="font-medium gradient-text hover:opacity-80"
  //             >
  //               Sign in
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link to="/" className="text-2xl flex justify-end hover:text-gray-400 cursor-pointer">
          ✕
        </Link>

        {/* Header - identical structure */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-light text-white mb-1">Join MediCore</h2>
          <p className="text-white/50 text-sm">Start your health journey</p>
        </div>

        {/* Form - same styling pattern */}
        <div className="space-y-5">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:border-blue-400 focus:outline-none py-2 px-1 transition-colors"
              placeholder="Full name"
            />
          </div>

          {/* Email - identical to login */}
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:border-blue-400 focus:outline-none py-2 px-1 transition-colors"
              placeholder="Email address"
            />
          </div>

          {/* Password - identical to login */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:border-blue-400 focus:outline-none py-2 px-1 pr-8 transition-colors"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white/30 hover:text-white/60"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password - matching style */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:border-blue-400 focus:outline-none py-2 px-1 transition-colors"
              placeholder="Confirm password"
            />
          </div>

          {/* Terms checkbox - styled like remember me */}
          <div className="flex justify-between items-center text-xs text-white/50 pt-2">
            <label className="flex items-center space-x-1.5">
              <input
                type="checkbox"
                required
                className="rounded border-white/20 bg-transparent"
              />
              <span>Remember me</span>
            </label>
          </div>

          {/* Submit Button - identical */}
          <button
            type="submit"
            className="w-full bg-white/90 hover:bg-white text-black py-2.5 rounded-md text-sm font-medium transition-colors mt-6"
          >
            Create Account
          </button>
        </div>

        {/* Footer - identical structure */}
        <div className="text-center text-xs text-white/40 mt-8">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-white/70 hover:text-white transition-colors"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
