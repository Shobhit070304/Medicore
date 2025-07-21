import React, { useState } from "react";
import { Search, Pill, AlertTriangle, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { medicines } from "@/Content/data.js"; // Adjust the path as necessary
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/UserContext"

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState([]);
  const { user } = useAuth();
  async function fetchMedicines() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/medicines/all`
      );

      if (res.status === 200) {
        setMedicines(res.data);
        toast.success("Medicines fetched successfully");
      }
      else {
        toast.error("Error fetching medicines");
      }
    } catch (error) {
      toast.error("Error fetching medicines");
    }
  }

  useEffect(() => {
    fetchMedicines();
  }, []);

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.uses.some((use) =>
        use.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Medicine <span className="gradient-text">Database</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive information about medicines, dosages, side effects,
            and precautions. Search through our extensive database of
            medications.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search medicines, conditions, or symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg glass-card border-white/20 bg-white/5 text-white placeholder-gray-400 rounded-2xl focus:border-purple-500/50 focus:ring-purple-500/25"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredMedicines.map((medicine, index) => {
            const usesToShow = medicine.uses.slice(0, 2);
            const usesMore = medicine.uses.length - usesToShow.length;
            const desc = medicine.description || '';
            const descShort = desc.length > 80 ? desc.slice(0, 80) + '…' : desc;
            return (
              <div
                key={index}
                className="relative flex items-center px-4 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-lg shadow-md transition-all duration-300 group hover:shadow-xl hover:border-purple-400/60 hover:bg-white/10 focus-within:border-purple-400/80 focus-within:shadow-xl min-h-[110px]"
                tabIndex={0}
              >
                {/* Left Icon */}
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/60 to-purple-900/60 flex items-center justify-center shadow group-hover:scale-105 group-hover:shadow-lg transition-transform">
                    <Pill className="h-5 w-5 text-white drop-shadow" />
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-white text-base font-semibold truncate max-w-[120px]">{medicine.name}</h3>
                    <Badge variant="default" className="bg-purple-500/20 text-purple-200 border-none text-[11px] px-2 py-0.5 rounded-full font-semibold">{medicine.type}</Badge>
                  </div>
                  <div className="flex items-center gap-3 mb-0.5">
                    <span className="text-sm font-bold text-purple-300">{medicine.price}</span>
                    <span className="text-xs text-gray-400">{medicine.dosage}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {usesToShow.map((use, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-[10px] bg-green-500/10 text-green-300 border-green-500/20 px-1.5 py-0.5 rounded-full"
                      >
                        {use}
                      </Badge>
                    ))}
                    {usesMore > 0 && (
                      <span className="text-[10px] text-gray-400">+{usesMore} more</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-300/90 mb-0.5">
                    {descShort}
                  </div>
                </div>
                {/* More Details Link */}
                <div className="ml-4 flex-shrink-0 self-start">
                  <Link
                    to={user ? `/medicines/${medicine._id}` : `/auth`}
                    className="inline-flex items-center text-purple-300 hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline font-semibold transition group text-xs"
                    tabIndex={0}
                    aria-label={`View more details about ${medicine.name}`}
                  >
                    <span className="hidden sm:inline">More Details</span>
                    <svg className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No medicines found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or browse all medicines.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;
