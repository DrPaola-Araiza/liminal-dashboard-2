// app/analytics/sleep/page.tsx

import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import SleepUserInsights from "../../../components/SleepUserInsights";
// Import the new chart component
import SleepinessChangeChart from "../../../components/SleepinessChangeChart"; 
// import SleepQualityChart from "../../../components/SleepQualityChart"; 
// import MostEffectiveSleepExperiences from "../../../components/MostEffectiveSleepExperiences";

export default function SleepAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Sleep Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Sleep' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        <div className="mt-8 border-t pt-6">
          <SleepUserInsights />
          {/* ADD THE NEW CHART HERE */}
          <SleepinessChangeChart />
          {/* The other sleep components will go here once we create them */}
        </div>
      </div>
    </div>
  );
}