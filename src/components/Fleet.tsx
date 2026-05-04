export default function Fleet() {
  const fleet = [
    {
      seats: '4 - 7 CHỖ',
      models: 'Kia Sedona, Toyota Innova...',
      desc: 'Phù hợp gia đình, nhóm nhỏ',
      img: 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/515505329_24195595106725523_8912876313122633262_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH_wWLzOy84ysbgs0TLaRPcHvGfIyy1mgge8Z8jLLWaCEqzZb9jDU3wtqg1KHOnbbMuPABwLNUQJGnOq33-eyDq&_nc_ohc=SweJu2aCpoMQ7kNvwH3DVls&_nc_oc=AdogIl-DskYz_tUpjze9lFvn5aIZ1NjeModT6hSS2EjqfI4ze8wOpz3Rfrb-pFzqxC0&_nc_zt=23&_nc_ht=scontent.fsgn13-1.fna&_nc_gid=sy5meWLeXBPyP5LhOVXY7g&_nc_ss=7b2a8&oh=00_Af5BR6A0yngCij-Mv2Vj1Ockn-1RZgT_hYgvJOmls4NHfA&oe=69FE8713',
    },
    {
      seats: '16 CHỖ',
      models: 'Hyundai Solati, Ford Transit',
      desc: 'Tiện nghi, rộng rãi',
      img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/645338468_1801634617612995_5434608591833605359_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeERzcSkHHiUrD7FHHTtyrfzevfJsfyeP3p698mx_J4_ekxIkVkXDJx6PnizJLKUVYyPBkHM9buFwSzwB_ETTPGe&_nc_ohc=-Fc3YRcO5b8Q7kNvwEIBZSJ&_nc_oc=AdqdJCxdhj_kgkBGpV47D-lnXv1-rPchciTFij4ojAGlY_RbG2BG6krhC1sK3_wY8GI&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=jxoVvc7hIrPXWLj03Bo8Lg&_nc_ss=7b2a8&oh=00_Af6TMCoN3PZf2a_Brgey1ceKdO-MbkaekN47Jboie3PVMg&oe=69FE75A6',
    },
    {
      seats: '29 - 35 CHỖ',
      models: 'Thaco, Hyundai',
      desc: 'Sang trọng, thoải mái',
      img: 'https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/649087662_1805259263917197_7830670172101177747_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG_sONqmEua4wthmbTUKCntYSx9HQnZWJNhLH0dCdlYk04hp70R6JrbU7cx9644aqlSQHv_WbNkzenLfPeA2egK&_nc_ohc=orXAlYX6XtEQ7kNvwHcIewM&_nc_oc=AdoL2r976eJ9L79NbfbqblnrXi01gFtu1_QuaXjnaDFHQo29S0K-fJrkAH7vsGYrVBo&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=cgSjjQVLgor9sbhq-CaLWw&_nc_ss=7b2a8&oh=00_Af46J-VasBgHfhWnx6zI7DlCh46Y7FrmwBMGADq1zOgpiw&oe=69FE6391',
    },
    {
      seats: '45 CHỖ',
      models: 'Universe, Kim Long',
      desc: 'Cao cấp, hiện đại',
      img: 'https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/683227187_1849628182813638_189354858169232998_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEW7dmiXC4s-qD2GttqBct_0olWf-9dUFzSiVZ_711QXNAkqDWh2hXH6dodpb54r1_5NbTvVcWmABd0-VR7_FuN&_nc_ohc=AVZI4rHM29kQ7kNvwFRMFyq&_nc_oc=Ado57WfVmGbMRVhWNmvHVz6SRxoS8jUWmXCLFemSVS2jIf50fG9qhi5ddLw6JxPSeRY&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=TcOifxsExKoTosrFkvTr4Q&_nc_ss=7b2a8&oh=00_Af5HcHloFVI37OE4dw1OZqDglnX0ZywGyzUKf47fZfrH7Q&oe=69FE73CB',
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">Chất lượng hàng đầu</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue uppercase">ĐA DẠNG DÒNG XE</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleet.map((car, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="p-6 pb-0 relative">
                 {/* Premium crown placeholder decoration */}
                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-brand-gold text-xs font-bold">♛</span>
                 </div>
                 <img 
                    src={car.img} 
                    alt={`Xe ${car.seats}`} 
                    className="w-full h-auto object-contain aspect-[4/3] transform group-hover:scale-105 transition-transform duration-500 rounded-lg drop-shadow-md"
                  />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-brand-blue mb-2">{car.seats}</h4>
                <p className="font-semibold text-gray-700 text-sm mb-1">{car.models}</p>
                <p className="text-gray-500 text-sm">{car.desc}</p>
                
                <button className="mt-6 w-full py-2.5 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-colors">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
