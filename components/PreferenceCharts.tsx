// components/PreferenceCharts.tsx

// A helper component for the donut chart's legend
function LegendItem({ color, label }: { color: string, label: string }) {
    return (
        <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-sm ${color}`}></div>
            <span className="text-sm text-gray-600">{label}</span>
        </div>
    );
}

export default function PreferenceCharts() {
    const awePercentage = 70;
    const categoryData = [
        { label: 'Calm', percentage: 18, color: 'stroke-blue-900', legendColor: 'bg-blue-900', rotation: 0 },
        { label: 'Energy', percentage: 34, color: 'stroke-orange-500', legendColor: 'bg-orange-500', rotation: 18 },
        { label: 'Pain Relief', percentage: 4, color: 'stroke-green-700', legendColor: 'bg-green-700', rotation: 52 },
        { label: 'Focus', percentage: 5, color: 'stroke-cyan-500', legendColor: 'bg-cyan-500', rotation: 56 },
        { label: 'Awe', percentage: 26, color: 'stroke-purple-600', legendColor: 'bg-purple-600', rotation: 61 },
        { label: 'Sleep', percentage: 13, color: 'stroke-green-500', legendColor: 'bg-green-500', rotation: 87 },
    ];

    return (
        <div className="mt-10">
            {/* Awe Intensity Section */}
            <div className="text-center p-6 rounded-lg">
                <p className="max-w-xl mx-auto text-gray-600">
                    Research shows that experiencing awe can reduce stress, enhance mood, and increase feelings of connection to the world.
                </p>
                <div className="relative inline-block mt-4">
                    {/* The SVG for the Awe chart has been made 20% bigger */}
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <path d="M 30 150 A 120 120 0 0 1 270 150" stroke="#E5E7EB" strokeWidth="48" fill="none" />
                        <path 
                            d="M 30 150 A 120 120 0 0 1 270 150" 
                            stroke="#8B5CF6" 
                            strokeWidth="48" 
                            fill="none" 
                            strokeDasharray="377" 
                            strokeDashoffset={377 - (377 * awePercentage) / 100 / 2}
                        />
                         <text x="150" y="120" fontFamily="sans-serif" fontSize="38" fontWeight="bold" textAnchor="middle" fill="#374151">{awePercentage}%</text>
                         <text x="150" y="150" fontFamily="sans-serif" fontSize="19" textAnchor="middle" fill="#6B7280">Awe intensity</text>
                    </svg>
                </div>
            </div>

            {/* Category Preferences Section */}
            <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Category Preferences</h3>
                <p className="text-gray-500 font-medium mt-2">WHERE USERS SPEND THE MOST TIME OR USER ENGAGEMENT BY CATEGORY</p>
                
                <div className="relative w-80 h-80 mx-auto mt-6">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Donut chart made with SVG circles */}
                        {categoryData.map((item, index) => {
                             // Logic to calculate text position
                             const r = 40;
                             const midAngle = (item.rotation + item.percentage / 2) / 100 * 360;
                             const midAngleRad = (midAngle - 90) * (Math.PI / 180);
                             const x = 50 + r * Math.cos(midAngleRad);
                             const y = 50 + r * Math.sin(midAngleRad);

                             // Hide text for small percentages to avoid clutter
                             if (item.percentage < 5) return (
                                <g key={index}>
                                     <circle 
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        strokeWidth="20"
                                        className={item.color}
                                        strokeDasharray={`${item.percentage * 2.51} 251`}
                                        transform={`rotate(${(item.rotation / 100 * 360) - 90} 50 50)`}
                                    />
                                </g>
                             );

                             return (
                                <g key={index}>
                                    <circle 
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        strokeWidth="20"
                                        className={item.color}
                                        strokeDasharray={`${item.percentage * 2.51} 251`}
                                        transform={`rotate(${(item.rotation / 100 * 360) - 90} 50 50)`}
                                    />
                                    <text
                                        x={x}
                                        y={y}
                                        dy="0.35em"
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="7"
                                        fontWeight="medium"
                                    >
                                        {item.percentage}%
                                    </text>
                                </g>
                             )
                        })}
                    </svg>
                </div>
                
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-6">
                    {categoryData.map(item => (
                        <LegendItem key={item.label} color={item.legendColor} label={item.label} />
                    ))}
                </div>
            </div>
        </div>
    );
}
