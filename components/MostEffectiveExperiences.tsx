// components/MostEffectiveExperiences.tsx
'use client';

const experiencesData = [
    { category: 'Calm', experience: 'Aureole Hypnosis', score: 4.8, imageUrl: 'https://placehold.co/100x60/003366/FFFFFF?text=Aureole' },
    { category: 'Energy', experience: 'Cyber Punch', score: 4.7, imageUrl: 'https://placehold.co/100x60/FF007F/FFFFFF?text=CyberPunch' },
    { category: 'Awe', experience: 'Samsara', score: 4.5, imageUrl: 'https://placehold.co/100x60/2C003E/FFFFFF?text=Samsara' },
    { category: 'Focus', experience: 'Rhythmic Flow', score: 4.1, imageUrl: 'https://placehold.co/100x60/007B7F/FFFFFF?text=Rhythmic' },
    { category: 'Pain Relief', experience: 'Aureole Relief', score: 4.4, imageUrl: 'https://placehold.co/100x60/0057B8/FFFFFF?text=Aureole' },
    { category: 'Sleep', experience: 'Retreat', score: 4.5, imageUrl: 'https://placehold.co/100x60/4A2E00/FFFFFF?text=Retreat' },
];

export default function MostEffectiveExperiences() {
    return (
        <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Most Effective Experiences Per Category
            </h3>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead className="bg-teal-600 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">Top Experience</th>
                            <th scope="col" className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">Effectiveness Score</th>
                            <th scope="col" className="px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">Image</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {experiencesData.map((item) => (
                            <tr key={item.category} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700 text-center">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">{item.experience}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    <div className="flex items-center justify-center">
                                        <span>{item.score}</span>
                                        <span className="ml-1 text-yellow-500">⭐</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex justify-center">
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.experience} 
                                            className="w-24 h-14 object-cover rounded-md"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = "https://placehold.co/100x60/CCCCCC/FFFFFF?text=Error";
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
