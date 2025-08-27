// components/PainReliefEffectiveExperiences.tsx
'use client';
import React from 'react';
import Image from 'next/image';

// --- Data for the experiences ---
const experienceData = [
  {
    name: 'Aureole Relief',
    imageUrl: 'https://placehold.co/150x100/003366/FFFFFF?text=Aureole',
    moodIncrease: '20%',
    rating: 4,
  },
  {
    name: 'Escape-EMDR',
    imageUrl: 'https://placehold.co/150x100/FDB813/FFFFFF?text=Desert',
    moodIncrease: '10%',
    rating: 3,
  },
  {
    name: 'Cosmic Flow',
    imageUrl: 'https://placehold.co/150x100/4B0082/FFFFFF?text=Sojourn',
    moodIncrease: '8%',
    rating: 4,
  },
];

// --- Helper component for star ratings ---
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
};

// --- Component for a single experience card ---
const ExperienceCard = ({ experience }: { experience: typeof experienceData[0] }) => {
  return (
    <div className="flex flex-col items-center text-center border-r last:border-r-0 border-gray-200 px-2">
      <h4 className="font-semibold text-gray-700 h-10 flex items-center justify-center">{experience.name}</h4>
      <div className="my-2">
        <Image src={experience.imageUrl} alt={experience.name} width={150} height={100} className="rounded-md" />
      </div>
      <p className="text-sm text-gray-600">Increase in positive moods {experience.moodIncrease}</p>
      <div className="mt-2">
        <p className="text-sm font-medium text-gray-800">Enjoyability rating</p>
        <StarRating rating={experience.rating} />
      </div>
    </div>
  );
};

// --- Reusable component for an entire table ---
const ExperienceTable = ({ title, experiences }: { title: string, experiences: typeof experienceData }) => (
  // The fix is applied to the <div> and <h3> elements below
  <div className="bg-white rounded-lg shadow-md border border-gray-200 flex-1 min-w-[450px] flex flex-col">
    <h3 className="text-center font-bold text-gray-800 p-3 bg-gray-50 rounded-t-lg border-b min-h-[72px] flex items-center justify-center">
      {title}
    </h3>
    <div className="flex flex-row justify-around p-4 h-full">
      {experiences.map(exp => (
        <ExperienceCard key={exp.name} experience={exp} />
      ))}
    </div>
  </div>
);


// --- Main component to export ---
export default function PainReliefEffectiveExperiences() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Most effective pain relief experiences</h2>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <ExperienceTable title="Most Effective Pain Relief Experiences (Based on Organizational Analytics)" experiences={experienceData} />
        <ExperienceTable title="Most Effective Pain Relief Experiences (Based on overall Liminal Analytics)" experiences={experienceData} />
      </div>
    </div>
  );
}