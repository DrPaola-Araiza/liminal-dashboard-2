// components/EmotionChart.tsx
'use client';

// A reusable component for a single bubble
function Bubble({ text, percentage, size, color, top, left }: { text: string, percentage: number, size:string, color: string, top: string, left: string }) {
    return (
        <div 
            className={`absolute flex flex-col items-center justify-center rounded-full text-white shadow-lg ${color}`}
            style={{ width: size, height: size, top, left }}
        >
            <span className="text-sm font-semibold">{text}</span>
            <span className="text-xs">{percentage}%</span>
        </div>
    );
}

// A component for one of the charts (Before or After)
function ChartSection({ title, bubbles }: { title: string, bubbles: any[] }) {
    return (
        <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-gray-700 mb-4">{title}</h4>
            <div className="relative w-96 h-96 bg-gray-50 rounded-full border">
                {bubbles.map((bubble, index) => (
                    <Bubble key={index} {...bubble} />
                ))}
            </div>
        </div>
    );
}

export default function EmotionChart() {
    const beforeBubbles = [
        { text: 'Anxious', percentage: 28, size: '110px', color: 'bg-red-500', top: '50%', left: '10%' },
        { text: 'Irritated', percentage: 15, size: '90px', color: 'bg-red-600', top: '15%', left: '45%' },
        { text: 'Bored', percentage: 22, size: '100px', color: 'bg-orange-500', top: '60%', left: '50%' },
        { text: 'Sad', percentage: 18, size: '80px', color: 'bg-yellow-500', top: '75%', left: '20%' },
        { text: 'Pain', percentage: 7, size: '60px', color: 'bg-red-700', top: '30%', left: '75%' },
        { text: 'Excited', percentage: 5, size: '70px', color: 'bg-green-500', top: '5%', left: '25%' },
        { text: 'Calm', percentage: 5, size: '50px', color: 'bg-green-400', top: '35%', left: '5%' },
    ];

    const afterBubbles = [
        { text: 'Calm', percentage: 35, size: '120px', color: 'bg-green-500', top: '40%', left: '5%' },
        { text: 'Rested', percentage: 20, size: '100px', color: 'bg-green-400', top: '70%', left: '55%' },
        { text: 'Focus', percentage: 15, size: '90px', color: 'bg-blue-500', top: '45%', left: '65%' },
        { text: 'Relax', percentage: 15, size: '110px', color: 'bg-teal-500', top: '10%', left: '60%' },
        { text: 'Excited', percentage: 10, size: '80px', color: 'bg-green-600', top: '15%', left: '30%' },
        { text: 'Cheerful', percentage: 5, size: '70px', color: 'bg-yellow-400', top: '65%', left: '30%' },
    ];

    return (
        <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Emotion and mental states shifts
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                The bubbles below show users' overall emotional states before and after using the Liminal Platform.
            </p>
            <div className="flex flex-row justify-center space-x-8">
                <ChartSection title="Before" bubbles={beforeBubbles} />
                <ChartSection title="After" bubbles={afterBubbles} />
            </div>
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center max-w-md mx-auto">
                <p className="text-green-700 font-medium">Positive Moods increased by: 53.97%</p>
                <p className="text-red-700 font-medium">Negative Moods decrease by: 20.8%</p>
            </div>
        </div>
    );
}
