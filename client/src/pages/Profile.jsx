import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit,
  Activity,
  Heart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    age: "28",
    bloodGroup: "O+",
    allergies: ["Peanuts", "Dust"],
    conditions: ["Hypertension"],
  });

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/profile/get`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userData = res.data.user;
      setProfile({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        age: userData.age,
        bloodGroup: userData.bloodGroup,
        allergies: userData.allergies,
        conditions: userData.conditions,
      });
    } catch (error) {
      toast.error("Fething user profile failed");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const saveInfo = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/profile/set`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully");
      fetchUser();
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const consultationHistory = [
    { date: "2024-01-15", condition: "Common Cold", status: "Completed" },
    { date: "2024-01-10", condition: "Headache", status: "Completed" },
    { date: "2024-01-05", condition: "Skin Rash", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
            <User className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm text-white/80">Personal Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">My Profile</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Manage your personal information and medical history
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Activity className="h-6 w-6 text-blue-400 mr-3" />
                  <h2 className="text-xl font-semibold text-white">
                    Personal Information
                  </h2>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsEditing(!isEditing);
                    if (isEditing == true) {
                      saveInfo();
                    }
                  }}
                  className="glass-button border-white/20 text-white hover:bg-white/10 text-xs"
                >
                  <Edit className="h-3 w-3 mr-2" />
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card bg-white/5 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-500 mr-2" />
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                          className="glass-card bg-white/5 border-white/10 text-white text-sm"
                        />
                      ) : (
                        <span className="text-white text-sm">
                          {profile.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="glass-card bg-white/5 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-white text-sm">
                        {profile.email}
                      </span>
                    </div>
                  </div>

                  <div className="glass-card bg-white/5 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Phone
                    </label>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-2" />
                      {isEditing ? (
                        <Input
                          value={profile.phone}
                          onChange={(e) =>
                            setProfile({ ...profile, phone: e.target.value })
                          }
                          className="glass-card bg-white/5 border-white/10 text-white text-sm"
                        />
                      ) : (
                        <span className="text-white text-sm">
                          {profile.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="glass-card bg-white/5 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Age
                    </label>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      {isEditing ? (
                        <Input
                          value={profile.age}
                          onChange={(e) =>
                            setProfile({ ...profile, age: e.target.value })
                          }
                          className="glass-card bg-white/5 border-white/10 text-white text-sm"
                        />
                      ) : (
                        <span className="text-white text-sm">
                          {profile.age} years
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-400 mb-3">
                    Blood Group
                  </label>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-red-400 mr-2" />
                    {/* <Badge className="gradient-secondary text-white text-xs">
                      {profile.bloodGroup}
                    </Badge> */}
                    {isEditing ? (
                      <Input
                        value={profile.bloodGroup}
                        onChange={(e) =>
                          setProfile({ ...profile, bloodGroup: e.target.value })
                        }
                        className="glass-card bg-white/5 border-white/10 text-white text-sm"
                      />
                    ) : (
                      <span className="text-white text-sm">
                        {profile.bloodGroup}
                      </span>
                    )}
                  </div>
                </div>

                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-400 mb-3">
                    Allergies
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {profile.allergies.map((allergy, index) => (
                      <Badge
                        key={index}
                        className="bg-red-500/20 text-red-300 border border-red-500/30 text-xs"
                      >
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-400 mb-3">
                    Medical Conditions
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {profile.conditions.map((condition, index) => (
                      <Badge
                        key={index}
                        className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs"
                      >
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation History */}
          <div>
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-xl font-semibold text-white">
                  Recent Consultations
                </h2>
              </div>
              <div className="space-y-4">
                {consultationHistory.map((consultation, index) => (
                  <div
                    key={index}
                    className="glass-card bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white text-sm">
                        {consultation.condition}
                      </h4>
                      <Badge className="gradient-primary text-white text-xs">
                        {consultation.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-400">{consultation.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
