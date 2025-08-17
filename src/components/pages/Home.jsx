import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Mic, Palette, Feather } from 'lucide-react';

const Home = () => {
  const featuredWorks = [
    {
      type: '詩',
      title: '木乃伊のうた',
      description: 'ホラー要素を含む幻想的な表現で愛と狂気の境界線を描く',
      link: '/poetry',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'パフォーマンス',
      title: '藤岡弘、モノマネ',
      description: '「弘はやっぱり山が好き」シリーズで独特な世界観を展開',
      link: '/performance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'ビジュアル',
      title: 'グラフィック詩',
      description: '詩の内容と視覚的デザインを融合させた革新的な表現',
      link: '/gallery',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const activities = [
    {
      icon: Feather,
      title: '詩作',
      description: 'シュール、ホラー、SF要素を織り交ぜた独特な世界観で、日常の中に潜む非日常を表現'
    },
    {
      icon: Mic,
      title: 'パフォーマンス',
      description: 'モノマネ、声真似、歌唱など、声を使った多彩な表現で聴く人を魅了'
    },
    {
      icon: Palette,
      title: 'ビジュアルアート',
      description: 'グラフィック詩、絵画、写真など、視覚的表現で新しいアートの可能性を追求'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden hero-gradient text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                うたがわきしみ
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">
                詩人・表現者・クリエイター
              </p>
              <p className="text-lg md:text-xl text-white/80">
                言葉と声で紡ぐ、新しい表現の世界
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/poetry">作品を見る</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/profile">プロフィール</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={40} />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={60} />
          </motion.div>
        </div>
      </section>

      {/* 特色紹介セクション */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              多彩な表現活動
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              詩作からモノマネ、声優、ゲーム制作まで、ジャンルを超えた表現活動を展開。
              一つの枠に収まらない創造性で、常に新しい表現の可能性を追求しています。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{activity.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 最新作品ハイライト */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              注目の作品
            </h2>
            <p className="text-lg text-muted-foreground">
              最新の創作活動から厳選した作品をご紹介
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="floating-card"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-2 bg-gradient-to-r ${work.color}`} />
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {work.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {work.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={work.link}>詳しく見る</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              新しい表現の世界へ
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              非日常を呼吸し、クスクス・ザラザラした感覚を大切にした独特な世界観で、
              見る人・聞く人を新たな表現の宇宙へと誘います。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">お問い合わせ</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/performance">パフォーマンスを見る</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

