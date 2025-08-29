// app/analytics/sleep/page.tsx

import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import SleepUserInsights from "../../../components/SleepUserInsights";
import SleepinessChangeChart from "../../../components/SleepinessChangeChart"; 
import SleepReasonsCharts from "../../../components/SleepReasonsCharts";
import SleepDurationChart from "../../../components/SleepDurationChart";
// Import the new chart component
import SleepEffectivenessChart from "../../../components/SleepEffectivenessChart";


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
          <SleepinessChangeChart />
          <SleepReasonsCharts />
          <SleepDurationChart />
          {/* ADD THE NEW CHART HERE */}
          <SleepEffectivenessChart />
        </div>
      </div>
    </div>
  );
}