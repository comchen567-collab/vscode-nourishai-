import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Zap, Activity, Watch, Scale, Stethoscope, CheckCircle2, ShoppingBag, ChevronRight, Flame, Camera, MessageCircle } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
  bgClass?: string;
}> = ({ title, desc, icon, className = "", bgClass = "bg-white" }) => (
  <div className={`p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 ${bgClass} ${className}`}>
    <div>
      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-nourish-600">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const ProductCard: React.FC<{
  name: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
  tag?: string;
}> = ({ name, desc, price, icon, tag }) => (
  <div className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="aspect-square bg-gray-50 flex items-center justify-center relative p-8 group-hover:bg-nourish-50 transition-colors duration-500">
       {tag && (
         <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
           {tag}
         </div>
       )}
       <div className="text-gray-800 group-hover:scale-110 transition-transform duration-500">
          {icon}
       </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <span className="font-semibold text-gray-900">{price}</span>
      </div>
      <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{desc}</p>
      <button className="w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-nourish-600 transition-colors flex items-center justify-center gap-2" onClick={() => alert("商城功能开发中")}>
        <ShoppingBag size={16} />
        立即购买
      </button>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="pt-16 w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center py-24 md:py-32 px-4">
        <div className="animate-fade-in max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nourish-50 border border-nourish-100 text-nourish-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            <span>✨ 全新发布 · New Launch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            精准营养，<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-nourish-600 to-teal-500">
              触手可及
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            NourishAI 利用先进的人工智能，为您提供个性化的饮食建议。
            告别“碳水焦虑”，拥抱数据驱动的健康生活。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://tzb.chenchaoran.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-200"
            >
              咨询AI健康助手
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-black px-8 py-4 font-medium transition-colors"
            >
              关于我们
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-nourish-100 to-blue-100 rounded-full blur-[100px] opacity-60 -z-10" />
      </section>

      {/* Dashboard Preview Section */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-gray-900">多维健康数据整合</h2>
             <p className="text-gray-500 mt-2">打通穿戴设备与医疗数据，全方位读懂您的身体</p>
          </div>

          <div className="relative rounded-[2.5rem] bg-gray-900 p-4 md:p-8 shadow-2xl overflow-hidden animate-slide-up">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 to-gray-950 -z-10" />
            <div className="relative bg-white rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center border border-gray-700/50">
                <div className="w-full h-full p-8 flex flex-col gap-6 bg-[#FAFAFA]">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">早安, XXX</h2>
                            <p className="text-gray-500 text-sm">今日健康概览 · 已同步多维数据</p>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-gray-600">设备实时连接中</span>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm flex-shrink-0">
                            <div className="p-2 bg-gray-50 rounded-lg text-blue-500"><Watch size={18}/></div>
                            <div>
                                <p className="text-xs text-gray-400">智能手表</p>
                                <p className="text-sm font-semibold text-gray-800">已同步睡眠/心率</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm flex-shrink-0">
                            <div className="p-2 bg-gray-50 rounded-lg text-purple-500"><Scale size={18}/></div>
                            <div>
                                <p className="text-xs text-gray-400">智能体脂秤</p>
                                <p className="text-sm font-semibold text-gray-800">体脂率 18.5%</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm flex-shrink-0">
                            <div className="p-2 bg-gray-50 rounded-lg text-red-500"><Stethoscope size={18}/></div>
                            <div>
                                <p className="text-xs text-gray-400">体检报告</p>
                                <p className="text-sm font-semibold text-gray-800">2024 年度已归档</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                             <h3 className="font-semibold mb-4 flex justify-between">
                                今日摄入 
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">自动记录</span>
                             </h3>
                             <div className="flex items-center gap-4">
                                <div className="w-24 h-24 rounded-full border-[6px] border-nourish-100 border-t-nourish-500 flex items-center justify-center text-nourish-700 font-bold text-xl relative">
                                    1200
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-gray-900">1200</span>
                                    <span className="text-gray-400 text-sm"> / 2000 kcal</span>
                                    <p className="text-xs text-gray-400 mt-1">碳水: 45% | 蛋白质: 30%</p>
                                </div>
                             </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-20 h-20 bg-nourish-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                             <h3 className="font-semibold mb-4 relative z-10">AI 膳食建议</h3>
                             <div className="flex gap-4 relative z-10">
                                <div className="bg-nourish-500 text-white p-2 rounded-lg h-fit shadow-md">
                                    <Zap size={20} fill="currentColor"/>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                        检测到您昨晚睡眠质量略低（深睡不足 1h），建议今日午餐补充富含镁的食物，如<span className="text-nourish-600 font-bold">菠菜</span>和<span className="text-nourish-600 font-bold">南瓜籽</span>。
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">基于 Oura Ring 数据分析</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-xs font-medium">
            * 界面仅供规划展示，实际数据整合功能需配合硬件使用
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择 NourishAI?</h2>
            <p className="text-xl text-gray-500">
              不仅仅是记录热量，更是您的全天候健康管理伙伴。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="大语言模型驱动" 
              desc="基于本地数据库，理解中文饮食文化，提供符合国人习惯的建议。"
              icon={<Zap size={24} />}
              className="md:col-span-2 bg-gray-50"
              bgClass="bg-gray-50"
            />
            <FeatureCard 
              title="精准个性化" 
              desc="根据您的年龄、职业、偏好，量身定制食谱。"
              icon={<Leaf size={24} />}
              className="md:row-span-2 bg-nourish-50 border-nourish-100"
              bgClass="bg-nourish-50"
            />
            <FeatureCard 
              title="数据安全" 
              desc="严格的隐私保护机制，您的健康数据只属于您。"
              icon={<ShieldCheck size={24} />}
            />
             <FeatureCard 
              title="健康追踪" 
              desc="与可穿戴设备数据同步（规划中），实时监控身体状态。"
              icon={<Activity size={24} />}
            />
            <FeatureCard 
              title="AI 识图辨餐" 
              desc="拍照即可识别食物热量与营养成分，自动记录摄入数据，让饮食管理更轻松。"
              icon={<Camera size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">活力社区，共同进步</h2>
            <p className="text-lg font-semibold text-nourish-600 mb-3 tracking-wide">
              我们搭建了专属的健康交流平台
            </p>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              在这里，您可以记录每一次改变，与志同道合的伙伴分享健康心得。
              从一个人坚持，到一群人同行。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <Flame size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">每日打卡</h3>
              <p className="text-gray-500 mb-6">连续记录饮食与运动，点亮成就勋章，让坚持变得更有趣。</p>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                 <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mb-2">
                    <span>本周坚持</span>
                    <span className="text-red-500">🔥 5天</span>
                 </div>
                 <div className="flex gap-1">
                    {[1,2,3,4,5,6,7].map((d) => (
                        <div key={d} className={`h-2 flex-1 rounded-full ${d <= 5 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
                    ))}
                 </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
               <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <Camera size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">食谱分享</h3>
              <p className="text-gray-500 mb-6">晒出您的减脂餐，获取 AI 营养点评，收获社区伙伴的点赞。</p>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                 <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80)'}}></div>
                 </div>
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">今日午餐：三文鱼...</p>
                    <p className="text-xs text-gray-400">刚刚发布</p>
                 </div>
                 <div className="text-xs font-bold text-gray-400">❤️ 24</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
               <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">经验交流</h3>
              <p className="text-gray-500 mb-6">无论是减脂瓶颈期还是增肌困惑，在这里都能找到答案。</p>
              <div className="space-y-2">
                 <div className="bg-white p-3 rounded-xl text-xs text-gray-600 shadow-sm border border-gray-100 truncate">
                    "怎么突破减脂平台期？求助..."
                 </div>
                 <div className="bg-white p-3 rounded-xl text-xs text-gray-600 shadow-sm border border-gray-100 truncate">
                    "分享一个低卡零食清单！"
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-24 bg-[#1D1D1F] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">国民健康，刻不容缓</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-bold text-nourish-500 mb-2">41%</span>
                    <p className="text-gray-400 font-medium">预计2030年中国成人超重比例</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-bold text-blue-500 mb-2">92亿</span>
                    <p className="text-gray-400 font-medium">2023年轻食市场规模</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-bold text-purple-500 mb-2">3.8亿</span>
                    <p className="text-gray-400 font-medium">受慢性病困扰人群</p>
                </div>
            </div>
            <div className="mt-16 text-sm text-gray-500">
                数据来源：《2025中国食品消费趋势白皮书》及国家卫健委报告
            </div>
        </div>
      </section>

      {/* Wearable Shop Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">购买健康穿戴设备</h2>
               <p className="text-gray-500">
                 工欲善其事，必先利其器。NourishAI 精选智能硬件，为您的精准营养方案提供数据基石。
               </p>
             </div>
             <a href="#" className="hidden md:flex items-center text-nourish-600 font-semibold hover:text-nourish-700 transition-colors">
               查看全部硬件 <ChevronRight size={20} />
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              name="Nourish Ring"
              desc="全天候监测睡眠、心率与体温。无感佩戴，精准捕捉身体信号。"
              price="¥ 1,299"
              icon={<Watch size={64} className="text-gray-800" strokeWidth={1} />}
              tag="热门推荐"
            />
            <ProductCard 
              name="Smart Scale Pro"
              desc="不仅仅是体重。16项身体数据分析，直接同步至 NourishAI 仪表盘。"
              price="¥ 299"
              icon={<Scale size={64} className="text-gray-800" strokeWidth={1} />}
            />
             <ProductCard 
              name="GlucoSense 贴片"
              desc="24小时连续血糖监测(CGM)。无需扎针，实时了解食物对血糖的影响。"
              price="¥ 459 / 月"
              icon={<Activity size={64} className="text-gray-800" strokeWidth={1} />}
              tag="硬核科技"
            />
          </div>
           <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-nourish-600 font-semibold hover:text-nourish-700 transition-colors">
               查看全部硬件 <ChevronRight size={20} />
             </a>
           </div>
        </div>
      </section>
    </div>
  );
};