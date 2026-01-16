import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Sparkles, Zap, Users, Award } from "lucide-react";
import { useState } from "react";
import TeacherProfile from "@/components/TeacherProfile";

/**
 * Rainbow Bridge Academy Open House Landing Page
 * Design: Warm Inclusive Modern Education Style
 * - Warm gold primary color representing warmth and educational light
 * - Soft blue secondary for trust and professionalism
 * - Cream white background for warmth
 * - Playfair Display for elegant headings, Noto Sans SC for body text
 * - Non-symmetric layout with floating cards and subtle animations
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">RB</span>
            </div>
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Rainbow Bridge
            </span>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-sm">
                    🎉 欢迎来到我们的开放日
                  </span>
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Rainbow Bridge Academy
                  <span className="block text-primary">开放日活动</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  欢迎社区家庭参加我们的开放日！孩子们将亲身体验多种趣味活动，包括创意手工、充气城堡、STEM
                  试听课程，以及由 Julie 老师带来的特色中文朗诵与戏剧互动体验。
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">时间 Time</p>
                    <p className="text-muted-foreground">
                      本周六 Saturday · 1:30 PM – 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">地址 Address</p>
                    <p className="text-muted-foreground">
                      3080 La Selva St, 2nd Floor, San Mateo, CA 94403
                    </p>
                  </div>
                </div>
              </div>

    
            </div>

            {/* Right image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/images/hero-banner.jpg"
                alt="Warm educational classroom scene"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>



      {/* Language Sensitivity Period Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              🧠 语言敏感期的黄金期
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              科学证明，0-6 岁是语言学习的黄金期
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 bg-white border-l-4 border-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">✨</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">黄金期</h3>
                    <p className="text-lg font-semibold mb-2">0-6 岁</p>
                    <p className="text-muted-foreground">
                      大脑语言中枢发育最快，学习效率最高。这个时期学习语言，就像种子在最肥沃的土壤中生长。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-accent hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🌙</div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-2">白银期</h3>
                    <p className="text-lg font-semibold mb-2">7-12 岁</p>
                    <p className="text-muted-foreground">
                      虽然学习能力仍然很强，但已不如黄金期。抓住这个时期，继续深化语言能力。
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-0">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">📚 正确的学习顺序很关键</h3>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👂</span>
                  <span className="text-lg"><strong>听</strong> → 建立语音基础</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💬</span>
                  <span className="text-lg"><strong>说</strong> → 开口表达自信</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📖</span>
                  <span className="text-lg"><strong>读</strong> → 认识文字符号</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✍️</span>
                  <span className="text-lg"><strong>写</strong> → 掌握书写技能</span>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  💡 <strong>学习的道路上没有捷径可走，不走弯路就是走捷径。</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Highlights */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              活动亮点 Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  emoji: "🎨",
                  title: "创意手工 Creative Art Workshop",
                  description: "提升孩子的想象力与精细动作能力",
                },
                {
                  emoji: "🏰",
                  title: "充气城堡 Bounce House Fun",
                  description: "安全又好玩的体能活动，释放儿童活力",
                },
                {
                  emoji: "🔬",
                  title: "STEM 课程试听 STEM Trial Class",
                  description:
                    "动手实验、逻辑训练、工程探索，激发好奇心",
                },
                {
                  emoji: "🎭",
                  title: "中文朗诵 + 戏剧体验 Chinese Recital & Drama",
                  description:
                    "2:30 PM 开始，由 Julie 老师带领。在游戏和表演中学习标准发音、建立自信、开口说中文。这是黄金期不能错过的语言启蒙体验！",
                },
              ].map((activity, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-white border-l-4 border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{activity.emoji}</div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Card>
              ))}
            </div>

            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/images/activities-collage.jpg"
                alt="Educational activities collage"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Highlight Box for Drama Class */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-white">
            <div className="flex items-start gap-4">
              <div className="text-5xl">🎪</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">中文朗诵 + 戏剧课 — 最受欢迎的环节</h3>
                <p className="text-lg mb-4">
                  就算对课程不感兴趣，也一定要来参加这个环节！
                </p>
                <div className="space-y-2 text-sm">
                  <p>✨ <strong>好玩</strong> — 在游戏中学习，在舞台上闪闪发光</p>
                  <p>🗣️ <strong>有效</strong> — 抓住黄金期，标准发音、自信表达</p>
                  <p>🎬 <strong>有趣</strong> — Julie 老师的专业指导，让每个孩子都敢于表现</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Julie Section - Detailed Profile */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <TeacherProfile />
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-white/50 py-8 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Rainbow Bridge Academy</h3>
              <p className="text-sm text-muted-foreground">
                致力于培养孩子的语言表达、自信心和学术能力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系信息</h4>
              <p className="text-sm text-muted-foreground">
                📍 3080 La Selva St, 2nd Floor, San Mateo, CA 94403
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">开放日时间</h4>
              <p className="text-sm text-muted-foreground">
                本周六 Saturday · 1:30 PM – 5:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Rainbow Bridge Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        :root {
          --font-display: 'Playfair Display', serif;
          --font-sans: 'Noto Sans SC', sans-serif;
        }

        body {
          font-family: var(--font-sans);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-display);
        }
      `}</style>
    </div>
  );
}
