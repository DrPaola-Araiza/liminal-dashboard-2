// app/analytics/pain-relief/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import PainReliefUserInsights from "../../../components/PainReliefUserInsights";
import PainTypeDistributionChart from "../../../components/PainTypeDistributionChart"; // Import the new chart

export default function PainReliefAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar for navigation */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      {/* Main content area for the "Pain Relief" category */}
      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Pain Relief Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Pain Relief' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        {/* --- Pain Relief Experiences Intro & User Insights --- */}
        <div className="mt-8 border-t pt-6">
          <PainReliefUserInsights />
        </div>
        
        {/* Placeholder content for Pain Relief-specific data visualizations */}
        <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* --- NEW CHART ADDED HERE --- */}
              <div className="bg-white p-4 rounded-lg shadow">
                <PainTypeDistributionChart />
              </div>

              <div className="bg-white p-4 rounded-lg shadow min-h-[300px]">
                <h2 className="font-semibold text-gray-800 mb-4">Most Effective 'Pain Relief' Experiences</h2>
                <p className="text-gray-500 text-center mt-10">New table for 'Pain Relief' experiences will go here.</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}
