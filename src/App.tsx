/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Map, 
  Camera, 
  Globe, 
  Heart, 
  Compass, 
  ArrowRight, 
  Download, 
  Users, 
  ShieldCheck,
  Zap,
  Mountain,
  Waves,
  Flower2,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const VerticalTitle = ({ title, subtitle, number }: { title: string; subtitle?: string; number?: string }) => (
  <div className="flex flex-row-reverse items-start gap-12 mb-20">
    <div className="flex flex-col items-center">
      {number && <span className="text-[16px] font-bold tracking-widest text-hare-gold mb-4">{number}</span>}
      <div className="w-px h-20 bg-hare-line" />
    </div>
    <div className="writing-vertical flex flex-col items-start pt-4">
      <motion.h2 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold tracking-[0.3em] leading-none text-hare-ink"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base tracking-[0.2em] text-hare-gold mt-8 font-light uppercase"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

const SkillItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group p-8 hare-border-b md:hare-border-r last:border-r-0"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 rounded-full border border-hare-gold/30 flex items-center justify-center text-hare-gold group-hover:bg-hare-gold group-hover:text-white transition-all duration-500">
        <Icon size={18} />
      </div>
      <h3 className="text-lg font-bold tracking-widest">{title}</h3>
    </div>
    <p className="text-base leading-relaxed text-hare-ink/70 font-light">
      {description}
    </p>
  </motion.div>
);

const StoryItem = ({ title, content, image, index }: { title: string, content: string, image: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="flex flex-col gap-6"
  >
    <div className="aspect-[3/4] overflow-hidden hare-border p-2 bg-white">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-[16px] font-bold text-hare-gold">0{index + 1}</span>
        <h4 className="text-base font-bold tracking-widest">{title}</h4>
      </div>
      <p className="text-base leading-relaxed text-hare-ink/60 font-light">{content}</p>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const friendsCultures = [
    { name: "澳洲", flag: "🇦🇺" },
    { name: "日本", flag: "🇯🇵" },
    { name: "紐西蘭", flag: "🇳🇿" },
    { name: "尼泊爾", flag: "🇳🇵" },
    { name: "緬甸", flag: "🇲🇲" },
    { name: "英國", flag: "🇬🇧" },
    { name: "愛爾蘭", flag: "🇮🇪" },
    { name: "法國", flag: "🇫🇷" },
    { name: "香港", flag: "🇭🇰" },
    { name: "and MORE!", flag: "✨" }
  ];

  return (
    <div className="min-h-screen selection:bg-hare-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 py-6 ${scrolled ? 'bg-hare-bg/95 backdrop-blur-sm hare-border-b' : 'bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-10 border-2 border-hare-ink flex items-center justify-center font-sans font-black text-base tracking-tight">NiQ</div>
            <span className="font-sans font-bold text-base tracking-[0.4em] text-hare-ink hidden sm:block">一起共創故事的隨行旅人</span>
          </div>
          
          <div className="flex items-center gap-12">
              <div className="hidden lg:flex space-x-12 text-[16px] font-bold uppercase tracking-[0.3em]">
                <a href="#about" className="hover:text-hare-gold transition-colors">DNA</a>
                <a href="#skills" className="hover:text-hare-gold transition-colors">Skills</a>
                <a href="#vision" className="hover:text-hare-gold transition-colors">Vision</a>
              </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-hare-ink">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-hare-bg flex flex-col items-center justify-center gap-12"
          >
            <div className="writing-vertical flex flex-col gap-12 text-2xl font-sans tracking-[0.5em]">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>關於我</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>我的組成</a>
              <a href="#vision" onClick={() => setIsMenuOpen(false)}>未來願景</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh+64px)] flex items-center px-8 md:px-20 overflow-hidden pt-16">
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[32px] font-sans tracking-widest text-hare-gold font-light">Hello, I'm</span>
                <h1 className="text-7xl md:text-[10rem] font-display font-[700] text-hare-ink leading-none">
                  NiQ
                </h1>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-20 writing-vertical text-[16px] font-bold tracking-[0.5em] text-hare-gold uppercase"
            >
              STORYTELLER & TRAVELER
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="aspect-[4/5] md:aspect-[16/10] overflow-hidden hare-border p-3 bg-white shadow-2xl relative z-0 cursor-crosshair"
            >
              <motion.img 
                src="https://res.cloudinary.com/dct96vfgp/image/upload/v1774344450/IMG_6119_axtblz.jpg" 
                alt="Travel" 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0"
                whileHover={{ 
                  scale: 3.0,
                  originY: 0.3 // Focus slightly higher for the head at higher zoom
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Stamp Element */}
            <motion.div 
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ 
                opacity: 1, 
                rotate: [0, 360],
              }}
              transition={{ 
                opacity: { delay: 1.5, duration: 1 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute -bottom-10 -right-10 w-32 h-32 border border-hare-gold rounded-full flex items-center justify-center text-hare-gold font-sans font-bold text-[16px] p-4 text-center leading-tight tracking-[0.2em] uppercase"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="absolute">Co-creating Stories • NiQ Traveler • </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▎二、 旅行的核心價值 (關於我) */}
      <section id="about" className="py-32 px-8 md:px-20 hare-border-t">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <VerticalTitle title="關於我" subtitle="Travel DNA" number="01" />
          </div>
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <p className="text-2xl md:text-4xl font-sans leading-relaxed text-hare-ink tracking-wider">
                  重視與人的連結，喜歡分享笑容<br />
                  旅居過澳洲兩年與多次日本long stay<br />
                  比起走馬看花，我深入當地風俗民情
                </p>
                <p className="text-base md:text-lg font-sans text-hare-ink tracking-widest opacity-80">
                  現職：資深產品設計師
                </p>
              </div>
              <div className="w-20 h-px bg-hare-gold" />
              
              <div className="space-y-24 pt-8">
                <div className="flex flex-wrap gap-x-24 gap-y-8 pb-12 border-b border-hare-gold/10">
                  {[
                    { label: "國籍", value: "台灣" },
                    { label: "低調的秘密", value: "青年旅宿專家" },
                    { label: "語言", value: "流利英文 / 初階日文" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <span className="text-[16px] font-bold text-hare-gold tracking-widest uppercase">{item.label}</span>
                      <p className="text-[16px] font-medium tracking-wide whitespace-nowrap">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* EXP Timeline */}
                <div className="relative pl-8 space-y-16">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-hare-gold/30" />
                  
                  {[
                    {
                      title: "澳洲打工度假",
                      desc: "擔任過咖啡師、滑雪場房務人員、行銷助理...有各式各樣的生活經驗，學會如何在不同環境中快速定位。"
                    },
                    {
                      title: "日本草津溫泉換宿",
                      desc: "了解溫泉文化並參加了在地藝術沙龍，深度融入當地人的生活，看見觀光客看不見的日常。"
                    },
                    {
                      title: "白馬村澳洲飯店房務",
                      desc: "在全英文的環境下與澳洲人co-work並如J人般緊密安排工作節奏，下班後滑雪！Work hard and play hard!"
                    }
                  ].map((exp, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[36px] top-2 w-4 h-4 rounded-full bg-white border-2 border-hare-gold" />
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="text-hare-gold font-bold text-xs tracking-[0.3em] uppercase">EXP</span>
                          <h4 className="text-2xl font-bold tracking-widest">{exp.title}</h4>
                        </div>
                        <p className="text-hare-ink/70 font-light leading-relaxed text-lg max-w-3xl">
                          {exp.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-16">
                  {/* Current Status - Full Width, Thick Border */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-4 border-hare-gold/20 p-8 md:p-16 bg-white/50 space-y-10 relative"
                  >
                    <div className="absolute top-8 right-8 -rotate-6 opacity-80 hover:opacity-100 transition-all duration-500 cursor-default select-none group" title="Japan Postage Stamp">
                      {/* Stamp Body with Perforated Edges Effect */}
                      <div className="relative w-20 h-24 bg-[#fdfcf0] p-1 shadow-lg flex flex-col items-center justify-between border-[0.5px] border-black/5"
                           style={{
                             maskImage: 'radial-gradient(circle at 10px 10px, transparent 4px, black 5px)',
                             maskSize: '20px 20px',
                             maskPosition: '-10px -10px',
                             WebkitMaskImage: 'radial-gradient(circle at 10px 10px, transparent 4px, black 5px)',
                             WebkitMaskSize: '20px 20px',
                             WebkitMaskPosition: '-10px -10px'
                           }}>
                        {/* Inner Border */}
                        <div className="absolute inset-2 border border-red-600/20 rounded-sm pointer-events-none" />
                        
                        {/* Denomination */}
                        <div className="w-full flex justify-between px-2 pt-2">
                          <span className="text-[10px] font-serif font-bold text-red-700/80">¥84</span>
                          <span className="text-[8px] font-serif font-bold text-red-700/80">日本郵便</span>
                        </div>

                        {/* The Flag / Sun */}
                        <div className="w-10 h-10 bg-red-600/90 rounded-full shadow-inner" />

                        {/* Country Name */}
                        <div className="pb-2 text-[10px] font-serif font-black text-red-700/80 tracking-widest">
                          NIPPON
                        </div>

                        {/* Postmark / Cancellation Mark Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                            <path d="M-10,30 Q10,20 30,30 T70,30 T110,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M-10,40 Q10,30 30,40 T70,40 T110,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M-10,50 Q10,40 30,50 T70,50 T110,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="70" cy="70" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <text x="60" y="72" fontSize="3" className="font-serif">2026.03.24</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-hare-gold">
                      <div className="w-2 h-2 rounded-full bg-hare-gold animate-pulse" />
                      <span className="text-sm font-bold tracking-[0.4em] uppercase">Current Status</span>
                    </div>
                    <div className="space-y-12">
                      <h4 className="text-3xl md:text-4xl font-bold tracking-widest text-hare-ink leading-tight">
                        目前正在豐後清川幫忙農活～
                      </h4>
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-sm hare-border shadow-2xl">
                        <video 
                          src="https://res.cloudinary.com/dct96vfgp/video/upload/v1774351433/video-output-367647F4-B86A-4734-BD9D-5D9C0CD43AB1-1_nmfykw.mov"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Future Plans - Full Width, No Border */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 space-y-8 relative"
                  >
                    <div className="flex items-center gap-4 text-hare-gold">
                      <Map size={24} />
                      <span className="text-sm font-bold tracking-[0.4em] uppercase">Future Plans</span>
                    </div>
                    <p className="text-2xl md:text-4xl font-sans italic leading-relaxed tracking-wide text-hare-ink/80 max-w-5xl">
                      「預計前往清邁、蒙古...以及想籌劃衣索比亞生豆探勘之旅，去拜訪我的生豆商朋友！」
                    </p>
                  </motion.div>
                </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▎三、 基本經歷與我的組成 */}
      <section id="skills" className="py-32 px-8 md:px-20 bg-white/50 hare-border-t">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-20">
            <VerticalTitle title="我的組成" subtitle="Skills & Perspectives" number="02" />
            <div className="hidden md:block writing-vertical text-[16px] font-bold tracking-[0.5em] text-hare-ink/20 uppercase pb-20">
              VERSATILE TRAVELER PERSPECTIVE
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 hare-border">
            <SkillItem 
              icon={Users}
              title="人類觀察專家"
              description="敏銳觀察小乘客的情緒需求，優化每一秒的旅行體驗。將 UI/UX 的同理心轉化為旅途中的體貼。"
            />
            <SkillItem 
              icon={Coffee}
              title="咖啡師靈魂"
              description="擅長破冰與傾聽，在異國街頭營造像家一樣的連結。用一杯咖啡的時間，交換一段真誠的故事。"
            />
            <SkillItem 
              icon={ShieldCheck}
              title="背包客韌性"
              description="兩年澳洲獨旅經驗，具備冷靜處理爆胎、遺失等危機的迭代能力。在未知中尋找最優解。"
            />
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-2xl font-sans tracking-widest text-hare-gold">隨旅加分項</h3>
              <p className="text-2xl font-bold tracking-wider text-hare-ink">最佳出團氣氛擔當！<br />自然又喜感</p>
              <p className="text-base leading-loose text-hare-ink/70 font-light italic">
                「興趣廣泛！涉略雙板滑雪、自由潛水、爬山、攝影、插花、UIUX設計，能煮好喝的咖啡！無論是什麼話題都能接上。」
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Mountain, label: "雙板滑雪" },
                  { icon: Waves, label: "自由潛水" },
                  { icon: Camera, label: "攝影" },
                  { icon: Flower2, label: "插花" },
                  { icon: Zap, label: "危機處理" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[16px] font-bold tracking-widest uppercase text-hare-gold">
                    <item.icon size={14} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative aspect-[4/5] md:aspect-[16/10] group cursor-pointer">
              {/* Bottom Postcard (Ski) */}
              <div className="absolute inset-0 transform rotate-3 translate-x-4 translate-y-4 transition-all duration-700 ease-out group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 z-0 group-hover:z-20">
                <div className="w-full h-full overflow-hidden hare-border p-3 bg-white shadow-2xl relative">
                  <video 
                    src="https://res.cloudinary.com/dct96vfgp/video/upload/v1774348485/B764A699-0F6E-4735-BFC9-64E3692081FD_gn6nty.mp4"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute bottom-6 left-6 text-[10px] font-serif font-bold text-hare-ink/30 tracking-widest uppercase">
                    Skiing / Hakuba, Japan
                  </div>
                </div>
              </div>

              {/* Top Postcard (Hiking) */}
              <div className="absolute inset-0 transform -rotate-2 transition-all duration-700 ease-out group-hover:rotate-12 group-hover:translate-x-24 group-hover:-translate-y-12 group-hover:opacity-0 z-10 group-hover:z-0">
                <div className="w-full h-full overflow-hidden hare-border p-3 bg-white shadow-2xl relative">
                  <video 
                    src="https://res.cloudinary.com/dct96vfgp/video/upload/v1774357780/hiking_zsqt6k.mov"
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute bottom-6 left-6 text-[10px] font-serif font-bold text-hare-ink/30 tracking-widest uppercase">
                    Hiking / Oita, Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ▎新增媒體區塊：生活片段 */}
      <section className="py-20 bg-white/30 hare-border-t overflow-hidden">
        <div className="px-8 md:px-20 max-w-[1600px] mx-auto">
          <h3 className="text-2xl font-sans tracking-widest text-hare-gold mb-12 text-center">亂入是我的日常</h3>
          
          {/* 靜態照片行 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] overflow-hidden hare-border p-2 bg-white shadow-lg"
              >
                <img 
                  src="https://res.cloudinary.com/dct96vfgp/image/upload/v1774348780/315ba270-933b-4330-a6a4-5a4f998c1e0e_mgo0qe.jpg" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Travel Moment 1"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <p className="text-[16px] text-hare-ink/70 font-light text-center">在hostel CUE認識小幫手與荷蘭準醫生</p>
            </div>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[3/4] overflow-hidden hare-border p-2 bg-white shadow-lg"
              >
                <img 
                  src="https://res.cloudinary.com/dct96vfgp/image/upload/v1774348779/92233912-8d2b-49d6-80de-b1f16c690627_nbqms2.jpg" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Travel Moment 2"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <p className="text-[16px] text-hare-ink/70 font-light text-center">一起唱過卡拉ok就是朋友了！</p>
            </div>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[3/4] overflow-hidden hare-border p-2 bg-white shadow-lg"
              >
                <img 
                  src="https://res.cloudinary.com/dct96vfgp/image/upload/v1774349338/kiyokawa_vmc8cg.png" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Travel Moment 4"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <p className="text-[16px] text-hare-ink/70 font-light text-center">在清川村與當地人交流</p>
            </div>
          </div>
        </div>

        {/* 動態影像行 - 全幅 */}
        <div className="w-full mt-12 bg-zinc-900">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-[800px] mx-auto aspect-video overflow-hidden shadow-2xl"
          >
            <video 
              src="https://res.cloudinary.com/dct96vfgp/video/upload/v1774348841/IMG_5873_2_nfehcz.mov"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
        <div className="px-8 md:px-20 mt-8">
          <p className="text-[16px] text-hare-ink/70 font-light text-center tracking-[0.3em] uppercase">語言不通，但肢體語言可以！</p>
        </div>
      </section>

      {/* ▎四、 深度連結：我與多元文化 */}
      <section className="py-32 px-8 md:px-20 hare-border-t">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4">
              <VerticalTitle title="多元文化" subtitle="Connections" number="03" />
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <p className="text-xl md:text-3xl font-sans tracking-[0.2em] leading-relaxed text-hare-ink font-medium">
                  Home is where souls meet
                </p>
                <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
                  {friendsCultures.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 md:bg-white/50 md:px-6 md:py-3 md:border md:border-hare-line md:rounded-full transition-all duration-500 hover:scale-110 md:hover:scale-105">
                      <span className="text-3xl md:text-2xl">{item.flag}</span>
                      <span className={`${item.name === "and MORE!" ? "block" : "hidden md:block"} text-[16px] font-sans tracking-[0.2em]`}>{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px bg-hare-line" />
                <p className="text-base tracking-widest text-hare-ink/40 uppercase">
                  我有來自澳洲、日本、紐西蘭、尼泊爾、緬甸、英國、愛爾蘭、法國、香港..的朋友，跟我分享不同的世界觀，讓我能應對帶團中面臨的各種文化差異！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ▎五、 願景：我為什麼要在這裡？ */}
      <section id="vision" className="py-40 px-8 md:px-20 bg-hare-ink text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="writing-vertical text-[20vw] font-sans font-black tracking-[0.5em] whitespace-nowrap">
            NINETY ROAD BUS TRAVELER
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <Heart size={32} className="mx-auto mb-12 text-hare-gold" />
            <h2 className="text-3xl md:text-6xl font-sans mb-16 tracking-[0.2em] leading-tight">
              我為什麼要在這裡？
            </h2>
            <p className="text-lg md:text-2xl font-light leading-loose mb-20 text-white/70 tracking-widest">
              「我認同九十路對隨行旅人的定義：一個一起出去玩的朋友。我希望利用我的觀察力與親和力，降低小乘客對陌生的恐懼，並轉化每一次的意外為旅途的回憶。」
            </p>
            <div className="w-12 h-px bg-hare-gold mx-auto" />
            <p className="mt-12 text-base tracking-[0.5em] text-white/40 uppercase">
              READY FOR A 2.5 YEAR COMMITMENT
            </p>
          </motion.div>
        </div>
      </section>

      {/* ▎六、Hire Me */}
      <footer className="py-32 px-8 md:px-20 text-center bg-hare-bg">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-12 border-2 border-hare-ink flex items-center justify-center font-sans font-black text-base tracking-tight">NiQ</div>
            <h3 className="text-xl font-sans tracking-[0.3em] text-hare-ink">準備好一起出發了嗎？</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 hare-border-t">
            <motion.a 
              href="https://www.cake.me/pdf/s--_ea0MyimJYZnjCkzQYzmzg--/6GLbBj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-hare-ink text-white px-12 py-5 rounded-none font-bold tracking-[0.3em] uppercase text-base shadow-2xl whitespace-nowrap"
            >
              <Download size={16} />
              <span>下載完整履歷</span>
            </motion.a>
            <div className="text-left space-y-2">
              <span className="text-[16px] font-bold text-hare-gold tracking-widest uppercase">CONTACT</span>
              <p className="text-base font-bold tracking-widest border-b border-hare-ink/20">yingchieh.nicole@gmail.com</p>
            </div>
          </div>
          
          <p className="pt-20 text-[16px] tracking-[0.6em] text-hare-ink/30 uppercase">
            © 2026 TRAVELER RESUME. DESIGNED FOR NINETY ROAD TRAVEL.
          </p>
        </div>
      </footer>

    </div>
  );
}

