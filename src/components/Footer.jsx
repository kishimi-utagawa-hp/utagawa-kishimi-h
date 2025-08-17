import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/arai_chi2',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCkHqKnKtAgXVf0T9hf0e4aw',
      icon: Youtube,
      color: 'hover:text-red-500'
    },
    {
      name: 'note',
      url: 'https://note.com/azamaro',
      icon: MessageCircle,
      color: 'hover:text-green-500'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@azamaro_0317',
      icon: Music,
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド情報 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              うたがわきしみ
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              詩人・表現者・クリエイター<br />
              言葉と声で紡ぐ、新しい表現の世界
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">サイトマップ</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                ホーム
              </a>
              <a href="/poetry" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                詩
              </a>
              <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                ギャラリー
              </a>
              <a href="/performance" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                パフォーマンス
              </a>
              <a href="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                プロフィール
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                お問い合わせ
              </a>
            </nav>
          </div>

          {/* ソーシャルリンク */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">フォローする</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-muted-foreground ${link.color} transition-colors`}
                    title={link.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              最新の作品や活動情報をお届けします
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 うたがわきしみ. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            非日常を呼吸し、新しい表現の可能性を追求し続けます
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

