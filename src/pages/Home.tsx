import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Fleet />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
