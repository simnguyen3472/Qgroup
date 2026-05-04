import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
              ĐỒNG HÀNH TRÊN <br/> 
              <span className="text-brand-gold">MỌI HÀNH TRÌNH</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium tracking-wide py-1">
              An Toàn - Đẳng Cấp - Chuyên Nghiệp
            </p>
            <p className="text-gray-300 pb-4 mx-auto max-w-xl">
              Chuyên cung cấp dịch vụ thuê xe du lịch, xe đưa đón và tour trọn gói chất lượng cao tại Nha Trang và Đà Lạt.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#booking" className="bg-brand-gold text-brand-blue px-6 py-3.5 rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Đặt xe ngay <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#fleet" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center gap-2">
                Xem bảng giá
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
