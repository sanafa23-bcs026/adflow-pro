import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-600">
        Welcome to AdFlow Pro project!
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        This is Sana Akram live homepage. Start building dashboard here.
      </p>

      {/* Image ke liye div alag karo, <p> ke andar na ho */}
      <div className="mt-6">
        <Image
          src="/mypro.png"   // yaha hamesha '/' se start karo public folder ke liye
          alt="AdFlow Pro Dashboard"
          width={400}        // apni width adjust karo
          height={300}       // apni height adjust karo
        />
      </div>
    </main>
  );
}