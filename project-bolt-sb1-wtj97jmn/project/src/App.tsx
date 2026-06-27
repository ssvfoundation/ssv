import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConcretePage from './pages/ConcretePage';
import AboutPage from './pages/AboutPage';
import QuoteModal from './components/QuoteModal';

type Page = 'home' | 'concrete' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showQuote, setShowQuote] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'concrete':
        return <ConcretePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showQuote && <QuoteModal onClose={() => setShowQuote(false)} />}
      <Header currentPage={currentPage} onNavigate={handleNavigate} onQuote={() => setShowQuote(true)} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
