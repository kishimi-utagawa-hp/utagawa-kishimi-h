import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn, Calendar, Tag } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedWork, setSelectedWork] = useState(null);

  const categories = ['すべて', 'グラフィック詩', '絵画', '写真'];

  const works = [
    {
      id: 1,
      title: '夜の詩人',
      category: 'グラフィック詩',
      date: '2024年12月',
      description: '暗闇の中で言葉を紡ぐ詩人の姿を幻想的に表現',
      image: '/api/placeholder/400/600',
      tags: ['夜', '詩', '幻想']
    },
    {
      id: 2,
      title: '記憶の断片',
      category: 'グラフィック詩',
      date: '2024年11月',
      description: '過去の記憶が散らばる様子をビジュアル化',
      image: '/api/placeholder/300/400',
      tags: ['記憶', '時間', '断片']
    },
    {
      id: 3,
      title: '都市の呼吸',
      category: '写真',
      date: '2024年10月',
      description: '夜の街角で捉えた都市の生命力',
      image: '/api/placeholder/500/300',
      tags: ['都市', '夜景', '生命']
    },
    {
      id: 4,
      title: '内なる宇宙',
      category: '絵画',
      date: '2024年9月',
      description: '心の奥底に広がる無限の世界',
      image: '/api/placeholder/400/500',
      tags: ['宇宙', '内面', '無限']
    },
    {
      id: 5,
      title: '言葉の森',
      category: 'グラフィック詩',
      date: '2024年8月',
      description: '文字が木々のように生い茂る幻想的な森',
      image: '/api/placeholder/350/450',
      tags: ['言葉', '森', '成長']
    },
    {
      id: 6,
      title: '静寂の瞬間',
      category: '写真',
      date: '2024年7月',
      description: '朝霧の中に浮かぶ一本の木',
      image: '/api/placeholder/400/300',
      tags: ['静寂', '朝', '自然']
    },
    {
      id: 7,
      title: '感情のスペクトラム',
      category: '絵画',
      date: '2024年6月',
      description: '様々な感情を色彩で表現した抽象画',
      image: '/api/placeholder/450/350',
      tags: ['感情', '色彩', '抽象']
    },
    {
      id: 8,
      title: '時の流れ',
      category: 'グラフィック詩',
      date: '2024年5月',
      description: '時間の経過を詩と映像で表現',
      image: '/api/placeholder/300/500',
      tags: ['時間', '流れ', '変化']
    }
  ];

  const filteredWorks = selectedCategory === 'すべて' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ギャラリー</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            うたがわきしみの視覚的表現の世界。グラフィック詩、絵画、写真など、
            言葉だけでは表現しきれない世界観を視覚的に表現した作品群をお楽しみください。
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

        {/* 作品グリッド（マソンリーレイアウト） */}
        <div className="masonry-grid">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="masonry-item"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div 
                  className="relative overflow-hidden"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <ZoomIn size={24} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">画像プレビュー</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="bg-white/90 rounded-full p-3"
                    >
                      <ZoomIn size={20} className="text-primary" />
                    </motion.div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {work.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar size={12} className="mr-1" />
                      {work.date}
                    </div>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 作品詳細モーダル */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 画像部分 */}
                <div className="md:w-2/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <ZoomIn size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{selectedWork.title}</h3>
                      <p className="text-muted-foreground">作品画像</p>
                    </div>
                  </div>
                </div>

                {/* 詳細情報部分 */}
                <div className="md:w-1/3 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="secondary">{selectedWork.category}</Badge>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedWork(null)}>
                      <X size={20} />
                    </Button>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedWork.title}</h2>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar size={14} className="mr-2" />
                        {selectedWork.date}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">作品について</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedWork.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">タグ</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedWork.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-sm bg-muted px-3 py-1 rounded-full"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      この作品についてのお問い合わせは<br />
                      コンタクトページからお気軽にどうぞ
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 bg-muted/30 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">作品制作のご依頼</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            グラフィック詩、イラスト、写真撮影など、ビジュアル表現に関するご依頼を承っております。
            お気軽にお問い合わせください。
          </p>
          <Button asChild size="lg">
            <a href="/contact">お問い合わせ</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

