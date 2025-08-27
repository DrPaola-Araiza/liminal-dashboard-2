// app/analytics/awe/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import AweUserInsights from "../../../components/AweUserInsights";
import AweEffectiveExperiences from "../../../components/AweEffectiveExperiences"; // Import the new component

export default function AweAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar for navigation */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      {/* Main content area for the "Awe" category */}
      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Awe Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Awe' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        {/* --- Awe Experiences Intro & User Insights --- */}
        <div className="mt-8 border-t pt-6">
          <AweUserInsights />
        </div>
        
        {/* --- Most Effective Awe Experiences --- */}
        <div className="mt-8 border-t pt-6">
          <AweEffectiveExperiences />
        </div>
      </div>
    </div>
  );
}
