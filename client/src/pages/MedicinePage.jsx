import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, AlertTriangle, Info, ShieldCheck, Archive } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'react-toastify';

const MedicinePage = () => {
    const { id } = useParams();
    const [medicine, setMedicine] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMedicine = async () => {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/medicines/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (res.status === 200) {
                    setMedicine(res.data);
                } else {
                    toast.error('Medicine not found.');
                }
            } catch (error) {
                toast.error('Failed to fetch medicine details.');
            } finally {
                setLoading(false);
            }
        };

        fetchMedicine();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
                    <div className="h-6 w-36 bg-gray-700/50 rounded-md mb-8"></div>
                    <div className="glass-card border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10">
                            <div>
                                <div className="h-10 w-64 bg-gray-700/50 rounded-md mb-3"></div>
                                <div className="h-6 w-48 bg-gray-700/50 rounded-md"></div>
                            </div>
                            <div className="h-10 w-24 bg-gray-700/50 rounded-md mt-4 md:mt-0"></div>
                        </div>
                        <div className="space-y-3 mb-8">
                            <div className="h-4 bg-gray-700/50 rounded"></div>
                            <div className="h-4 bg-gray-700/50 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-700/50 rounded"></div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="h-6 w-32 bg-gray-700/50 rounded mb-4"></div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="h-8 w-20 bg-gray-700/50 rounded-md"></div>
                                    <div className="h-8 w-24 bg-gray-700/50 rounded-md"></div>
                                    <div className="h-8 w-16 bg-gray-700/50 rounded-md"></div>
                                </div>
                            </div>
                            <div>
                                <div className="h-6 w-40 bg-gray-700/50 rounded mb-4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-1/2 bg-gray-700/50 rounded"></div>
                                    <div className="h-4 w-2/3 bg-gray-700/50 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!medicine) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Medicine Not Found</h1>
                <p className="text-gray-400 mb-8">We couldn't find the medicine you're looking for.</p>
                <Link to="/medicines" className="inline-flex items-center text-purple-400 hover:text-purple-300 group">
                    <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Medicines
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/medicines" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 group">
                    <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Medicines
                </Link>

                <Card className="glass-card border border-white/10 rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-white/10">
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-1">{medicine.name}</h1>
                            <div className="flex items-center space-x-3">
                                <Badge variant="default" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">{medicine.type}</Badge>
                                <p className="text-sm text-gray-400">{medicine.dosage}</p>
                            </div>
                        </div>
                        <p className="text-2xl font-bold gradient-text mt-3 md:mt-0">{medicine.price}</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-300 leading-relaxed">{medicine.description}</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2 flex items-center"><Info className="h-5 w-5 mr-2 text-green-400"/>Uses</h2>
                            <div className="flex flex-wrap gap-2">
                                {medicine.uses.map((use, i) => (
                                    <Badge key={i} variant="outline" className="text-xs bg-green-500/10 text-green-300 border-green-500/20 px-2 py-0.5">{use}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-2 flex items-center"><AlertTriangle className="h-5 w-5 mr-2 text-yellow-400"/>Side Effects</h2>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 pl-2">
                                    {medicine.sideEffects.map((effect, i) => <li key={i}>{effect}</li>)}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-white mb-2 flex items-center"><ShieldCheck className="h-5 w-5 mr-2 text-blue-400"/>Precautions</h2>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 pl-2">
                                    {medicine.precautions.map((precaution, i) => <li key={i}>{precaution}</li>)}
                                </ul>
                            </div>
                        </div>

                        {medicine.interactions && medicine.interactions.length > 0 && (
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-2 flex items-center"><AlertTriangle className="h-5 w-5 mr-2 text-red-400"/>Interactions</h2>
                                <p className="text-sm text-gray-400 mb-2">Be aware of potential interactions with other medications:</p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 pl-2">
                                    {medicine.interactions.map((interaction, i) => <li key={i}>{interaction}</li>)}
                                </ul>
                            </div>
                        )}

                        {medicine.storage && (
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-2 flex items-center"><Archive className="h-5 w-5 mr-2 text-gray-400"/>Storage</h2>
                                <p className="text-sm text-gray-300">{medicine.storage}</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MedicinePage;