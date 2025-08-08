// components/Header.tsx
'use client';

export default function Header() {
  return (
    <header className="w-full bg-white p-4">
      <div className="mx-auto max-w-7xl">
        {/* Reverted back to the placeholder image */}
        <img
          src="https://placehold.co/1200x200/000000/FFFFFF?text=LIMINAL"
          alt="Liminal Banner"
          className="w-full h-auto rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/1200x200/000000/FFFFFF?text=Image+Error";
          }}
        />
      </div>
    </header>
  );
}
