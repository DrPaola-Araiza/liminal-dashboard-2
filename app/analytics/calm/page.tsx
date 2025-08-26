// app/analytics/calm/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import CalmUserInsights from "../../../components/CalmUserInsights"; // Import the new component

// Note: We have removed the imports for the general chart components.

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
        
        {/* Reusing the same filters component */}
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        {/* --- NEW SECTION: Calm Experiences Intro & User Insights --- */}
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
        
        {/* Placeholder content for Calm-specific data visualizations */}
        <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-white p-4 rounded-lg shadow min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Calm Emotion Chart</h2>
                <p className="text-gray-500 text-center mt-10">New chart for 'Calm' emotions will go here.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Calm Preference Chart</h2>
                <p className="text-gray-500 text-center mt-10">New chart for 'Calm' preferences will go here.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow lg:col-span-2 min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Most Effective 'Calm' Experiences</h2>
                <p className="text-gray-500 text-center mt-10">New table for the most effective 'Calm' experiences will go here.</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}
