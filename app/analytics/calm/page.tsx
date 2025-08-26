// app/analytics/calm/page.tsx

// --- Simplified for Debugging ---
// We have removed all imports to isolate the routing issue.

export default function CalmAnalyticsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f0f9ff', height: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0c4a6e' }}>
        Test Calm Page
      </h1>
      <p style={{ marginTop: '0.5rem', color: '#374151' }}>
        If you can see this, the routing to /analytics/calm is working correctly!
      </p>
    </div>
  );
}