import { ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-gold/20 border border-brand-gold/50 rounded-full text-brand-gold font-medium tracking-wide text-sm mb-2">
              QGROUP TRANSPORTATION
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight shadow-sm">
              {t('hero.title1')} <br/> 
              <span className="text-brand-gold">{t('hero.title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium tracking-wide py-1">
              {t('hero.subtitle')}
            </p>
            <p className="text-gray-300 pb-2 mx-auto max-w-xl">
              {t('hero.description')}
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xl mx-auto mb-8">
              <p className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                {t('hero.where_to')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedLocation('dalat')}
                  className={`py-4 rounded-xl font-bold transition-all flex flex-col items-center gap-2 border-2 ${
                    selectedLocation === 'dalat' 
                    ? 'bg-brand-gold text-brand-blue border-brand-gold shadow-lg transform scale-105' 
                    : 'bg-white/5 text-white border-white/30 hover:bg-white/20 hover:border-white'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                  {t('hero.dalat')}
                </button>
                <button 
                  onClick={() => setSelectedLocation('nhatrang')}
                  className={`py-4 rounded-xl font-bold transition-all flex flex-col items-center gap-2 border-2 ${
                    selectedLocation === 'nhatrang' 
                    ? 'bg-brand-gold text-brand-blue border-brand-gold shadow-lg transform scale-105' 
                    : 'bg-white/5 text-white border-white/30 hover:bg-white/20 hover:border-white'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                  {t('hero.nhatrang')}
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={selectedLocation ? `#booking-${selectedLocation}` : "#booking"} 
                className={`bg-brand-gold text-brand-blue px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 ${!selectedLocation && 'opacity-50 cursor-not-allowed'}`}
                onClick={(e) => !selectedLocation && e.preventDefault()}
              >
                {t('hero.book_now')} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#fleet" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center gap-2">
                {t('hero.view_prices')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
