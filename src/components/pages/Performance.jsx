import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ExternalLink, Calendar, Clock, Users } from 'lucide-react';

const Performance = () => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['すべて', 'モノマネ', '歌ってみた', 'コント', 'アテレコ'];

  const performances = [
    {
      id: 1,
      title: '弘はやっぱり山が好き（藤岡弘、モノマネ）',
      category: 'モノマネ',
      date: '2023年4月',
      duration: '2:30',
      views: '985',
      description: '藤岡弘、さんの独特な話し方と世界観を再現。山での生活哲学を語る名作モノマネ',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example1',
      tags: ['藤岡弘、', '山', 'サバイバル']
    },
    {
      id: 2,
      title: 'ロードス島戦記プロローグ：ナレーション声真似（永井一郎さん風）',
      category: 'モノマネ',
      date: '2023年3月',
      duration: '5:37',
      views: '1.2K',
      description: '永井一郎さんの重厚なナレーションを再現。ファンタジーの世界観を声で表現',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example2',
      tags: ['永井一郎', 'ナレーション', 'ファンタジー']
    },
    {
      id: 3,
      title: '強風オールバック - Yukopi（藤岡弘、声まね）',
      category: '歌ってみた',
      date: '2023年2月',
      duration: '3:45',
      views: '448',
      description: 'ボカロ楽曲を藤岡弘、さんの声で歌う斬新なカバー。独特なリズム感が魅力',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example3',
      tags: ['ボカロ', '藤岡弘、', 'カバー']
    },
    {
      id: 4,
      title: 'からくりピエロ - Piano ver.',
      category: '歌ってみた',
      date: '2023年1月',
      duration: '4:12',
      views: '320',
      description: '40mPの名曲をピアノバージョンで。夜中にこっそり聴きたくなる切ない歌声',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example4',
      tags: ['40mP', 'ピアノ', '切ない']
    },
    {
      id: 5,
      title: 'ハンバーグのうた（オリジナルコント）',
      category: 'コント',
      date: '2022年12月',
      duration: '5:37',
      views: '73',
      description: '作・演出・声優・画伯・アニメーション・制作すべてを一人で手がけたオリジナル作品',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example5',
      tags: ['オリジナル', 'アニメーション', 'ハンバーグ']
    },
    {
      id: 6,
      title: '柴犬vsザリガニ（アテレコ）',
      category: 'アテレコ',
      date: '2022年11月',
      duration: '0:45',
      views: '283',
      description: '動物の動画に独自の解釈でアテレコ。柴犬とザリガニの心の声を表現',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example6',
      tags: ['柴犬', 'ザリガニ', '動物']
    },
    {
      id: 7,
      title: 'Fate：言峰綺礼（中田譲治さん風）',
      category: 'モノマネ',
      date: '2022年10月',
      duration: '2:18',
      views: '298',
      description: '中田譲治さんの重厚で威厳のある声を再現。アニメキャラクターの名セリフ',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example7',
      tags: ['中田譲治', 'Fate', 'アニメ']
    },
    {
      id: 8,
      title: 'さくら（独唱）- 森山直太朗 covered',
      category: '歌ってみた',
      date: '2022年9月',
      duration: '6:15',
      views: '156',
      description: '元声優が直太朗軍団のオーディションに落ちたデモテープを公開。心に響く歌声',
      thumbnail: '/api/placeholder/400/225',
      url: 'https://www.youtube.com/watch?v=example8',
      tags: ['森山直太朗', 'さくら', 'デモテープ']
    }
  ];

  const filteredPerformances = selectedCategory === 'すべて' 
    ? performances 
    : performances.filter(performance => performance.category === selectedCategory);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">パフォーマンス</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            声の表現者としてのうたがわきしみの世界。モノマネ、声真似、歌唱、朗読など、
            声を使った多彩なパフォーマンスをお楽しみください。元声優としての確かな技術と、
            独特なセンスが融合した唯一無二の表現をご覧ください。
          </p>
        </motion.div>

        {/* カテゴリフィルター */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* パフォーマンス一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerformances.map((performance, index) => (
            <motion.div
              key={performance.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* サムネイル */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Play size={24} className="text-primary ml-1" />
                      </div>
                      <p className="text-sm text-muted-foreground">動画サムネイル</p>
                    </div>
                  </div>
                  
                  {/* 再生時間 */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {performance.duration}
                  </div>
                  
                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="bg-white/90 rounded-full p-4"
                    >
                      <Play size={24} className="text-primary ml-1" />
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {performance.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users size={12} className="mr-1" />
                      {performance.views}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {performance.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {performance.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {performance.duration}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {performance.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {performance.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => window.open(performance.url, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    YouTubeで見る
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 統計情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">93</div>
            <div className="text-sm text-muted-foreground">総動画数</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">76</div>
            <div className="text-sm text-muted-foreground">チャンネル登録者</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">パフォーマンス種類</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">2013</div>
            <div className="text-sm text-muted-foreground">活動開始年</div>
          </Card>
        </motion.div>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">パフォーマンスのご依頼</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            声優、ナレーション、モノマネ、歌唱など、声を使ったパフォーマンスのご依頼を承っております。
            イベント出演、楽曲制作、ワークショップなど、お気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">お問い合わせ</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.youtube.com/channel/UCkHqKnKtAgXVf0T9hf0e4aw" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                YouTubeチャンネル
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Performance;

