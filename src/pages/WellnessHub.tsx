import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Heart, 
  Leaf, 
  Moon, 
  Zap,
  Target,
  Trophy,
  Calendar,
  Clock,
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  Apple,
  Dumbbell
} from 'lucide-react';

const WellnessHub = () => {
  const todayStats = {
    steps: { current: 8247, target: 10000 },
    water: { current: 6, target: 8 },
    sleep: { current: 7.5, target: 8 },
    calories: { current: 1850, target: 2100 }
  };

  const weeklyGoals = [
    { name: 'Daily Steps', progress: 78, target: '10,000 steps/day', icon: Activity },
    { name: 'Water Intake', progress: 85, target: '8 glasses/day', icon: Leaf },
    { name: 'Sleep Quality', progress: 92, target: '8 hours/night', icon: Moon },
    { name: 'Active Minutes', progress: 65, target: '30 min/day', icon: Heart }
  ];

  const workoutPlans = [
    {
      title: 'Morning Yoga',
      duration: '15 min',
      difficulty: 'Beginner',
      calories: '45 cal',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'HIIT Cardio',
      duration: '20 min',
      difficulty: 'Intermediate',
      calories: '180 cal',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Strength Training',
      duration: '30 min',
      difficulty: 'Advanced',
      calories: '220 cal',
      image: '/api/placeholder/300/200'
    }
  ];

  const achievements = [
    { name: '7-Day Streak', icon: Trophy, earned: true },
    { name: 'Step Champion', icon: Activity, earned: true },
    { name: 'Hydration Hero', icon: Leaf, earned: false },
    { name: 'Sleep Master', icon: Moon, earned: false }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Wellness Hub</h1>
        <p className="text-muted-foreground">
          Your personal health and fitness companion
        </p>
      </div>

      {/* Daily Overview */}
      <Card className="mb-8 bg-gradient-wellness border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Today's Progress</h2>
              <p className="opacity-90">Keep up the great work!</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">82%</div>
              <div className="text-sm opacity-90">Daily Goal</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-2xl p-4">
              <Activity className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{todayStats.steps.current.toLocaleString()}</div>
              <div className="text-sm opacity-90">Steps</div>
              <Progress 
                value={(todayStats.steps.current / todayStats.steps.target) * 100} 
                className="mt-2 bg-white/20"
              />
            </div>

            <div className="bg-white/20 rounded-2xl p-4">
              <Leaf className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{todayStats.water.current}</div>
              <div className="text-sm opacity-90">Glasses</div>
              <Progress 
                value={(todayStats.water.current / todayStats.water.target) * 100} 
                className="mt-2 bg-white/20"
              />
            </div>

            <div className="bg-white/20 rounded-2xl p-4">
              <Moon className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{todayStats.sleep.current}h</div>
              <div className="text-sm opacity-90">Sleep</div>
              <Progress 
                value={(todayStats.sleep.current / todayStats.sleep.target) * 100} 
                className="mt-2 bg-white/20"
              />
            </div>

            <div className="bg-white/20 rounded-2xl p-4">
              <Zap className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{todayStats.calories.current}</div>
              <div className="text-sm opacity-90">Calories</div>
              <Progress 
                value={(todayStats.calories.current / todayStats.calories.target) * 100} 
                className="mt-2 bg-white/20"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Workouts */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5" />
                Quick Workouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {workoutPlans.map((workout, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-3">
                      <div className="w-full h-full bg-gradient-primary opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="hero" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-semibold">{workout.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{workout.duration}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {workout.difficulty}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Meditation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5" />
                Mindfulness & Meditation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-soft rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Daily Meditation</h3>
                  <p className="text-muted-foreground mb-4">5-minute breathing exercise</p>
                  <div className="flex items-center gap-2">
                    <Button variant="soft">
                      <Play className="w-4 h-4 mr-2" />
                      Start Session
                    </Button>
                  </div>
                </div>

                <div className="bg-accent-soft rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Sleep Stories</h3>
                  <p className="text-muted-foreground mb-4">Relaxing bedtime stories</p>
                  <div className="flex items-center gap-2">
                    <Button variant="soft">
                      <Moon className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nutrition */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Apple className="w-5 h-5" />
                Nutrition Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <div>
                    <h4 className="font-medium">Today's Meals</h4>
                    <p className="text-sm text-muted-foreground">1,850 / 2,100 calories</p>
                  </div>
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Log Meal
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">68g</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">185g</div>
                    <div className="text-xs text-muted-foreground">Carbs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">52g</div>
                    <div className="text-xs text-muted-foreground">Fat</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Weekly Goals */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Weekly Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyGoals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <goal.icon className="w-4 h-4 text-primary" />
                      <span className="font-medium">{goal.name}</span>
                    </div>
                    <span className="text-sm font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{goal.target}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-xl text-center transition-colors ${
                      achievement.earned 
                        ? 'bg-gradient-primary text-white' 
                        : 'bg-muted/50 text-muted-foreground'
                    }`}
                  >
                    <achievement.icon className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-xs font-medium">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Tips */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Health Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-primary-soft rounded-xl">
                  <h4 className="font-medium text-primary mb-1">Great Progress!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've increased your daily steps by 15% this week.
                  </p>
                </div>
                
                <div className="p-3 bg-secondary-soft rounded-xl">
                  <h4 className="font-medium text-secondary mb-1">Hydration Reminder</h4>
                  <p className="text-sm text-muted-foreground">
                    Try to drink water every 2 hours for better hydration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WellnessHub;