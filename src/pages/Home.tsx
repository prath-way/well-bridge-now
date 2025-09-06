import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import healthcareHero from '@/assets/healthcare-hero.jpg';
import { 
  Search, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Heart, 
  Stethoscope,
  Phone,
  Calendar,
  FileText,
  Activity,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-soft overflow-hidden" role="banner">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          <img 
            src={healthcareHero} 
            alt="Diverse healthcare professionals and families in a welcoming medical environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-soft/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-soft px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Trusted by 50,000+ families
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Your Health,{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Connected
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Find trusted doctors, book appointments, manage your health records, and connect with your community—all in one secure platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for doctors, clinics, or health services near you..."
                  className="pl-12 h-14 text-lg rounded-2xl border-2 shadow-card"
                  aria-label="Search for healthcare services"
                />
                <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            {/* Quick Actions */}
            <nav className="flex flex-wrap justify-center gap-4" aria-label="Quick actions">
              <Button variant="hero" size="lg" asChild>
                <Link to="/search">
                  <Stethoscope className="w-5 h-5" />
                  Find Doctors
                </Link>
              </Button>
              <Button variant="emergency" size="lg">
                <Phone className="w-5 h-5" />
                Emergency SOS
              </Button>
              <Button variant="wellness" size="lg" asChild>
                <Link to="/wellness">
                  <Activity className="w-5 h-5" />
                  Wellness Hub
                </Link>
              </Button>
            </nav>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need for better health</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services designed for everyone, everywhere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doctor Search */}
            <Card className="shadow-card hover:shadow-soft transition-all duration-200 border-0 bg-gradient-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Find Trusted Doctors</CardTitle>
                <CardDescription>
                  Search verified healthcare professionals by location, specialty, and ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link to="/search">
                    Start Searching
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Appointments */}
            <Card className="shadow-card hover:shadow-soft transition-all duration-200 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Easy Appointments</CardTitle>
                <CardDescription>
                  Book, reschedule, and manage appointments with real-time availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link to="/appointments">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Health Records */}
            <Card className="shadow-card hover:shadow-soft transition-all duration-200 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Secure Records</CardTitle>
                <CardDescription>
                  Store and share your medical history securely with privacy controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link to="/records">
                    View Records
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Telemedicine */}
            <Card className="shadow-card hover:shadow-soft transition-all duration-200 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Video Consultations</CardTitle>
                <CardDescription>
                  Connect with doctors remotely through secure video calls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  Start Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="shadow-card hover:shadow-soft transition-all duration-200 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Health Community</CardTitle>
                <CardDescription>
                  Connect with others, share experiences, and get peer support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link to="/community">
                    Join Community
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency */}
            <Card className="shadow-emergency hover:shadow-card transition-all duration-200 border-0 bg-destructive/5">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-destructive-foreground" />
                </div>
                <CardTitle>Emergency Support</CardTitle>
                <CardDescription>
                  24/7 emergency assistance with GPS location and quick response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="emergency" className="w-full">
                  Emergency SOS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Verified Doctors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">200K+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;