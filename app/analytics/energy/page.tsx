// app/analytics/energy/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import EnergyUserInsights from "../../../components/EnergyUserInsights"; // Import the new component

export default function EnergyAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar for navigation */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      {/* Main content area for the "Energy" category */}
      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Energy Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Energy' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        {/* --- NEW SECTION: Energy Experiences Intro & User Insights --- */}
        <div className="mt-8 border-t pt-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-700">Energy Experiences</h2>
                <p className="mt-2 text-gray-600">
                    Energy experiences are designed to facilitate positive emotions and increased activation levels.
                </p>
                <p className="mt-2 text-gray-600">
                    The following visuals present the distribution of emotional states before and after using experiences within the Liminal Energy Arena.
                </p>
            </div>
            <EnergyUserInsights />
        </div>
        
        {/* Placeholder content for Energy-specific data visualizations */}
        <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-white p-4 rounded-lg shadow min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Energy Emotion Chart</h2>
                <p className="text-gray-500 text-center mt-10">New chart for 'Energy' emotions will go here.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Energy Preference Chart</h2>
                <p className="text-gray-500 text-center mt-10">New chart for 'Energy' preferences will go here.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow lg:col-span-2 min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Most Effective 'Energy' Experiences</h2>
                <p className="text-gray-500 text-center mt-10">New table for the most effective 'Energy' experiences will go here.</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}
