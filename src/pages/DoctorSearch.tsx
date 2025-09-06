import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Video, 
  Calendar,
  Shield,
  Filter,
  Heart,
  Stethoscope,
  Eye,
  Brain
} from 'lucide-react';

const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown Medical Center',
      distance: '0.8 miles',
      availability: 'Available today',
      consultationFee: '$75',
      verified: true,
      languages: ['English', 'Mandarin'],
      experience: '15+ years',
      avatar: '/api/placeholder/64/64'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      specialty: 'General Physician',
      rating: 4.8,
      reviews: 89,
      location: 'Community Health Clinic',
      distance: '1.2 miles',
      availability: 'Next slot: Tomorrow 2 PM',
      consultationFee: '$50',
      verified: true,
      languages: ['English', 'Spanish'],
      experience: '10+ years',
      avatar: '/api/placeholder/64/64'
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 203,
      location: 'Children\'s Health Center',
      distance: '2.1 miles',
      availability: 'Available this week',
      consultationFee: '$60',
      verified: true,
      languages: ['English', 'Hindi', 'Gujarati'],
      experience: '12+ years',
      avatar: '/api/placeholder/64/64'
    }
  ];

  const specialties = [
    { name: 'General Medicine', icon: Stethoscope },
    { name: 'Cardiology', icon: Heart },
    { name: 'Ophthalmology', icon: Eye },
    { name: 'Neurology', icon: Brain }
  ];

  const filters = [
    'Available Today',
    'Video Consultation',
    'Accepts Insurance',
    'Female Doctor',
    'Language Preference'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Doctor</h1>
        <p className="text-muted-foreground mb-6">
          Search for verified healthcare professionals near you
        </p>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search by doctor name, specialty, or condition..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-lg rounded-2xl"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardHeader>
              <h3 className="font-semibold">Specialties</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              {specialties.map((specialty) => (
                <Button
                  key={specialty.name}
                  variant={selectedSpecialty === specialty.name ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedSpecialty(
                    selectedSpecialty === specialty.name ? '' : specialty.name
                  )}
                >
                  <specialty.icon className="w-4 h-4 mr-2" />
                  {specialty.name}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card mt-4">
            <CardHeader>
              <h3 className="font-semibold">Quick Filters</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  {filter}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Doctor Results */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {doctors.length} doctors found near you
            </p>
            <Button variant="outline" size="sm">
              Sort by: Relevance
            </Button>
          </div>

          <div className="space-y-4">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="shadow-card hover:shadow-soft transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Doctor Info */}
                    <div className="flex gap-4 flex-1">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={doctor.avatar} />
                        <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{doctor.name}</h3>
                          {doctor.verified && (
                            <Badge variant="default" className="bg-primary-soft text-primary">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>

                        <p className="text-primary font-medium mb-2">{doctor.specialty}</p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-500" />
                            <span className="font-medium">{doctor.rating}</span>
                            <span>({doctor.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{doctor.distance}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">
                            <Clock className="w-3 h-3 mr-1" />
                            {doctor.availability}
                          </Badge>
                          <Badge variant="outline">{doctor.experience}</Badge>
                          {doctor.languages.map((lang) => (
                            <Badge key={lang} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-muted-foreground">{doctor.location}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col justify-between min-w-[200px]">
                      <div className="text-right mb-4">
                        <p className="text-lg font-bold text-primary">{doctor.consultationFee}</p>
                        <p className="text-sm text-muted-foreground">Consultation</p>
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full" size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                        <Button variant="outline" className="w-full" size="sm">
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Doctors
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;