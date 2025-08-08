// components/UserInsightsTable.tsx

// A reusable table row component
function TableRow({ icon, label, value, isHeader = false }: { icon: string, label: string, value: string, isHeader?: boolean }) {
    const rowClasses = isHeader 
        ? "bg-teal-600 text-white font-bold" 
        : "bg-gray-100 text-gray-800";
    
    return (
        <div className={`flex items-center p-3 ${rowClasses}`}>
            <div className="w-10 text-xl">{icon}</div>
            <div className="flex-1 text-sm font-medium">{label}</div>
            <div className="w-40 text-right text-sm font-semibold">{value}</div>
        </div>
    );
}


export default function UserInsightsTable() {
    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">User insights</h3>
            <div className="overflow-hidden rounded-lg shadow">
                <div className="flex flex-col">
                    <TableRow 
                        icon="🎮" 
                        label="Play count" 
                        value="2,200,000" 
                        isHeader 
                    />
                    <TableRow 
                        icon="⏳" 
                        label="Average time using Liminal (From log in to log out)" 
                        value="21.8 min" 
                    />
                    <TableRow 
                        icon="⭐" 
                        label="4 & 5 Enjoyability Rating" 
                        value="500" 
                    />
                    <TableRow 
                        icon="🕶️" 
                        label="Last Month play count" 
                        value="1,500" 
                    />
                </div>
            </div>
        </div>
    );
}
