import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 dark:bg-yellow-900">
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        {/* Left Column: Banana Clicker */}
        <section className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl font-bold text-yellow-800 mb-8">Click the Banana!</h1>
          <div className="w-64 h-64 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105 active:scale-95">
            <span className="text-8xl">🍌</span>
          </div>
          <p className="mt-4 text-lg text-yellow-700">Clicks remaining today: 10</p>
        </section>

        {/* Right Column: Leaderboard */}
        <section className="flex-1 flex flex-col items-center justify-center p-4 bg-yellow-200 rounded-lg shadow-lg ml-8">
          <h2 className="text-4xl font-bold text-yellow-800 mb-6">Leaderboard</h2>
          <ul className="w-full max-w-md">
            <li className="flex justify-between items-center py-2 border-b border-yellow-300">
              <span className="text-xl text-yellow-800">1. User1</span>
              <span className="text-xl font-bold text-yellow-900">1000 🍌</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-yellow-300">
              <span className="text-xl text-yellow-800">2. User2</span>
              <span className="text-xl font-bold text-yellow-900">900 🍌</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-yellow-300">
              <span className="text-xl text-yellow-800">3. User3</span>
              <span className="text-xl font-bold text-yellow-900">800 🍌</span>
            </li>
            {/* More leaderboard entries */}
          </ul>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-yellow-300 bg-yellow-300 text-yellow-900">
        <p className="text-xs">
          © 2025 BananaBoard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
