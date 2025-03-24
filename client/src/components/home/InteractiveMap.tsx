import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Destination } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const regions = [
  "All Regions",
  "Greater Accra",
  "Ashanti",
  "Central",
  "Eastern",
  "Northern",
  "Western"
];

const InteractiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const { data: destinations = [], isLoading } = useQuery<Destination[]>({
    queryKey: ['/api/destinations'],
  });

  const filterCategories = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E5B25D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
            </svg>, 
      label: "Beaches" 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#CE1126]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>, 
      label: "Heritage Sites" 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#006B3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>, 
      label: "Nature" 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E5B25D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>, 
      label: "Food" 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#CE1126]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>, 
      label: "Markets" 
    }
  ];

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <section id="map" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 font-montserrat mb-3">Explore Ghana</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through Ghana's diverse regions and discover the perfect destinations for your journey
          </p>
        </div>
        
        <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            {isLoading ? (
              <Skeleton className="h-96 w-full" />
            ) : (
              <div className="w-full h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white bg-opacity-90 p-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#CE1126] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-lg text-neutral-800 font-medium">Interactive map would be displayed here</p>
                    <p className="text-sm text-gray-600">Explore regions, attractions, and plan your routes</p>
                  </div>
                </div>
                
                {destinations.map(destination => (
                  <div 
                    key={destination.id}
                    className="absolute w-3 h-3 bg-[#CE1126] rounded-full"
                    style={{ 
                      left: `${Math.random() * 80 + 10}%`, 
                      top: `${Math.random() * 80 + 10}%` 
                    }}
                    title={destination.name}
                  />
                ))}
              </div>
            )}
          </div>
          
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              {regions.map(region => (
                <Button 
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region)}
                  className={selectedRegion === region ? "bg-[#006B3F]" : ""}
                >
                  {region}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {filterCategories.map(category => (
                <Button
                  key={category.label}
                  variant="outline"
                  onClick={() => toggleFilter(category.label)}
                  className={`flex items-center ${
                    selectedFilters.includes(category.label) 
                      ? "bg-neutral-100 border-gray-400" 
                      : ""
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveMap;
