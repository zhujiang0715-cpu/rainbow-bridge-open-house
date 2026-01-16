import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Teacher Julie Profile Component
 * Design: Warm Inclusive Modern Education Style
 * Highlights Julie Zhu's extensive credentials and experience
 */

export default function TeacherProfile() {
  const credentials = [
    {
      category: "教育背景 Education",
      items: [
        "中传媒大学 电视制作",
        "人大 MBA 在职研究生班",
        "美国 BYU 杨百翰大学与中国教育部合作 [中国高级艺术管理研修班]",
      ],
    },
    {
      category: "专业经历 Professional Experience",
      items: [
        "前央视四套 CCTV 国际频道 [中国文艺] 执行导演",
        "CCTV 十套、十二套 专题纪录片导演",
        "特别节目策划人",
        "中广协会海外纪录片协会 独立制片人",
      ],
    },
    {
      category: "行业资深 Industry Expertise",
      items: [
        "央广传媒业界 31 年资深专业导师",
        "有声语言训练专家",
        "主导近百场少儿选拔赛事、晚会、人物秀",
        "上百场大型活动的策划与主持",
      ],
    },
    {
      category: "北美创新教学 North America Innovation",
      items: [
        "北美有声语言表达坊 创办人",
        "有声语言训练专家 • 声宴品牌创办人",
        "旧金山硅谷 「国风颂雅」俱乐部创办人",
        "深耕海外十年，研究中美发音类比",
        "创作出一套适合 ABC 孩子的特殊教学发音体系",
        "丰富有趣的教学经验，深受家长和孩子喜爱",
      ],
    },
  ];

  const strengths = [
    {
      icon: "🎯",
      title: "专业朗诵与舞台表达训练",
      description:
        "擅长节奏、发声、口型、呼吸控制训练，帮助孩子建立标准发音和自然表达节奏。",
    },
    {
      icon: "🎭",
      title: "戏剧教学融入中文学习",
      description:
        "通过角色扮演、人物情境、小剧场活动，让孩子更大胆、自信地开口说中文。",
    },
    {
      icon: "⭐",
      title: "高度激发孩子的自信",
      description:
        "营造安全有趣的课堂氛围，帮助害羞的孩子逐渐敢于表达、敢于上台。",
    },
    {
      icon: "✨",
      title: "优秀的课堂管理与参与感",
      description:
        "课程互动度高，每个孩子都有机会参与、表达、进步。在她的课堂里孩子们真的会\"发光\"。",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Main Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Photo */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/julie-zhu.jpg"
              alt="Julie Zhu Teacher"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Profile Info */}
        <div className="space-y-6">
          <div>
            <h2
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Julie Zhu 老师
            </h2>
            <p className="text-lg text-primary font-semibold">
              有声语言表达与戏剧教学专家
            </p>
            <p className="text-muted-foreground mt-2">
              Voice Expression & Drama Teaching Specialist
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            Julie
            老师拥有深厚的中文语言教学背景与多年舞台表演指导经验，专注于提升儿童的语言表达力、自信心与舞台表现力。在央视工作超过
            30 年，具有丰富的专业经验和创新教学理念。
          </p>

          <div className="space-y-2">
            <p className="font-semibold text-sm text-muted-foreground">
              核心优势 Core Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "CCTV 资深导演",
                "有声语言专家",
                "戏剧教学创新者",
                "ABC 教学体系创办人",
              ].map((tag, i) => (
                <Badge key={i} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="space-y-6">
        <h3
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          专业资历 Professional Credentials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((credentialGroup, idx) => (
            <Card
              key={idx}
              className="p-6 bg-white border-l-4 border-primary hover:shadow-lg transition-all duration-300"
            >
              <h4 className="font-bold text-lg mb-4 text-primary">
                {credentialGroup.category}
              </h4>
              <ul className="space-y-2">
                {credentialGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Teaching Strengths */}
      <div className="space-y-6">
        <h3
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          教学特色 Teaching Strengths
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-to-br from-white to-primary/5 border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{strength.icon}</div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-0">
        <h3 className="font-bold text-lg mb-4 text-primary">
          🌟 为什么选择 Julie 老师？
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📺</span>
            <div>
              <p className="font-semibold">央视资深导演</p>
              <p className="text-sm text-muted-foreground">
                31 年央广传媒业界经验
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-semibold">北美教学创新</p>
              <p className="text-sm text-muted-foreground">
                深耕海外十年，创新 ABC 教学体系
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">👨‍👧‍👦</span>
            <div>
              <p className="font-semibold">深受喜爱</p>
              <p className="text-sm text-muted-foreground">
                家长和孩子们的首选教师
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <p className="font-semibold">让孩子发光</p>
              <p className="text-sm text-muted-foreground">
                在安全有趣的环境中建立自信
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
