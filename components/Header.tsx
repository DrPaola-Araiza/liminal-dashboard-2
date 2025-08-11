// app/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // 1. Removed padding (p-4) from this header element
    <header className="w-full bg-white">
      {/* 2. Removed the div with 'max-w-7xl' that was wrapping the Link */}
      <Link href="/">
        <Image
          src="/liminal-banner.png"
          alt="Liminal Banner"
          width={1200} // Keep your image's actual width
          height={200} // Keep your image's actual height
          // This className makes the image stretch to fill the header
          className="w-full h-auto"
          priority
        />
      </Link>
    </header>
  );
}