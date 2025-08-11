// components/AnalyticsSidebar.tsx
'use client';
import Link from 'next/link';

// A helper component for each navigation link
function NavLink({ href, children, icon }: { href: string, children: React.ReactNode, icon: string }) {
    return (
        <Link href={href}>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="w-6 h-6 text-gray-500">{icon}</span>
                <span className="ml-3">{children}</span>
            </div>
        </Link>
    );
}

export default function AnalyticsSidebar() {
    return (
        // The main container no longer needs to be a flex column
        <aside className="w-64 h-full" aria-label="Sidebar">
            {/* The flex-grow class has been removed from this div */}
            <div className="px-3 py-4 overflow-y-auto">
                <div className="flex items-center p-2 text-base font-bold text-gray-900">
                    <span>Analytics</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <ul className="space-y-2 mt-2">
                    <li>
                        <NavLink href="#" icon="📊">General User Insights</NavLink>
                    </li>
                    <li>
                        <NavLink href="#" icon="🧘">Calm</NavLink>
                    </li>
                    <li>
                        <NavLink href="#" icon="⚡">Energy</NavLink>
                    </li>
                    <li>
                        <NavLink href="#" icon="😮">Awe</NavLink>
                    </li>
                    <li>
                        <NavLink href="#" icon="😌">Pain Relief</NavLink>
                    </li>
                    <li>
                        <NavLink href="#" icon="🎯">Focus</NavLink>
                    </li>
                </ul>
                
                {/* === User Profile Section has been MOVED here === */}
                <div className="p-4 mt-4 border-t border-gray-200">
                    <h3 className="font-bold text-gray-800">SwinUniversity</h3>
                    <div className="flex items-center justify-between text-gray-600 mt-1">
                        <span>PaolaAdmin</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H3"></path></svg>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
                        Manage
                    </button>
                </div>
            </div>
        </aside>
    );
}
