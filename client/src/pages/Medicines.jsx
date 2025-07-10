import { useState } from "react";
import { Search, Pill, AlertTriangle, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { medicines } from "@/Content/data.js"; // Adjust the path as necessary

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMedicines.map((medicine, index) => (
            <Card
              key={index}
              className="glass-card border border-white/10 hover:border-white/20 transition-transform duration-300 hover:scale-[1.015] group shadow-md rounded-xl p-4 w-full max-w-xl"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center group-hover:animate-glow">
                    <Pill className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {medicine.name}
                    </h3>
                    <Badge
                      variant="default"
                      className="bg-white/10 text-gray-300 border border-white/20 text-xs px-2 py-0.5"
                    >
                      {medicine.type}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold gradient-text">
                    {medicine.price}
                  </p>
                  <p className="text-xs text-gray-400">{medicine.dosage}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-4">
                {medicine.description}
              </p>

              {/* Uses */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="h-4 w-4 text-green-400" />
                  <h4 className="text-sm font-semibold text-white">Uses</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {medicine.uses.map((use, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-[10px] bg-green-500/10 text-green-400 border-green-500/20 px-2 py-0.5"
                    >
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Side Effects */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <h4 className="text-sm font-semibold text-white">
                      Side Effects
                    </h4>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    {medicine.sideEffects.slice(0, 3).map((effect, i) => (
                      <li key={i}>{effect}</li>
                    ))}
                  </ul>
                </div>

                {/* Precautions */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <h4 className="text-sm font-semibold text-white">
                      Precautions
                    </h4>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    {medicine.precautions.slice(0, 2).map((precaution, i) => (
                      <li key={i}>{precaution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
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
