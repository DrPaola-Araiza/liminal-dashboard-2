// components/MostEffectiveSleepExperiences.tsx
'use client';

import React from 'react';

// --- Data for the tables ---
// Using the data you provided for both tables as a placeholder
const sleepExperienceData = [
  {
    name: 'Somnolent',
    improvement: '60%',
    rating: 4.8,
    imageUrl: 'https://placehold.co/150x80/1A237E/FFFFFF?text=Somnolent', // Dark blue placeholder
  },
  {
    name: 'Pink Rain',
    improvement: '30%',
    rating: 4.2,
    imageUrl: 'https://placehold.co/150x80/FFC0CB/000000?text=Pink+Rain', // Pink placeholder
  },
  {
    name: 'Hypnagogia',
    improvement: '15%',
    rating: 3.8,
    imageUrl: 'https://placehold.co/150x80/4A148C/FFFFFF?text=Hypnagogia', // Purple placeholder
  },
];

// --- Reusable Components ---

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347V3.253l-.951 2.927a1 1 0 00.95.69h4.162c.969 0 1.371-1.24.588-1.81l-3.368-2.448z" /></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
    </div>
  );
};

// A single table component
const ExperienceTable = ({ title, data }: { title: string, data: typeof sleepExperienceData }) => (
  <div className="w-full lg:w-1/2 px-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <h4 className="text-lg font-bold text-gray-800 text-center py-3 bg-gray-50 border-b">
        {title}
      </h4>
      <div className="divide-y divide-gray-200">
        {data.map((exp) => (
          <div key={exp.name} className="p-3 text-center">
            <div className="font-semibold text-gray-700">{exp.name}</div>
            <img
              src={exp.imageUrl}
              alt={exp.name}
              className="w-32 h-20 object-cover rounded-md mx-auto mt-2"
            />
            <div className="mt-2 text-sm text-gray-600">
              Sleep Improvement {exp.improvement}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Enjoyability Rating
              <StarRating rating={exp.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Main Component ---
export default function MostEffectiveSleepExperiences() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
        Most Effective Sleep Experiences
      </h3>
      <div className="flex flex-col lg:flex-row -mx-2">
        {/* We use the same data for both tables as a placeholder */}
        <ExperienceTable title="Based on Organisational Analytics" data={sleepExperienceData} />
        <ExperienceTable title="Based on overall Liminal Analytics" data={sleepExperienceData} />
      </div>
    </div>
  );
}