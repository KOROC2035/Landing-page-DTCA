import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Camera, PenTool, TrendingUp, CheckCircle2, ArrowRight, Sun, Moon, PackageSearch, Gem, ChevronRight } from 'lucide-react';
import bgImage from './assets/Image_de_fond.png';
import imgAvant1 from './assets/Jus_d_ananas_1.jpg';
import imgApres1 from './assets/Jus_d_ananas.png'; 
import imgAvant2 from './assets/chemise_1.jpg'; 
import imgApres2 from './assets/Chemise.png'; 

// ==========================================
// COMPOSANT D'ANIMATION AU SCROLL
// ==========================================
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ==========================================
// APPLICATION PRINCIPALE
// ==========================================
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('upsell_landing_theme') === 'dark';
  });

  const LIEN_APPLICATION_WEB = "https://studio-ia-frontend-lusz.vercel.app/";

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('upsell_landing_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('upsell_landing_theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg z-50 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">Studio Créatif IA</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="flex items-center justify-center p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:rotate-12"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
              </button>
              <a href={LIEN_APPLICATION_WEB} className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 md:py-2.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30 text-sm sm:text-base">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 🌟 HERO SECTION CORRIGÉE (Voile translucide réparé) 🌟 */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-4 text-center overflow-hidden">
        
        {/* 1. L'IMAGE DE FOND */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Une image de studio un peu plus lumineuse pour bien voir l'effet */}
          <img 
            src={bgImage} 
            alt="Studio Background" 
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* 2. LE VOILE TRANSLUCIDE (Le coupable était ici : on utilise /70 et backdrop-blur-sm) */}
        <div className="absolute inset-0 z-10 bg-white/85 dark:bg-slate-900/85 transition-colors duration-500"></div>

        {/* 3. LE CONTENU */}
        <div className="max-w-4xl mx-auto relative z-20">
          <RevealOnScroll delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 font-bold px-4 py-1.5 rounded-full text-sm mb-8 hover:scale-105 transition-transform cursor-default shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Votre assistant marketing n°1
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
              Visuels pros & textes <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">vendeurs en 1 clic.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 dark:text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
              Transformez vos simples photos de produits en publications dignes d'une grande agence et laissez l'IA rédiger pour vous.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={450}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={LIEN_APPLICATION_WEB} className="group relative bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] transform hover:-translate-y-1 overflow-hidden">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  Tester gratuitement <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-6 font-bold drop-shadow-md">✨ 3 crédits offerts • Sans carte bancaire</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION AVANT/APRÈS */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <RevealOnScroll>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">La preuve par l'image</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Notre IA analyse votre photo brute et crée un décor studio hyper-réaliste adapté à votre produit en moins de 10 secondes.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* EXEMPLE 1 */}
            <RevealOnScroll delay={100}>
              <div className="p-6 md:p-8 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative group">
                <div className="absolute -top-4 -right-4 bg-amber-100 dark:bg-amber-900/50 p-3 rounded-2xl shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-300 z-10">
                  <PackageSearch className="w-6 h-6 text-amber-600 dark:text-amber-400 animate-pulse" />
                </div>
                
                <h3 className="font-bold text-xl mb-6 text-slate-800 dark:text-white flex items-center gap-2">Produit Alimentaire</h3>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                  <div className="w-full sm:w-[45%]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner relative group-hover:scale-[0.98] transition-transform duration-500">
                      <div className="absolute inset-0 bg-black/10 z-10"></div>
                      <img src={imgAvant1} alt="Produit Brut" className="w-full h-full object-cover filter grayscale-[20%]" />
                      <span className="absolute bottom-2 left-2 z-20 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">Avant</span>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 z-10 shadow-lg transform sm:rotate-0 rotate-90">
                    <ChevronRight className="w-6 h-6" />
                  </div>

                  <div className="w-full sm:w-[45%]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/20 group-hover:scale-105 group-hover:ring-blue-500/40 transition-all duration-500 relative">
                      <img src={imgApres1} alt="Produit Studio" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 right-2 z-20 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1"><Sparkles className="w-3 h-3"/> Studio IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* EXEMPLE 2 */}
            <RevealOnScroll delay={300}>
              <div className="p-6 md:p-8 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative group">
                <div className="absolute -top-4 -right-4 bg-pink-100 dark:bg-pink-900/50 p-3 rounded-2xl shadow-lg transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300 z-10">
                  <Gem className="w-6 h-6 text-pink-600 dark:text-pink-400 animate-bounce" />
                </div>
                
                <h3 className="font-bold text-xl mb-6 text-slate-800 dark:text-white flex items-center gap-2">Mode & Chaussures</h3>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                  <div className="w-full sm:w-[45%]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner relative group-hover:scale-[0.98] transition-transform duration-500">
                      <div className="absolute inset-0 bg-black/10 z-10"></div>
                      <img src={imgAvant2} alt="Chaussure Brute" className="w-full h-full object-cover filter grayscale-[20%]" />
                      <span className="absolute bottom-2 left-2 z-20 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">Avant</span>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 z-10 shadow-lg transform sm:rotate-0 rotate-90">
                    <ChevronRight className="w-6 h-6" />
                  </div>

                  <div className="w-full sm:w-[45%]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-500/20 group-hover:scale-105 group-hover:ring-pink-500/40 transition-all duration-500 relative">
                      <img src={imgApres2} alt="Chaussure Studio" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 right-2 z-20 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1"><Sparkles className="w-3 h-3"/> Studio IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <RevealOnScroll>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">L'arsenal ultime du e-commerçant</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Trois outils surpuissants réunis dans une seule application ultra-simple d'utilisation.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll delay={100}>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 group h-full">
                <div className="bg-white dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Camera className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Détourage & Décors</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Finis les draps blancs froissés au mur. L'IA isole votre produit et génère un décor professionnel adapté à sa catégorie.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={250}>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 group h-full">
                <div className="bg-white dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <PenTool className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Copywriting IA</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Ne cherchez plus vos mots. Notre modèle d'IA rédige des argumentaires de vente percutants, incluant émojis et hashtags.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 group h-full">
                <div className="bg-white dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Optimisé Réseaux</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Un texte court et direct pour envoyer sur WhatsApp, ou une histoire chaleureuse pour engager votre communauté Facebook.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        {/* Décoration arrière-plan */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Investissez dans vos ventes</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Des forfaits transparents, payables facilement par Mobile Money (Wave, Orange, MTN).</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            {/* STARTER */}
            <RevealOnScroll delay={100}>
              <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">Pour découvrir la magie de l'IA.</p>
                <div className="flex items-baseline gap-2 mb-8"><span className="text-5xl font-extrabold text-slate-900 dark:text-white">0</span><span className="text-lg text-slate-500 font-medium">FCFA</span></div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="font-medium">3 crédits offerts</span></li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Copywriting basique</li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Textes FB, Insta & WhatsApp</li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Support WhatsApp</li>
                </ul>
                <a href={LIEN_APPLICATION_WEB} className="block text-center w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 rounded-xl transition-colors">Créer mon compte</a>
              </div>
            </RevealOnScroll>

            {/* PRO */}
            <RevealOnScroll delay={250}>
              <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border-2 border-blue-600 dark:border-blue-500 shadow-2xl relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Recommandé
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 mt-2">Pro</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">Pour les e-commerçants actifs.</p>
                <div className="flex items-baseline gap-2 mb-8"><span className="text-5xl font-extrabold text-slate-900 dark:text-white">2 000</span><span className="text-lg text-slate-500 font-medium">FCFA / mois</span></div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> <span className="font-bold">30 crédits mensuels</span></li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Copywriting avancé</li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Textes FB, Insta & WhatsApp</li>
                  <li className="flex gap-3 text-slate-700 dark:text-slate-300 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Support WhatsApp</li>
                </ul>
                <a href={LIEN_APPLICATION_WEB} className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">Passer au niveau Pro</a>
              </div>
            </RevealOnScroll>

            {/* BUSINESS */}
            <RevealOnScroll delay={400}>
              <div className="bg-slate-900 dark:bg-slate-800 p-8 md:p-10 rounded-[2rem] border border-slate-800 dark:border-slate-700 shadow-lg text-white">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Business</h3>
                <p className="text-slate-400 mb-6">Pour les agences et grossistes.</p>
                <div className="flex items-baseline gap-2 mb-8"><span className="text-5xl font-extrabold text-white">5 000</span><span className="text-lg text-slate-400 font-medium">FCFA / mois</span></div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 text-slate-200 items-center"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> <span className="font-bold">100 crédits mensuels</span></li>
                  <li className="flex gap-3 text-slate-200 items-center"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> Génération en masse (Batch)</li>
                  <li className="flex gap-3 text-slate-200 items-center"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> Textes FB, Insta & WhatsApp</li>
                  <li className="flex gap-3 text-slate-200 items-center"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> Support WhatsAp prioritaire</li>
                  <li className="flex gap-3 text-slate-200 items-center"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> Priorité serveur</li>
                </ul>
                <a href={LIEN_APPLICATION_WEB} className="block text-center w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 rounded-xl transition-colors">Contacter l'équipe</a>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-slate-400" />
            <span className="font-extrabold text-xl tracking-tight text-slate-400">Studio Créatif IA</span>
          </div>
          <p className="text-slate-500 dark:text-slate-500 mb-8">L'intelligence artificielle au service des commerçants africains.</p>
          <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 dark:text-slate-600 text-sm">© 2026 Studio Créatif IA. Tous droits réservés. Créé avec passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;