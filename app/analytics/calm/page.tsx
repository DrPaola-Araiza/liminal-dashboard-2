// app/analytics/calm/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import CalmUserInsights from "../../../components/CalmUserInsights";
import CalmEmotionalShiftChart from "../../../components/CalmEmotionalShiftChart";
import CalmMoodActivationChart from "../../../components/CalmMoodActivationChart";
import CalmEffectiveExperiences from "../../../components/CalmEffectiveExperiences"; // Import the new component

export default function CalmAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar for navigation */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      {/* Main content area for the "Calm" category */}
      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Calm Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Calm' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        <div className="mt-8 border-t pt-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-700">Calm Experiences</h2>
                <p className="mt-2 text-gray-600">
                    Calm experiences are designed to promote calm and relaxation and lower arousal (activation levels).
                </p>
                <p className="mt-2 text-gray-600">
                    The following visuals present the distribution of emotional states before and after engaging with the Calm Category.
                </p>
            </div>
            <CalmUserInsights />
        </div>
        
        {/* Data visualizations section */}
        <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 gap-6">
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Emotion and mental states shifts</h3>
                <CalmEmotionalShiftChart />
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <CalmMoodActivationChart />
              </div>

              {/* --- NEW TABLES ADDED HERE --- */}
              <div className="p-4 rounded-lg">
                <CalmEffectiveExperiences />
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}
