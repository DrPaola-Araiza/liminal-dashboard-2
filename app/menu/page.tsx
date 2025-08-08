// app/menu/page.tsx
import Link from 'next/link'; // Import the Link component for navigation

export default function MenuPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="flex space-x-8">
        <Link href="/analytics">
          <button className="px-12 py-4 text-xl font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Analytics
          </button>
        </Link>
        <Link href="#">
            <button className="px-12 py-4 text-xl font-semibold text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Manage
            </button>
        </Link>
      </div>
    </div>
  );
}
