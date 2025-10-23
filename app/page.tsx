// app/page.tsx
const LIGHT_BLUE = '#b8eeff';
import Image from 'next/image';

export default function HomePage() {
  const shadowStyle = { 
    textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)',
  };

  return (
    <main className="min-h-screen w-full bg-[#249AD6] p-4 relative overflow-hidden">
      
      {/* Container is now just a positioning context for absolute children */}
      <div className="absolute top-0 w-full h-full">

        {/* Brand Image */}
        <Image
          src="/images/brand.png"
          alt="Brand Logo"
          width={200} 
          height={100}
          className="w-32 md:w-48 h-auto scale-150 absolute top-0 left-0 mt-8 ml-8 z-50" 
          style={{
            transform: 'translate(2.5vw, 2vh)',
          }}
          priority
        />
        
        {/* Tree (z-20) */}
        <Image
          src="/images/tree.gif"
          alt="tree"
          width={400} 
          height={200}
          className="w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-auto scale-190 absolute z-20"
          style={{ 
            transform: 'translate(3vw, 17.7vh)',
          }}
          priority
        />
        
        {/* Cloud 1 (z-10) */}
        <Image
          src="/images/cloud1.png"
          alt="Cloud 1"
          width={400} 
          height={200}
          className="w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-auto scale-75 absolute z-10"
          style={{ 
            transform: 'translate(35vw, 13vh)',
          }}
        />
        
        {/* Cloud 2 (z-10) */}
        <Image
          src="/images/cloud2.png"
          alt="Cloud 2"
          width={400} 
          height={200}
          className="w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-auto absolute z-10"
          style={{ 
            transform: 'translate(60vw, 8vh)',
          }}
          priority
        />

        <Image
          src="/images/arrow.gif"
          alt="Arrow"
          width={400} 
          height={200}
          className="w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-auto scale-20 absolute z-10"
          style={{ 
            transform: 'translate(260vw, 325vh)',
          }}
          priority
        />

        {/* 💬 NEW: SPEECH BUBBLE CONTAINER 💬 */}
        {/* Note: In React/Next.js, we use Image component for images and background properties are limited/complex. 
           I'll use a standard div and apply the exact styling you provided, assuming speech_bubble.png is a visual effect or filter.
           If speech_bubble.png is a literal image, we'd need to use a separate Image component for it.
           For maximum compatibility with your CSS, I'll stick to a styled <div>.
        */}
        <div
          // Use absolute positioning with your exact pixel coordinates
          className="absolute z-50" 
          style={{
            width: '260.37px',
            height: '248.05px',
            left: '343.35px',
            top: '685.9px',
            background: 'url(/images/speech_bubble2.png)', // Assuming path is public/images/
            backgroundSize: 'contain', // Ensure the image fits
            backgroundRepeat: 'no-repeat',
            // backgroundBlendMode: 'screen', // JSX doesn't support kebab-case properties directly
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            transform: 'translate(-1vw, -30vh)',
            pointerEvents: 'none', // Prevents blocking clicks on elements below
          }}
        />

        {/* 💬 NEW: DID YOU KNOW? TEXT 💬 */}
        <div
          // Use absolute positioning with your exact pixel coordinates
          className="font-pixelify absolute z-50"
          style={{
            width: '136.42px',
            height: '80.61px',
            left: '418.22px',
            top: '760.55px',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '48px',
            display: 'flex',
            alignItems: 'flex-end',
            textAlign: 'center',
            letterSpacing: '-0.05em',
            color: '#2399CC',
            transform: 'rotate(8.8deg) translate(-4.5vw, -30vh)',
            // Ensure the text aligns properly within the box
            justifyContent: 'center',
            paddingBottom: '5px',
          }}
        >
          did you know?
        </div>

      </div>

      {/* 🏆 Consolidated Text Content Container 🏆 */}
      <div 
          className="font-pixelify absolute right-0 top-1/2 -translate-y-1/3 w-full z-50 text-right" 
          style={{ 
            color: LIGHT_BLUE,
            paddingRight: '4vw'
          }}
      > 
        
        {/* 1. "this building saves" block */}
        <p 
            className="font-bold"
            style={{ 
              ...shadowStyle, 
              fontSize: '5rem', 
              lineHeight: '0.9', 
              margin: '1.75rem', 
            }}
        >
            <span className="block">this</span>
            <span className="block">building</span>
            <span className="block">saves</span>
        </p>

        {/* 2. The large 'WATER' text */}
        <h1 
          className="font-bold block"
          style={{ 
            ...shadowStyle, 
            fontSize: '13rem', 
            lineHeight: '0.8', 
            margin: '1.75rem' 
          }}
        >
          WATER
        </h1>
        
        {/* 3. Sub-Text with arrow */}
        <p 
            className="" 
            style={{ 
              ...shadowStyle, 
              fontSize: '2.5rem', 
              lineHeight: '0.9', 
              margin: '1.75rem', 
            }}
          >
          <span className="mr-2"></span> more info coming soon
        </p>
      </div>
    </main>
  );
}