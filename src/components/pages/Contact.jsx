import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MessageCircle, 
  Briefcase, 
  Heart, 
  Twitter,
  Youtube,
  Music,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceCategories = [
    {
      id: 'poetry',
      name: '詩作・歌詞提供',
      icon: Heart,
      description: 'オリジナル詩の制作、楽曲への歌詞提供',
      examples: ['詩集制作', '楽曲歌詞', 'イベント用詩作']
    },
    {
      id: 'voice',
      name: '声優・ナレーション',
      icon: MessageCircle,
      description: '声優、ナレーション、アテレコ',
      examples: ['ゲーム声優', 'CM ナレーション', '動画アテレコ']
    },
    {
      id: 'scenario',
      name: 'シナリオ・演出',
      icon: Briefcase,
      description: 'ゲームシナリオ、企画演出',
      examples: ['ゲームシナリオ', 'イベント演出', '企画立案']
    },
    {
      id: 'performance',
      name: 'パフォーマンス',
      icon: Music,
      description: 'モノマネ、歌唱、イベント出演',
      examples: ['イベント出演', 'モノマネショー', 'ワークショップ']
    }
  ];

  const socialContacts = [
    {
      name: 'X (Twitter)',
      handle: '@arai_chi2',
      url: 'https://x.com/arai_chi2',
      icon: Twitter,
      color: 'text-blue-400',
      description: '日常の活動や最新情報を発信'
    },
    {
      name: 'note',
      handle: 'azamaro',
      url: 'https://note.com/azamaro',
      icon: MessageCircle,
      color: 'text-green-500',
      description: '詩作品や創作日誌を公開'
    },
    {
      name: 'YouTube',
      handle: 'うたがわきしみ企画',
      url: 'https://www.youtube.com/channel/UCkHqKnKtAgXVf0T9hf0e4aw',
      icon: Youtube,
      color: 'text-red-500',
      description: 'パフォーマンス動画を投稿'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで実際のフォーム送信処理を行う
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold">お問い合わせありがとうございます</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            メッセージを受信いたしました。内容を確認の上、3営業日以内にご返信いたします。
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            新しいお問い合わせ
          </Button>
        </motion.div>
      </div>
    );
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            お仕事のご依頼、コラボレーション、ご質問など、お気軽にお問い合わせください。
            皆様からのメッセージをお待ちしております。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインフォーム */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2" size={24} />
                    お問い合わせフォーム
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="山田太郎"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        お問い合わせ種別
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">選択してください</option>
                        <option value="poetry">詩作・歌詞提供</option>
                        <option value="voice">声優・ナレーション</option>
                        <option value="scenario">シナリオ・演出</option>
                        <option value="performance">パフォーマンス</option>
                        <option value="collaboration">コラボレーション</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="お問い合わせの件名"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        メッセージ <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="お問い合わせ内容を詳しくお書きください"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      送信する
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* サイドバー */}
          <div className="space-y-8">
            {/* 対応可能業務 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>対応可能な業務</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {serviceCategories.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent size={20} className="text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {service.examples.map((example) => (
                                <Badge key={example} variant="outline" className="text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* SNS経由でのコンタクト */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>SNSでのコンタクト</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialContacts.map((contact) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.a
                        key={contact.name}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <IconComponent size={20} className={contact.color} />
                        <div className="space-y-1">
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {contact.handle}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {contact.description}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* 返信について */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className="text-primary" />
                    <h3 className="font-semibold">返信について</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      お問い合わせいただいた内容は、3営業日以内にご返信いたします。
                    </p>
                    <p>
                      お急ぎの場合は、SNSのダイレクトメッセージもご利用ください。
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Star size={16} />
                      <span className="font-medium">
                        ファンレターも大歓迎です！
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

