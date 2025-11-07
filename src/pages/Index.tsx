import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('home');
  const [surveyStep, setSurveyStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<Record<number, string>>({});

  const slangExamples = [
    { term: 'Краш', meaning: 'Человек, который очень нравится', usage: 'Мой краш наконец-то мне написал!' },
    { term: 'Флексить', meaning: 'Хвастаться, выставлять напоказ', usage: 'Он постоянно флексит своими кроссовками' },
    { term: 'Рофл', meaning: 'Что-то смешное, шутка', usage: 'Это просто рофл, не принимай всерьез' },
    { term: 'Кринж', meaning: 'Неловкость, стыд за кого-то', usage: 'Какой кринж, не могу на это смотреть' },
  ];

  const surveyQuestions = [
    {
      question: 'Как часто вы используете интернет-сленг в повседневной жизни?',
      options: ['Постоянно', 'Часто', 'Иногда', 'Редко', 'Никогда']
    },
    {
      question: 'Считаете ли вы, что интернет-сленг обогащает русский язык?',
      options: ['Полностью согласен', 'Скорее согласен', 'Нейтрально', 'Скорее не согласен', 'Полностью не согласен']
    },
    {
      question: 'В каких ситуациях вы чаще всего используете сленг?',
      options: ['Общение с друзьями', 'Соцсети', 'Учеба', 'Везде одинаково', 'Не использую']
    },
    {
      question: 'Как сленг влияет на ваше понимание традиционного русского языка?',
      options: ['Улучшает понимание', 'Не влияет', 'Затрудняет понимание', 'Создает языковой барьер', 'Затрудняюсь ответить']
    },
    {
      question: 'Используют ли ваши родители интернет-сленг в общении с вами?',
      options: ['Да, активно', 'Иногда пытаются', 'Редко', 'Никогда', 'Не замечал']
    },
    {
      question: 'Считаете ли вы, что сленг помогает молодежи лучше выражать эмоции?',
      options: ['Да, определенно', 'Скорее да', 'Не уверен', 'Скорее нет', 'Нет, мешает']
    },
    {
      question: 'Как вы думаете, сленг объединяет или разделяет поколения?',
      options: ['Объединяет', 'Скорее объединяет', 'Нейтрально', 'Скорее разделяет', 'Разделяет']
    },
    {
      question: 'Влияет ли интернет-сленг на вашу успеваемость и письменную речь?',
      options: ['Положительно влияет', 'Не влияет', 'Иногда мешает', 'Сильно мешает', 'Затрудняюсь ответить']
    }
  ];

  const handleSurveyAnswer = (value: string) => {
    setSurveyAnswers({ ...surveyAnswers, [surveyStep]: value });
  };

  const nextQuestion = () => {
    if (surveyStep < surveyQuestions.length - 1) {
      setSurveyStep(surveyStep + 1);
    } else {
      toast({
        title: 'Спасибо за участие! 🎉',
        description: 'Ваши ответы помогают нам в исследовании',
      });
      setSurveyStep(0);
      setSurveyAnswers({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СленгЛаб
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveTab('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('research')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Исследования
              </button>
              <button 
                onClick={() => setActiveTab('stats')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Статистика
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="space-y-12 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <div className="inline-block">
                <div className="text-6xl mb-4">💬</div>
              </div>
              <h2 className="text-5xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Влияние интернет-сленга на молодежь
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Исследовательская платформа для изучения современной молодежной речи и цифровой коммуникации
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveTab('research')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Начать исследование
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab('stats')} className="gap-2">
                  <Icon name="BarChart3" size={20} />
                  Посмотреть статистику
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Опросы</CardTitle>
                  <CardDescription>Делитесь своим мнением о сленге</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Участвуйте в исследованиях и помогайте понять, как интернет влияет на язык молодежи
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="TrendingUp" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Аналитика</CardTitle>
                  <CardDescription>Данные в реальном времени</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Изучайте тренды использования сленга и смотрите актуальную статистику
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="BookMarked" size={24} className="text-primary" />
                  </div>
                  <CardTitle>База знаний</CardTitle>
                  <CardDescription>Словарь современного сленга</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Узнайте значение популярных сленговых выражений и их происхождение
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Пройдите опрос 📊</CardTitle>
                  <CardDescription>Ваше мнение важно для исследования</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Вопрос {surveyStep + 1} из {surveyQuestions.length}</span>
                      <span className="text-muted-foreground">{Math.round(((surveyStep + 1) / surveyQuestions.length) * 100)}%</span>
                    </div>
                    <Progress value={((surveyStep + 1) / surveyQuestions.length) * 100} className="h-2" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{surveyQuestions[surveyStep].question}</h3>
                    <RadioGroup value={surveyAnswers[surveyStep] || ''} onValueChange={handleSurveyAnswer}>
                      {surveyQuestions[surveyStep].options.map((option, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/50 transition-colors">
                          <RadioGroupItem value={option} id={`option-${idx}`} />
                          <Label htmlFor={`option-${idx}`} className="cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button 
                    onClick={nextQuestion} 
                    disabled={!surveyAnswers[surveyStep]}
                    className="w-full"
                    size="lg"
                  >
                    {surveyStep < surveyQuestions.length - 1 ? 'Следующий вопрос' : 'Завершить опрос'}
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="research" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold font-heading">Словарь интернет-сленга</h2>
              <p className="text-lg text-muted-foreground">Популярные выражения и их значения</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {slangExamples.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl text-primary">{item.term}</CardTitle>
                        <CardDescription className="text-base mt-2">{item.meaning}</CardDescription>
                      </div>
                      <div className="text-3xl">
                        {idx === 0 && '💖'}
                        {idx === 1 && '✨'}
                        {idx === 2 && '😂'}
                        {idx === 3 && '😬'}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Пример использования:</p>
                      <p className="text-sm italic">"{item.usage}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">О проекте</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Интернет-сленг стал неотъемлемой частью коммуникации современной молодежи. Наше исследование направлено на изучение того, как цифровая культура влияет на развитие языка и общение между людьми.
                </p>
                <p>
                  Мы анализируем частоту использования сленговых выражений, их происхождение и влияние на традиционный русский язык. Ваше участие в опросах помогает нам собирать достоверные данные.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold font-heading">Статистика исследования</h2>
              <p className="text-lg text-muted-foreground">Актуальные данные по использованию интернет-сленга</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Участников опросов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary">1,247</div>
                  <p className="text-sm text-muted-foreground mt-2">+18% за месяц</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Изученных слов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-secondary">342</div>
                  <p className="text-sm text-muted-foreground mt-2">В базе данных</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary">89%</div>
                  <p className="text-sm text-muted-foreground mt-2">Молодежь до 25 лет</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Частота использования сленга по возрастам</CardTitle>
                <CardDescription>Распределение использования интернет-сленга</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">14-18 лет</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">19-25 лет</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">26-35 лет</span>
                    <span className="text-muted-foreground">54%</span>
                  </div>
                  <Progress value={54} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">36+ лет</span>
                    <span className="text-muted-foreground">23%</span>
                  </div>
                  <Progress value={23} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Популярные категории сленга</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">💬</div>
                      <span className="font-medium">Общение</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">😂</div>
                      <span className="font-medium">Эмоции</span>
                    </div>
                    <span className="text-2xl font-bold text-secondary">32%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">🎮</div>
                      <span className="font-medium">Игры</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">23%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Источники сленга</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>TikTok</span>
                      <span className="font-bold">38%</span>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>YouTube</span>
                      <span className="font-bold">29%</span>
                    </div>
                    <Progress value={29} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Telegram</span>
                      <span className="font-bold">21%</span>
                    </div>
                    <Progress value={21} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Другие</span>
                      <span className="font-bold">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-20 py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 СленгЛаб. Исследовательский проект о влиянии интернет-культуры на язык молодежи</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;