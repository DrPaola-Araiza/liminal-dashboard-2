// app/analytics/focus/page.tsx

import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import FocusUserInsights from "../../../components/FocusUserInsights";
import FocusImpactChart from "../../../components/FocusImpactChart";
// Import the new chart component
import MentalVitalityChart from "../../../components/MentalVitalityChart";


export default function FocusAnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>

      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-sky-900">Focus Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and visualizations for the 'Focus' category.</p>
        
        <div className="mt-6">
          <AnalyticsFilters />
        </div>

        <div className="mt-8 border-t pt-6">
          <FocusUserInsights />
          
          <FocusImpactChart />

          {/* ADD THE NEW MENTAL VITALITY CHART HERE */}
          <MentalVitalityChart />
        </div>
      </div>
    </div>
  );
}
