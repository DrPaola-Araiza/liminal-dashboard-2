// components/EnergyMoodActivationChart.tsx
'use client';
import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Line, LabelList, ComposedChart, Bar, Cell } from 'recharts';

// Data for the two charts, adapted for the Energy category
const highActivationData = { Before: 14.4, After: 28.3 }; // Shows an increase
const lowActivationData = { Before: 70.2, After: 42.5 }; // Shows a decrease

// A reusable chart component for this section
const ActivationChart = ({ data, title, afterBarColor, lineColor, annotation, annotationColor }: { data: { Before: number, After: number }, title: string, afterBarColor: string, lineColor: string, annotation: string, annotationColor: string }) => {
    const chartData = [
        { name: 'Before', value: data.Before },
        { name: 'After', value: data.After }
    ];

    return (
        <div className="w-full">
            <p className={`text-center text-lg font-bold mb-2 ${annotationColor}`}>{annotation}</p>
            <h4 className="text-center font-semibold text-gray-700">{title}</h4>
            <p className="text-center text-sm text-gray-500 mb-2">(Before and After)</p>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis 
                        domain={[0, 100]} 
                        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                        label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                        interval={0}
                    />
                    <Tooltip formatter={(value: any) => `${value}%`} />
                    <Bar dataKey="value" name="" barSize={80}>
                        {
                            chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#60a5fa' : afterBarColor} />
                            ))
                        }
                        <LabelList dataKey="value" position="top" formatter={(value: any) => `${value}%`} />
                    </Bar>
                    <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={lineColor} 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6 }}
                        isAnimationActive={false} 
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};


export default function EnergyMoodActivationChart() {
  return (
    <div className="w-full">
        <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-xl font-bold text-gray-800 text-center">Mood Activation Changes</h3>
            <p className="mt-2 text-gray-600 text-left">
                The charts below show how experiences in the Liminal Energy category influence high and low activation moods before and after use.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1 text-left">
                <li>The left chart displays changes in high activation moods (such as cheerfulness, excitement, irritation, and anxiety).</li>
                <li>The right chart presents changes in low activation moods (such as calmness, relaxation, sadness, and boredom).</li>
            </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-12">
            <ActivationChart 
                data={highActivationData} 
                title="High-Activation Moods" 
                afterBarColor="#f97316" 
                lineColor="#16a34a" // Green for increase
                annotation="↑ 13.9% increase after energy experience"
                annotationColor="text-green-600"
            />
            <ActivationChart 
                data={lowActivationData} 
                title="Low-Activation Moods" 
                afterBarColor="#f97316" 
                lineColor="#dc2626" // Red for decrease
                annotation="↓ 27.7% decrease after energy experience"
                annotationColor="text-red-600"
            />
        </div>
    </div>
  );
}
