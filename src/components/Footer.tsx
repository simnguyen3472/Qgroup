import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-brand-blue text-white pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="inline-block mb-6 bg-white p-1.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              <img src="https://i.ibb.co/mrY6ZJJd/Gemini-Generated-Image-k4ovuak4ovuak4ov.png" alt="QGroup Transportation" className="h-14 w-auto object-contain rounded-lg" />
            </a>
            <p className="text-brand-blue-50 text-sm leading-relaxed text-gray-300">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 flex-col sm:flex-row">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-1">Hotline (24/7)</p>
                  <a href="tel:0912993397" className="block text-xl font-bold hover:text-brand-gold transition-colors">0912 993 397</a>
                  <a href="tel:0914863387" className="block text-xl font-bold hover:text-brand-gold transition-colors">0914 863 387</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">{t('footer.info')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:Qgroup.xedichvudalat@gmail.com" className="text-sm text-gray-300 hover:text-brand-gold transition-colors break-all">
                  Qgroup.xedichvudalat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-300">TP. Nha Trang, Khánh Hòa</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-300">Phục vụ 24/7</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">{t('footer.subscribe')}</h4>
            <p className="text-sm text-gray-300 mb-4">{t('footer.subscribe_desc')}</p>
            <form className="flex border border-white/20 rounded-xl overflow-hidden focus-within:border-brand-gold transition-colors">
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')} 
                className="w-full bg-white/5 px-4 py-3 outline-none text-sm text-white placeholder:text-gray-500"
              />
              <button className="bg-brand-gold text-brand-blue px-4 py-3 font-bold hover:bg-yellow-400 transition-colors">
                {t('footer.send')}
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} QGroup Transportation. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
