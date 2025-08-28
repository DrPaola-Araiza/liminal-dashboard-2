// components/MostEffectiveFocusExperiences.tsx
'use client';

import React from 'react';

// --- Data for the tables ---

const organisationalData = [
  {
    name: 'Rhythmic Flow',
    improvement: '20%',
    rating: 4,
    imageUrl: 'https://placehold.co/150x80/007B7F/FFFFFF?text=Rhythmic+Flow',
  },
  {
    name: 'Flux',
    improvement: '10%',
    rating: 3,
    imageUrl: 'https://placehold.co/150x80/003366/FFFFFF?text=Flux',
  },
  {
    name: 'Aureole Focus',
    improvement: '8%',
    rating: 2,
    imageUrl: 'https://placehold.co/150x80/0057B8/FFFFFF?text=Aureole+Focus',
  },
];

const liminalData = [
  {
    name: 'Rhythmic Flow',
    improvement: '20%',
    rating: 5,
    imageUrl: 'https://placehold.co/150x80/007B7F/FFFFFF?text=Rhythmic+Flow',
  },
  {
    name: 'Flux',
    improvement: '10%',
    rating: 3,
    imageUrl: 'https://placehold.co/150x80/003366/FFFFFF?text=Flux',
  },
  {
    name: 'Aureole Focus',
    improvement: '8%',
    rating: 2,
    imageUrl: 'https://placehold.co/150x80/0057B8/FFFFFF?text=Aureole+Focus',
  },
];

// --- Reusable Components ---

// Star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

// A single table component to avoid repetition
const ExperienceTable = ({ title, data }: { title: string, data: typeof organisationalData }) => (
  <div className="w-full lg:w-1/2 px-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <h4 className="text-lg font-bold text-gray-800 text-center py-3 bg-gray-50 border-b">
        {title}
      </h4>
      <table className="min-w-full">
        <tbody className="divide-y divide-gray-200">
          {data.map((exp) => (
            <tr key={exp.name}>
              <td className="p-3 text-center">
                <div className="font-semibold text-gray-700">{exp.name}</div>
                <img
                  src={exp.imageUrl}
                  alt={exp.name}
                  className="w-32 h-20 object-cover rounded-md mx-auto mt-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/150x80/CCCCCC/FFFFFF?text=Error";
                  }}
                />
                <div className="mt-2 text-sm text-gray-600">
                  Focus Improvement {exp.improvement}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Enjoyability Rating
                  <StarRating rating={exp.rating} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main Component ---

export default function MostEffectiveFocusExperiences() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
        Most Effective Focus Experiences
      </h3>
      <div className="flex flex-col lg:flex-row -mx-2">
        <ExperienceTable title="Based on Organisational Analytics" data={organisationalData} />
        <ExperienceTable title="Based on overall Liminal Analytics" data={liminalData} />
      </div>
    </div>
  );
}