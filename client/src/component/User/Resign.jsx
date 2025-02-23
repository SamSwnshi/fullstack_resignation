import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../config/api";

const Resign = () => {
    const [lwd, setLwd] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/user/resign', { lwd });
            toast.success("Resignation submitted successfully!", {
                position: "top-center",
                autoClose: 2000,
            });
            setLwd('');
            setTimeout(() => {
                navigate('/user/responses');
            }, 3000);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to submit resignation", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Submit Resignation</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-center">Last Working Day</label>
                        <input
                            type="date"
                            className="w-full p-2 border rounded"
                            value={lwd}
                            onChange={(e) => setLwd(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Submit Resignation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Resign;
