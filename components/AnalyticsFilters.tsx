// components/AnalyticsFilters.tsx
'use client';

// A reusable dropdown component
function FilterDropdown({ label }: { label: string }) {
    return (
        <div className="flex items-center">
            <button className="flex items-center justify-between w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                {label}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </div>
    );
}

export default function AnalyticsFilters() {
    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
                <h3 className="text-lg font-medium text-gray-700">Filters</h3>
                <FilterDropdown label="Username" />
                <FilterDropdown label="Organization" />
                <FilterDropdown label="Device ID" />
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    Export Report PDF
                </button>
                <div className="flex items-center">
                    <button className="flex items-center justify-between w-64 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                        <span>📅 1 Jan 2025 - 17 Feb 2025</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

