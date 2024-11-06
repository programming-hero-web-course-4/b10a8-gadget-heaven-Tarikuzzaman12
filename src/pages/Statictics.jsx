import { Helmet } from "react-helmet-async";
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const Statictics = () => {
    const productData = [
        { product_title: "iPhone SE 2023", price: 450 },
        { product_title: "Asus ROG Zephyrus G14", price: 1200 },
        { product_title: "Power Bank 20000mAh", price: 80 },
        { product_title: "Dell XPS 13", price: 1500 },
        { product_title: "Power Bank 10000mAh", price: 50 },
        { product_title: "USB-C Hub", price: 60 },
        { product_title: "Smart Watch Ultra", price: 350 },
        { product_title: "Noise Cancelling Headphones", price: 150 },
        { product_title: "Asus ZenBook 14", price: 950 },
        { product_title: "HP Envy 15", price: 850 },
        { product_title: "Smart Watch 4", price: 200 },
        { product_title: "Lenovo Yoga 7i", price: 1200 },
        { product_title: "HP Spectre x360", price: 750 },
        { product_title: "iPhone 13", price: 699 }
    ];

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <div className="m-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-purple-600 mb-4">Product Price Statistics</h2>
                <ResponsiveContainer width="100%" height={600}>
                    <ComposedChart data={productData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="product_title" 
                            angle={-45} 
                            textAnchor="end" 
                            interval={0} 
                            height={200}  // Adjusted height for better readability
                            tick={{ fill: "#6b7280" }} 
                        />
                        <YAxis yAxisId="left" orientation="left" tick={{ fill: "#6b7280" }} />
                        <Tooltip />
                        <Legend />

                        <Area yAxisId="left" type="monotone" dataKey="price" fill="#c084fc" stroke="#9333ea" />
                        <Bar yAxisId="left" dataKey="price" barSize={20} fill="#7c3aed">
                            <LabelList dataKey="price" position="top" style={{ fill: "#6b7280" }} />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statictics;
