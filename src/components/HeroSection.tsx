import { BookOpen, ArrowRight } from 'lucide-react'; // Import necessary icons
import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-green-600 to-gray-700 text-white overflow-hidden">
            {/* Background Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                    <span className="inline-block mr-3 transform -rotate-6 text-yellow-300">📚</span>
                    Your Ultimate Library Companion
                </h1>

                {/* Subtitle/Description */}
                <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 opacity-90 animate-fade-in-up delay-200">
                    Effortlessly manage, discover, and organize your book collection with our intuitive and powerful system.
                </p>

                {/* Call to Action Button */}
                <Link to={'/books'}>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up delay-400
                       focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75">
                    Explore Books
                    <ArrowRight className="ml-3 w-5 h-5" />
                </button>
                
                </Link>
            </div>

            {/* Simple CSS for animations (can be moved to a CSS file if preferred) */}
            <style jsx>{`
        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 0.8s ease-out forwards;
          opacity: 0; /* Start invisible */
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
