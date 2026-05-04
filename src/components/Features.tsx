import { ShieldCheck, UserCheck, Clock, ThumbsUp, Star } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'An TOÀN TUYỆT ĐỐI',
    description: 'Xe đời mới, bảo dưỡng định kỳ, trang bị đầy đủ tiện nghi'
  },
  {
    icon: UserCheck,
    title: 'TÀI XẾ CHUYÊN NGHIỆP',
    description: 'Lịch sự, thông thạo tuyến đường, tận tâm phục vụ'
  },
  {
    icon: Clock,
    title: 'ĐÚNG GIỜ',
    description: 'Cam kết đúng hẹn, đưa đón đúng nơi, hỗ trợ 24/7'
  },
  {
    icon: ThumbsUp,
    title: 'GIÁ CẠNH TRANH',
    description: 'Minh bạch chi phí, không phát sinh phụ phí'
  },
  {
    icon: Star,
    title: 'DỊCH VỤ CAO CẤP',
    description: 'Phục vụ tận tình, linh hoạt theo yêu cầu'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-gray-100 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/20 transition-colors">
                <feature.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 truncate max-w-full tracking-wide text-sm">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
