// app/analytics/page.tsx
import AnalyticsSidebar from "../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../components/AnalyticsFilters";
import UserInsightsTable from "../../components/UserInsightsTable";
import EmotionChart from "../../components/EmotionChart";
import PreferenceCharts from "../../components/PreferenceCharts";
import MostEffectiveExperiences from "../../components/MostEffectiveExperiences";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <AnalyticsSidebar />
      </div>
      <div className="flex-1 bg-sky-50 p-6 overflow-y-auto">
        <AnalyticsFilters />
        
        <div className="mt-8 border-t pt-6 flex justify-center">
            <div className="w-full max-w-4xl">
                <UserInsightsTable />
            </div>
        </div>

        <div className="mt-8 border-t pt-6">
            <EmotionChart />
        </div>

        <div className="mt-8 border-t pt-6">
            <PreferenceCharts />
        </div>

        <div className="mt-8 border-t pt-6 flex justify-center">
            <div className="w-full max-w-4xl">
                <MostEffectiveExperiences />
            </div>
        </div>
      </div>
    </div>
  );
}