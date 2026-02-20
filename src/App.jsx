import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Gamepad2, 
  Palette, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  ChevronRight,
  MonitorPlay,
  Languages,
  Layers,
  Award
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      category: "影音後製與特效",
      icon: <Video className="w-6 h-6" />,
      items: ["Premiere Pro (ACP 認證)", "After Effects"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      category: "平面視覺設計",
      icon: <Palette className="w-6 h-6" />,
      items: ["Photoshop", "Illustrator"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: "遊戲開發與 3D",
      icon: <Gamepad2 className="w-6 h-6" />,
      items: ["Unity", "Unreal Engine", "Blender", "C# 程式開發"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      category: "語言與進修",
      icon: <Languages className="w-6 h-6" />,
      items: ["英文 (中等)", "日文 (N3 目標中)"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const commercialProjects = [
    {
      title: "【公認】RPR 中文翻譯精華",
      role: "核心剪輯師",
      tools: ["Premiere Pro", "After Effects"],
      highlights: [
        "負責全片剪輯、動態字幕設計、視覺特效與音效處理。",
        "高強度產能：每週穩定產出 5 支中長片及數支 Short 短影音。",
        "獨立開發專屬動態片尾與特效模板，大幅優化團隊效率。"
      ],
      link: "https://youtube.com/playlist?list=PL51-0S8ESXopKiE91bDlf_3M20Lr72mLK&si=V3MykWftdpEO4auJ",
      videoId: "CA2yF_XI_dM"
    },
    {
      title: "阿戚 AQI 遊戲實況頻道",
      role: "影片製作技術人員",
      tools: ["Premiere Pro", "After Effects"],
      highlights: [
        "精準捕捉直播精華，具備敏銳的敘事節奏感。",
        "獨立製作簡易講解動畫，提升觀眾對遊戲內容的理解度。",
        "優化音效配置，強化觀眾沉浸體驗。"
      ],
      link: "https://youtube.com/playlist?list=PL51-0S8ESXoojVfL2GAsy4Ic6Ty-1vbCl&si=A-reLoCxxiGLXkzM",
      videoId: "Ar40E3_sIz0"
    },
    {
      title: "老P的遊戲攻略",
      role: "影片製作技術人員",
      tools: ["Premiere Pro", "Photoshop"],
      highlights: [
        "後製剪輯與封面縮圖設計。",
        "展現對遊戲機制的深度理解，將複雜資訊「視覺化」。",
        "提升攻略影片的視覺層次與資訊傳達效率。"
      ],
      link: "https://youtube.com/playlist?list=PL51-0S8ESXoqvNsnprUiqShuOm1BONPWG&si=7WpudhHJqxrBzYCb",
      videoId: "Jc83fwetlkg"
    }
  ];

  const personalProject = {
    title: "個人遊戲精華：節奏蒙太奇",
    subtitle: "Gameplay Montage",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    description: "透過音樂視覺化技術，精準捕捉遊戲擊殺高光時刻，並與背景音樂重拍完美契合，營造極具張力的視覺沉沉感。",
    features: [
      "音樂視覺化：畫面與音效重擊完美同步",
      "進階轉場：流暢的動態感與打擊感",
      "節奏掌控：快慢動作交替引導視覺焦點"
    ],
    link: "https://youtube.com/playlist?list=PL51-0S8ESXooghil3CxEUgvVojmwS5uEO&si=dtJorKWIXotNw16S",
    videoId: "P2FZgZ1hvJ4"
  };

  const getEmbedUrl = (videoId) => {
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            謝嘉晉 Chia-Chin Hsieh
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-indigo-400 transition-colors">關於我</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">專業技能</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">商業實戰</a>
            <a href="#personal" className="hover:text-indigo-400 transition-colors">個人企劃</a>
          </div>
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20">
            聯繫我
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-6">
            <Award size={16} />
            <span>Adobe Certified Professional (ACP)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            謝嘉晉 <span className="text-slate-500">|</span> <span className="bg-gradient-to-r from-white via-indigo-200 to-slate-400 bg-clip-text text-transparent">多媒體影音創作者</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            「將創意技術化，用精準剪輯與視覺特效說好每一個故事。」
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center hover:bg-indigo-50 transition-all group text-center text-sm sm:text-base">
              查看作品集 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* 修正後的下載連結：使用 <a> 標籤確保下載功能正常 */}
            <a 
              href="/resume.pdf" 
              download 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold flex items-center justify-center hover:bg-slate-800 transition-all text-sm sm:text-base cursor-pointer"
            >
              <Download className="mr-2" size={20} /> 下載完整 PDF 履歷
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-slate-400">
            <div className="flex items-center space-x-2"><Mail size={18} /> <span>eshbecomeuwu@gmail.com</span></div>
            <div className="flex items-center space-x-2"><Phone size={18} /> <span>0963-314-881</span></div>
            <div className="flex items-center space-x-2"><MapPin size={18} /> <span>台灣, 新北市</span></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心專業技能</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">商業影音實戰</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {commercialProjects.map((project, index) => (
              <div key={index} className="flex flex-col bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 group">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <iframe 
                    className="w-full h-full"
                    src={getEmbedUrl(project.videoId)}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <div className="flex flex-nowrap items-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="whitespace-nowrap text-[10px] font-bold px-2 py-0.5 border border-slate-700 rounded text-slate-400">{tool}</span>
                    ))}
                    <span className="whitespace-nowrap px-3 py-1 bg-indigo-600 text-[10px] font-bold rounded-md uppercase tracking-wider">{project.role}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                        <ChevronRight size={14} className="mr-2 mt-1 text-indigo-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link">
                    觀看完整作品清單 <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Project - Rhythm Montage */}
      <section id="personal" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
                  <MonitorPlay size={18} />
                  <span>Personal Project</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {personalProject.title}<br/>
                  <span className="text-slate-500 text-2xl md:text-3xl font-medium">{personalProject.subtitle}</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {personalProject.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {personalProject.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-300 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700/50">
                      <Layers size={18} className="text-indigo-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href={personalProject.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-indigo-600/20 flex items-center">
                    觀看播放清單 <ExternalLink size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto min-h-[300px] md:min-h-[450px] bg-black order-1 lg:order-2">
                <iframe 
                  className="w-full h-full"
                  src={getEmbedUrl(personalProject.videoId)}
                  title={personalProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 italic text-center md:text-left mx-auto md:mx-0">Let's Create Together.</h2>
              <p className="text-slate-400 text-lg max-w-md mb-8 text-center md:text-left mx-auto md:mx-0">
                無論是高節奏的遊戲精華、專業的商業廣告，或是複雜的視覺特效需求，我都能提供高品質的影音解決方案。
              </p>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <a href="mailto:eshbecomeuwu@gmail.com" className="flex items-center space-x-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">eshbecomeuwu@gmail.com</span>
                </a>
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">0963-314-881</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">發送訊息</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="姓名" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                  <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                </div>
                <textarea placeholder="您的需求或想法..." rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"></textarea>
                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all">
                  送出訊息
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2024 Chia-Chin Hsieh. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;