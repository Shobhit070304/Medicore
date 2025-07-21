import React, { useState } from "react";
import {
  Upload,
  Camera,
  FileText,
  Sparkles,
  Activity,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-toastify";
import axios from "axios";

const Diseases = () => {
  const [symptoms, setSymptoms] = useState("");
  const [image, setImage] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!symptoms) {
      toast.warn("Please enter symptoms or upload an image.");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("symptoms", symptoms);
      formData.append("image", image);
      let token = localStorage.getItem("token");

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/disease/diagnose`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAiResponse(res.data.res); // the structured AI response from backend
    } catch (error) {
      alert("Failed to get diagnosis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-sm text-white/80">
              AI Medical Consultation
            </span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Smart Disease Analysis
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Upload your symptoms and get AI-powered medical insights with
            personalized recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <Activity className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-xl font-semibold text-white">
                Describe Your Symptoms
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Symptoms Description
                </label>
                <Textarea
                  placeholder="Describe your symptoms in detail..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={6}
                  className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl resize-none focus:border-purple-500/50 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Upload Image (Optional)
                </label>
                <div className="glass-card border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition-all duration-300">
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Camera className="mx-auto h-8 w-8 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-400">
                      {image ? image.name : "Click to upload image"}
                    </p>
                  </label>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!symptoms.trim() || isLoading}
                className="w-full gradient-primary hover:opacity-90 transition-all duration-300 rounded-xl py-3 text-sm font-medium"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get AI Consultation
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold text-white">
                AI Analysis Results
              </h2>
            </div>

            {!aiResponse ? (
              <div className="text-center py-16">
                <FileText className="mx-auto h-16 w-16 text-gray-600 mb-4" />
                <p className="text-gray-500 text-sm">
                  Submit your symptoms to get AI analysis
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3 text-sm">
                    Possible Diagnosis
                  </h3>
                  <div className="flex items-center justify-between">
                    <Badge className="gradient-primary text-white text-xs px-3 py-1">
                      {aiResponse.diagnosis}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      Confidence: {aiResponse.confidence}
                    </span>
                  </div>
                </div>

                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3 text-sm">
                    Recommended Medicines
                  </h3>
                  <div className="space-y-3">
                    {aiResponse.recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="glass-card bg-white/5 rounded-lg p-3"
                      >
                        <h4 className="font-medium text-white text-sm mb-1">
                          {rec.medicine}
                        </h4>
                        <p className="text-xs text-gray-400 mb-1">
                          Dosage: {rec.dosage}
                        </p>
                        <p className="text-xs text-gray-400">
                          Duration: {rec.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3 text-sm">
                    Precautions
                  </h3>
                  <ul className="space-y-2">
                    {aiResponse.precautions.map((precaution, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-400 flex items-start"
                      >
                        <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {precaution}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3 text-sm">
                    Symptoms
                  </h3>
                  <ul className="space-y-2">
                    {aiResponse.symptoms.map((symptom, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-400 flex items-start"
                      >
                        <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-200">
                      <strong>Disclaimer:</strong> This is AI-generated advice.
                      Please consult with a qualified healthcare professional
                      for proper diagnosis and treatment.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
