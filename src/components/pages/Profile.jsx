import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Briefcase, 
  Award, 
  Heart, 
  Lightbulb, 
  Target,
  Calendar,
  MapPin,
  Twitter,
  Youtube,
  MessageCircle,
  Music
} from 'lucide-react';

const Profile = () => {
  const skills = [
    { name: '詩作', level: 95, category: '創作' },
    { name: '声優・ナレーション', level: 90, category: 'パフォーマンス' },
    { name: 'ゲームシナリオ', level: 85, category: '制作' },
    { name: '演出・企画', level: 88, category: '制作' },
    { name: 'モノマネ・声真似', level: 92, category: 'パフォーマンス' },
    { name: 'ビジュアルアート', level: 80, category: '創作' },
    { name: 'アニメーション制作', level: 75, category: '制作' }
  ];

  const timeline = [
    {
      year: '2013',
      title: 'SNS活動開始',
      description: 'X（Twitter）での創作活動を本格化'
    },
    {
      year: '2015-2020',
      title: 'ゲーム業界での活動',
      description: 'ファイナルファンタジー関連作品（FF1○）などの制作に参加'
    },
    {
      year: '2022',
      title: 'グラフィック詩の開拓',
      description: '詩と視覚表現を融合した新しい表現形式を開始'
    },
    {
      year: '2023',
      title: 'YouTube活動本格化',
      description: 'パフォーマンス動画の投稿を積極的に展開'
    },
    {
      year: '2024-現在',
      title: '多角的表現活動',
      description: '詩作、パフォーマンス、ビジュアルアートを統合した活動'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'ゲーム制作実績',
      description: 'ファイナルファンタジー関連作品のシナリオ・演出を担当'
    },
    {
      icon: Lightbulb,
      title: 'グラフィック詩の創始',
      description: '詩と視覚表現を融合した革新的な表現形式を開拓'
    },
    {
      icon: Target,
      title: '多様なプラットフォーム展開',
      description: 'X、note、YouTube、TikTokなど複数媒体での表現活動'
    }
  ];

  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/arai_chi2',
      icon: Twitter,
      followers: '93.8K投稿',
      color: 'text-blue-400'
    },
    {
      name: 'note',
      url: 'https://note.com/azamaro',
      icon: MessageCircle,
      followers: '98フォロワー',
      color: 'text-green-500'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCkHqKnKtAgXVf0T9hf0e4aw',
      icon: Youtube,
      followers: '76登録者',
      color: 'text-red-500'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@azamaro_0317',
      icon: Music,
      followers: '動画投稿中',
      color: 'text-pink-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">プロフィール</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            表現者、詩人、元声優、ゲームシナリオライター、演出家として多岐にわたる創作活動を展開。
            一つのジャンルに収まらない自由な発想と確かな技術で、常に新しい表現の可能性を追求し続けています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインプロフィール */}
          <div className="lg:col-span-2 space-y-8">
            {/* 基本情報 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2" size={24} />
                    基本情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">うたがわきしみ</h3>
                        <p className="text-muted-foreground">Utagawa Kishimi</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">職業</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">詩人</Badge>
                          <Badge variant="secondary">表現者</Badge>
                          <Badge variant="secondary">元声優</Badge>
                          <Badge variant="secondary">シナリオライター</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <Calendar size={16} className="mr-2" />
                          活動開始
                        </h4>
                        <p className="text-muted-foreground">2013年5月</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <MapPin size={16} className="mr-2" />
                          活動拠点
                        </h4>
                        <p className="text-muted-foreground">オンライン中心</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 活動理念 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2" size={24} />
                    活動理念
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <blockquote className="text-lg italic text-center">
                      「非日常を呼吸すること」
                    </blockquote>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    日常の中に潜む不思議や美しさを独特な感性で表現し、見る人・聞く人に「クスクス・ザラザラ」した新しい感覚を提供することを目指しています。
                    一つの枠に収まらない自由な発想で、常に新しい表現の可能性を追求し続けています。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 専門分野とスキル */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2" size={24} />
                    専門分野とスキル
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* 主な実績 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2" size={24} />
                    主な実績
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <motion.div
                          key={achievement.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          className="text-center space-y-3"
                        >
                          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent size={24} className="text-primary" />
                          </div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* サイドバー */}
          <div className="space-y-8">
            {/* ソーシャルリンク */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>フォローする</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent size={20} className={link.color} />
                          <div>
                            <div className="font-medium">{link.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {link.followers}
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* 活動年表 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>活動年表</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="relative pl-6 border-l-2 border-primary/20 last:border-l-0"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                        <div className="space-y-1">
                          <div className="font-semibold text-primary">{item.year}</div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* お問い合わせCTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-semibold">お仕事のご依頼</h3>
                  <p className="text-sm text-muted-foreground">
                    詩作、声優、シナリオライティング、演出など、お気軽にご相談ください
                  </p>
                  <Button asChild className="w-full">
                    <a href="/contact">お問い合わせ</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

