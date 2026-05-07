import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.s1'),
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: t('services.s2'),
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32f7?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: t('services.s3'),
      img: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: t('services.s4'),
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', // wedding/event
    },
    {
      title: t('services.s5'),
      img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">{t('services.subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue uppercase">{t('services.title')}</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CSS grid to fit 5 cards somewhat balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-white font-bold text-lg leading-tight uppercase text-center tracking-wide">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
