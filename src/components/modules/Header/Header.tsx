import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <header className="w-full px-4 flex justify-center">
      <div className="w-full max-w-6xl px-8 py-4 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-between transition-all duration-700 animate-fade-in-down">
        
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:tracking-wide transition-all duration-300">
          {/* Mobile Text */}
          <span className="block  sm:hidden">Next Starter</span>
          
          {/* Medium Devices (Tablet) */}
          <span className="hidden sm:block md:hidden">Next.js Boilerplate</span>
          
          {/* Desktop and larger */}
          <span className="hidden md:block">Next.js Starter Template</span>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
