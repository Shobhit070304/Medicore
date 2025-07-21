import { Link } from "react-router-dom";
import {
  Pill,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features, stats, benefits, testimonials } from "@/Content/data";
import axios from "axios";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-xs text-white/80">
                AI-Powered Healthcare Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your AI Medical
              <span className="gradient-text block mt-1">
                Assistant Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of healthcare with instant medical
              consultations, comprehensive medicine database, and personalized
              treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/diseases">
                <Button
                  size="sm"
                  className="gradient-primary hover:opacity-90 transition-all duration-300 px-6 py-2.5 rounded-full animate-glow text-sm"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/medicines">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-button text-white border-white/20 px-6 py-2.5 rounded-full text-sm"
                >
                  Explore Medicines
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medicine Database Preview */}
      <div className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-4">
              <Pill className="h-3 w-3 text-purple-400 mr-2" />
              <span className="text-xs text-white/80">Medicine Database</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Medicine
              <span className="gradient-text block">Information System</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Access detailed information about medicines, dosages, side
              effects, and interactions with our advanced AI-powered database
              system.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-8 min-h-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                      <Pill className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        Medicine Database
                      </h3>
                      <p className="text-gray-400 text-xs">
                        50+ Medicines Available
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-xs font-medium">
                      ● Live
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sample Medicine Cards */}
                  <div className="glass-card p-4 rounded-lg border border-white/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          Aspirin
                        </h4>
                        <p className="text-gray-400 text-xs">Pain Reliever</p>
                      </div>
                      <div className="text-green-400 text-xs font-bold">
                        ₹10
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                      Widely used for pain relief and cardiovascular protection.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full">
                        Pain relief
                      </span>
                      <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded-full">
                        325mg
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-lg border border-white/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          Ibuprofen
                        </h4>
                        <p className="text-gray-400 text-xs">NSAID</p>
                      </div>
                      <div className="text-green-400 text-xs font-bold">₹8</div>
                    </div>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                      Effective for pain and inflammation reduction.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full">
                        Anti-inflammatory
                      </span>
                      <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded-full">
                        200mg
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-lg border border-white/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          Paracetamol
                        </h4>
                        <p className="text-gray-400 text-xs">Analgesic</p>
                      </div>
                      <div className="text-green-400 text-xs font-bold">
                        ₹15
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                      Safe and effective for pain relief and fever.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full">
                        Fever reducer
                      </span>
                      <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded-full">
                        500mg
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/medicines">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-button text-white border-white/20 text-xs px-4 py-2 rounded-full"
                    >
                      View Full Database →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-4">
              <Zap className="h-3 w-3 text-blue-400 mr-2" />
              <span className="text-xs text-white/80">Platform Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for
              <span className="gradient-text block">Better Healthcare</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Comprehensive platform combining cutting-edge AI technology with
              medical expertise for accurate and personalized healthcare
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="glass-card border-white/10 group hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to={feature.href}>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-purple-400 p-0 hover:p-1 h-auto text-sm"
                      >
                        Learn more →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-4">
              <Star className="h-3 w-3 text-yellow-400 mr-2" />
              <span className="text-xs text-white/80">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare
              <span className="gradient-text block">Professionals</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              See what doctors and patients are saying about our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-4">
                <Shield className="h-3 w-3 text-green-400 mr-2" />
                <span className="text-xs text-white/80">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose
                <span className="gradient-text block">MediCore?</span>
              </h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Join thousands of users who trust MediCore for their healthcare
                needs. Our platform delivers exceptional results with
                cutting-edge technology.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        99.9% Uptime
                      </div>
                      <div className="text-gray-400 text-xs">
                        Always available when you need us
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        Instant Results
                      </div>
                      <div className="text-gray-400 text-xs">
                        Get diagnosis in seconds
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        Expert Support
                      </div>
                      <div className="text-gray-400 text-xs">
                        24/7 professional assistance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center glass-card px-3 py-1.5 rounded-full mb-6">
            <ArrowRight className="h-3 w-3 text-purple-400 mr-2" />
            <span className="text-xs text-white/80">Get Started Today</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="gradient-text block">Healthcare Experience?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
            Join thousands of users who have already discovered the power of
            AI-driven healthcare. Start your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/diseases">
              <Button
                size="sm"
                className="gradient-primary hover:opacity-90 transition-all duration-300 px-8 py-2.5 rounded-full animate-glow text-sm"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outline"
                size="sm"
                className="glass-button text-white border-white/20 px-8 py-2.5 rounded-full text-sm"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold gradient-text mb-2">MediCore</div>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()}. MediCore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
