import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, RotateCcw, Volume2 } from 'lucide-react';

const Poetry = () => {
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [keyholeMode, setKeyholeMode] = useState(false);
  const [keyholePosition, setKeyholePosition] = useState({ x: 50, y: 50 });
  const [isReading, setIsReading] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const poemRef = useRef(null);

  const poems = [
    {
      id: 1,
      title: '木乃伊のうた',
      category: 'ホラー',
      date: '2025年5月17日',
      content: `紅椿を埋め尽くす黒いものと
打ちつけなしのコンクリートの隙で
片目のない子供の木乃伊を抱く女が

脚は
限りのプールに投げ込んだ
冬の日の火に似て点のように赤い
子供の縮れた頭髪を撫で上げた黒髪の
らびながら裂けていく

血圧を測り続ける
もう細すぎて見えない`,
      description: 'ホラー要素を含む幻想的な表現で愛と狂気の境界線を描く',
      keyholeEnabled: true
    },
    {
      id: 2,
      title: '牛乳パックの舌',
      category: 'シュール',
      date: '2025年3月',
      content: `朝の光が差し込む台所で
牛乳パックが静かに舌を出している
それは昨日の記憶のように白く
今日の不安のように冷たい

誰も気づかない小さな反乱
誰も聞かない小さな叫び
冷蔵庫の奥で密かに育つ
新しい生命の予感`,
      description: '日常の中の非日常を独特な比喩で表現',
      keyholeEnabled: true
    },
    {
      id: 3,
      title: '洗濯物の亡霊',
      category: 'メランコリック',
      date: '2024年12月',
      content: `風に揺れる白いシャツが
誰かの形を思い出そうとしている
もう着る人のいない服たちが
ベランダで静かに踊っている

記憶の重さに耐えかねて
ハンガーから落ちそうになりながら
それでも風を受け止めて
今日という日を生きている`,
      description: '記憶と現実の交錯を幻想的に描いた作品',
      keyholeEnabled: false
    }
  ];

  const categories = ['すべて', 'ホラー', 'シュール', 'メランコリック', 'SF'];
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const filteredPoems = selectedCategory === 'すべて' 
    ? poems 
    : poems.filter(poem => poem.category === selectedCategory);

  // 鍵穴リーディング機能
  const startKeyholeReading = (poem) => {
    if (!poem.keyholeEnabled) return;
    
    setSelectedPoem(poem);
    setKeyholeMode(true);
    setIsReading(true);
    setReadingProgress(0);
    setIsCompleted(false);
    setKeyholePosition({ x: 50, y: 20 });

    // 自動スクロール
    const duration = 15000; // 15秒
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setReadingProgress(progress);
      setKeyholePosition({
        x: 50 + Math.sin(progress * Math.PI * 4) * 10,
        y: 20 + progress * 60
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        completeReading();
      }
    };

    requestAnimationFrame(animate);
  };

  const completeReading = () => {
    setIsCompleted(true);
    setIsReading(false);
    
    // 完読エフェクト
    setTimeout(() => {
      setKeyholeMode(false);
    }, 2000);
  };

  const resetReading = () => {
    setKeyholeMode(false);
    setIsReading(false);
    setReadingProgress(0);
    setIsCompleted(false);
  };

  // マウス/タッチでの鍵穴操作
  const handlePointerMove = (e) => {
    if (!keyholeMode || !isReading || !poemRef.current) return;

    const rect = poemRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setKeyholePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">詩</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            言葉の魔法で紡がれる、うたがわきしみの詩の世界。シュールでホラーな要素を含みながらも、
            どこか温かみのある独特な表現で、読む人の心に新たな感覚を呼び起こします。
            鍵穴リーディング機能で、詩を読む体験そのものをアートとしてお楽しみください。
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

        {/* 詩のリスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoems.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{poem.category}</Badge>
                    <span className="text-sm text-muted-foreground">{poem.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {poem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {poem.description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setSelectedPoem(poem)}
                      className="flex-1"
                    >
                      <Eye size={16} className="mr-2" />
                      読む
                    </Button>
                    {poem.keyholeEnabled && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => startKeyholeReading(poem)}
                        className="flex-1"
                      >
                        <Volume2 size={16} className="mr-2" />
                        鍵穴で読む
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 詩の表示モーダル */}
        <AnimatePresence>
          {selectedPoem && !keyholeMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedPoem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPoem.title}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="secondary">{selectedPoem.category}</Badge>
                      <span className="text-sm text-muted-foreground">{selectedPoem.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedPoem(null)}>
                    <EyeOff size={20} />
                  </Button>
                </div>
                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
                    {selectedPoem.content}
                  </pre>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 鍵穴リーディングモード */}
        <AnimatePresence>
          {keyholeMode && selectedPoem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            >
              <div className="absolute top-4 left-4 z-10">
                <Button variant="ghost" size="icon" onClick={resetReading} className="text-white">
                  <RotateCcw size={20} />
                </Button>
              </div>

              <div className="absolute top-4 right-4 z-10 text-white text-sm">
                進行度: {Math.round(readingProgress * 100)}%
              </div>

              <div
                ref={poemRef}
                className="relative w-full h-full flex items-center justify-center p-8 cursor-none"
                onMouseMove={handlePointerMove}
                onTouchMove={(e) => handlePointerMove(e.touches[0])}
              >
                <div
                  className="absolute inset-0 bg-black text-white text-xl leading-relaxed p-8 font-serif"
                  style={{
                    maskImage: `radial-gradient(circle 80px at ${keyholePosition.x}% ${keyholePosition.y}%, transparent 0px, transparent 60px, black 80px)`,
                    WebkitMaskImage: `radial-gradient(circle 80px at ${keyholePosition.x}% ${keyholePosition.y}%, transparent 0px, transparent 60px, black 80px)`
                  }}
                >
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">{selectedPoem.title}</h2>
                    <pre className="whitespace-pre-wrap text-xl leading-relaxed">
                      {selectedPoem.content}
                    </pre>
                  </div>
                </div>

                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center"
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-6xl"
                      >
                        🔓
                      </motion.div>
                      <h3 className="text-2xl font-bold">読了完了！</h3>
                      <p>全文を表示します...</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Poetry;

