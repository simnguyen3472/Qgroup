import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Top 10 Địa Điểm Du Lịch Đà Lạt Không Thể Bỏ Qua',
      excerpt: 'Khám phá những điểm đến tuyệt đẹp tại Đà Lạt từ Thung Lũng Tình Yêu, đỉnh Langbiang đến những quán cafe view rừng thông mộng mơ.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800', 
      date: '15/04/2026',
      author: 'Admin',
      slug: '#'
    },
    {
      title: 'Kinh Nghiệm Thuê Xe Du Lịch Nha Trang Từ A - Z',
      excerpt: 'Hướng dẫn chi tiết cách chọn xe, lịch trình di chuyển và những lưu ý khi thuê xe du lịch để khám phá thành phố biển Nha Trang trọn vẹn nhất.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', 
      date: '28/04/2026',
      author: 'QGroup',
      slug: '#'
    },
    {
      title: 'Gợi ý Lịch Trình Khám Phá Cung Đường Biển Đẹp Nhất Việt Nam',
      excerpt: 'Hành trình từ sân bay Cam Ranh đi trung tâm Nha Trang dọc theo cung đường biển ngoạn mục, những điểm dừng chân check-in đỉnh cao.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800', 
      date: '02/05/2026',
      author: 'Admin',
      slug: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">Cẩm nang du lịch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue uppercase">BLOG DU LỊCH</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-gold" />
                    {post.author}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-brand-blue transition-colors">
                  <a href={post.slug}>{post.title}</a>
                </h4>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <a href={post.slug} className="mt-auto inline-flex items-center gap-2 text-brand-blue font-bold text-sm tracking-wide hover:text-brand-gold transition-colors">
                  ĐỌC TIẾP <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300">
            Xem Tất Cả Bài Viết
          </a>
        </div>

      </div>
    </section>
  );
}
