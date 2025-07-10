import {
  Pill,
  Heart,
  Upload,
  Activity,
  Database,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Medicine Database",
    description:
      "Access comprehensive medicine information with dosages, interactions, and side effects.",
    href: "/medicines",
  },
  {
    icon: Heart,
    title: "AI Disease Analysis",
    description:
      "Upload symptoms and get instant AI-powered diagnosis with treatment recommendations.",
    href: "/diseases",
  },
  {
    icon: Upload,
    title: "Smart Consultation",
    description:
      "Professional medical advice through our advanced AI consultation system.",
    href: "/diseases",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track your health metrics and receive personalized insights.",
    href: "/profile",
  },
  {
    icon: Database,
    title: "Medical Records",
    description: "Secure storage and management of your medical history.",
    href: "/profile",
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Support",
    description: "Get instant answers to your medical questions anytime.",
    href: "/",
  },
];

const stats = [
  { number: "5K+", label: "Active Users" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Support" },
  { number: "50+", label: "Medicine Database" },
];

const benefits = [
  "Instant AI-powered medical consultations",
  "Comprehensive medicine information database",
  "Fast and accurate symptom checker",
  "Tailored health tips based on your profile",
  "Round-the-clock chat with medical assistant",
  "Data privacy ensured with end-to-end encryption",
];

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Patient",
    content:
      "This app is very helpful. I got the right advice without going to the clinic.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    role: "Patient",
    content:
      "Easy to use and saved me a lot of time. Really useful for quick health checks.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    role: "Patient",
    content:
      "Very accurate and fast. I got proper suggestions for my health issue.",
    rating: 5,
  },
];

const medicines = [
  {
    name: "Aspirin",
    type: "Pain Reliever",
    dosage: "325mg",
    description:
      "A widely used medication for pain relief, fever reduction, and cardiovascular protection.",
    uses: [
      "Pain relief",
      "Fever reduction",
      "Anti-inflammatory",
      "Heart protection",
    ],
    sideEffects: ["Stomach upset", "Nausea", "Dizziness", "Bleeding risk"],
    precautions: [
      "Take with food",
      "Avoid if allergic to NSAIDs",
      "Consult doctor for long-term use",
    ],
    price: "₹90",
  },
  {
    name: "Ibuprofen",
    type: "NSAID",
    dosage: "200mg",
    description:
      "A nonsteroidal anti-inflammatory drug effective for pain and inflammation.",
    uses: [
      "Pain relief",
      "Inflammation reduction",
      "Fever control",
      "Arthritis treatment",
    ],
    sideEffects: ["Stomach pain", "Heartburn", "Drowsiness", "Kidney issues"],
    precautions: [
      "Take with food",
      "Limit alcohol consumption",
      "Monitor kidney function",
    ],
    price: "₹35",
  },
  {
    name: "Paracetamol",
    type: "Analgesic",
    dosage: "500mg",
    description:
      "A safe and effective medication for pain relief and fever reduction.",
    uses: [
      "Pain relief",
      "Fever reduction",
      "Headache treatment",
      "Cold symptoms",
    ],
    sideEffects: ["Liver damage (overdose)", "Allergic reactions", "Skin rash"],
    precautions: [
      "Do not exceed recommended dose",
      "Avoid alcohol",
      "Check liver function",
    ],
    price: "₹12",
  },
  {
    name: "Amoxicillin",
    type: "Antibiotic",
    dosage: "250mg",
    description:
      "A broad-spectrum antibiotic used to treat various bacterial infections.",
    uses: [
      "Bacterial infections",
      "Respiratory infections",
      "Urinary tract infections",
      "Skin infections",
    ],
    sideEffects: [
      "Diarrhea",
      "Nausea",
      "Allergic reactions",
      "Yeast infections",
    ],
    precautions: [
      "Complete full course",
      "Take with food",
      "Report allergic reactions",
    ],
    price: "₹60",
  },
  {
    name: "Omeprazole",
    type: "Proton Pump Inhibitor",
    dosage: "20mg",
    description:
      "Reduces stomach acid production for treating acid-related disorders.",
    uses: ["Acid reflux", "Peptic ulcers", "GERD", "Stomach protection"],
    sideEffects: [
      "Headache",
      "Diarrhea",
      "Abdominal pain",
      "Vitamin B12 deficiency",
    ],
    precautions: [
      "Take before meals",
      "Monitor magnesium levels",
      "Gradual discontinuation",
    ],
    price: "₹50",
  },
  {
    name: "Metformin",
    type: "Antidiabetic",
    dosage: "500mg",
    description: "First-line medication for type 2 diabetes management.",
    uses: ["Type 2 diabetes", "PCOS", "Prediabetes", "Weight management"],
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Metallic taste",
      "Lactic acidosis (rare)",
    ],
    precautions: [
      "Take with meals",
      "Monitor kidney function",
      "Avoid alcohol excess",
    ],
    price: "₹25",
  },
];

const mockAnalysisResult = {
  condition: "Suspected Dermatitis",
  confidence: 87,
  severity: "Mild to Moderate",
  recommendations: [
    {
      type: "Medication",
      title: "Topical Corticosteroid",
      description:
        "Apply hydrocortisone cream 1% twice daily to affected areas",
      duration: "7-10 days",
      priority: "High",
    },
    {
      type: "Medication",
      title: "Antihistamine",
      description: "Take cetirizine 10mg once daily for itching relief",
      duration: "5-7 days",
      priority: "Medium",
    },
    {
      type: "Lifestyle",
      title: "Skin Care Routine",
      description: "Use fragrance-free moisturizer and gentle cleansers",
      duration: "Ongoing",
      priority: "High",
    },
    {
      type: "Follow-up",
      title: "Medical Consultation",
      description: "Consult dermatologist if symptoms persist beyond 2 weeks",
      duration: "If needed",
      priority: "Medium",
    },
  ],
  additionalNotes: [
    "Avoid scratching the affected area",
    "Identify and avoid potential allergens",
    "Keep the area clean and dry",
    "Monitor for signs of infection",
  ],
};

export {
  features,
  stats,
  benefits,
  testimonials,
  medicines,
  mockAnalysisResult,
};
