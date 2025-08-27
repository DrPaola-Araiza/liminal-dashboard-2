// app/analytics/pain-relief/page.tsx
import AnalyticsSidebar from "../../../components/AnalyticsSidebar";
import AnalyticsFilters from "../../../components/AnalyticsFilters";
import PainReliefUserInsights from "../../../components/PainReliefUserInsights";
import PainTypeDistributionChart from "../../../components/PainTypeDistributionChart";
import PainIntensityChart from "../../../components/PainIntensityChart";
import AcuteVsChronicPainChart from "../../../components/AcuteVsChronicPainChart";
import PainReliefEffectiveExperiences from "../../../components/PainReliefEffectiveExperiences";

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
        
        {/* Data visualizations section */}
        <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-white p-4 rounded-lg shadow">
                <PainTypeDistributionChart />
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <PainIntensityChart />
              </div>

              {/* --- AcuteVsChronicPainChart Container (width constrained) --- */}
              <div className="bg-white p-4 rounded-lg shadow lg:col-span-2 flex justify-center">
                <div className="w-full max-w-3xl">
                  <AcuteVsChronicPainChart />
                </div>
              </div>

              {/* --- Pain Relief Tables Container (full width) --- */}
              <div className="lg:col-span-2 p-4 rounded-lg bg-white shadow">
                <PainReliefEffectiveExperiences/>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}