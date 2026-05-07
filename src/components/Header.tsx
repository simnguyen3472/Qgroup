import { Phone, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center py-1">
            <img src="https://i.ibb.co/mrY6ZJJd/Gemini-Generated-Image-k4ovuak4ovuak4ov.png" alt="QGroup Transportation" className="h-14 w-auto object-contain rounded-lg shadow-sm" />
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-wide">{t('header.home')}</a>
            <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-wide">{t('header.services')}</a>
            <a href="#fleet" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-wide">{t('header.fleet')}</a>
            <a href="#blog" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-wide">{t('header.blog')}</a>
            <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-wide">{t('header.contact')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-gray-700 hover:text-brand-blue font-semibold transition-colors"
                title="Change language"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase text-sm">{i18n.language}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 flex flex-col z-50">
                  <button onClick={() => changeLanguage('vi')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${i18n.language === 'vi' ? 'text-brand-blue font-bold' : 'text-gray-700'}`}>Tiếng Việt</button>
                  <button onClick={() => changeLanguage('en')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${i18n.language === 'en' ? 'text-brand-blue font-bold' : 'text-gray-700'}`}>English</button>
                  <button onClick={() => changeLanguage('ko')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${i18n.language === 'ko' ? 'text-brand-blue font-bold' : 'text-gray-700'}`}>한국어</button>
                </div>
              )}
            </div>

            <a href="tel:0912993397" className="hidden md:flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full hover:bg-brand-blue-dark transition-colors font-medium">
              <Phone className="w-4 h-4" />
              0912 993 397
            </a>
            
            {/* Mobile menu button */}
            <a href="tel:0912993397" className="md:hidden flex items-center justify-center p-2.5 bg-brand-gold text-brand-blue rounded-full shadow-md">
              <Phone className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
