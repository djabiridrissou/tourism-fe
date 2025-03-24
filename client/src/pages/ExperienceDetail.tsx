import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Experience, Review } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/common/ReviewCard";
import { ChevronLeft, MapPin, Clock, DollarSign } from "lucide-react";

const ExperienceDetail = () => {
  const { id } = useParams();
  const experienceId = parseInt(id);

  const { data: experience, isLoading: isLoadingExperience } = useQuery<Experience>({
    queryKey: [`/api/experiences/${experienceId}`],
    enabled: !isNaN(experienceId),
  });

  const { data: reviews = [], isLoading: isLoadingReviews } = useQuery<Review[]>({
    queryKey: [`/api/reviews/experience/${experienceId}`],
    enabled: !isNaN(experienceId),
  });

  if (isLoadingExperience) {
    return (
      <div className="container mx-auto px-4 py-16 pt-24">
        <Skeleton className="h-96 w-full mb-8" />
        <Skeleton className="h-10 w-1/2 mb-4" />
        <Skeleton className="h-6 w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="container mx-auto px-4 py-16 pt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Experience not found</h2>
        <p className="mb-6">The experience you're looking for doesn't exist or has been removed.</p>
        <Link href="/experiences">
          <Button>Back to Experiences</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
            <Link href="/experiences">
              <Button variant="outline" className="mb-4 bg-white bg-opacity-80">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Experiences
              </Button>
            </Link>
            
            <span className={`
              ${experience.category === 'Cultural' ? 'bg-[#CE1126]' : 
                experience.category === 'Culinary' ? 'bg-[#E5B25D]' : 
                'bg-[#006B3F]'} 
              px-3 py-1 rounded-full text-white text-xs font-medium mb-3 inline-block`}
            >
              {experience.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{experience.title}</h1>
            <p className="text-white text-lg mb-4">{experience.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{experience.location}</span>
              </div>
              
              {experience.duration && (
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{experience.duration}</span>
                </div>
              )}
              
              {experience.price && (
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span>${experience.price} per person</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Tabs defaultValue="details">
          <TabsList className="mb-8">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="whatToExpect">What to Expect</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="booking">Booking</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About this Experience</h2>
                <p className="text-gray-700 mb-6">
                  {experience.description}. This immersive experience allows you to connect with 
                  Ghanaian culture in an authentic and meaningful way. Led by experienced local guides, 
                  you'll gain insights into traditions that have been passed down through generations.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Highlights</h3>
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-1 text-gray-700">Learn directly from local experts</li>
                  <li className="mb-1 text-gray-700">Small group sizes ensure personal attention</li>
                  <li className="mb-1 text-gray-700">All materials and equipment provided</li>
                  <li className="mb-1 text-gray-700">Take home your creation as a souvenir</li>
                </ul>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Book this Experience</h3>
                    <div className="mb-4">
                      <p className="font-bold">Price:</p>
                      <p className="text-2xl font-bold text-[#006B3F]">${experience.price} <span className="text-sm text-gray-500">per person</span></p>
                    </div>
                    <div className="mb-4">
                      <p className="font-bold">Duration:</p>
                      <p className="text-gray-700">{experience.duration}</p>
                    </div>
                    <div className="mb-6">
                      <p className="font-bold">Location:</p>
                      <p className="text-gray-700">{experience.location}</p>
                    </div>
                    
                    <Button className="w-full mb-3 bg-[#006B3F] hover:bg-[#005C35]">
                      Book Now
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      Contact Host
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="whatToExpect" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Included</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">All necessary materials and equipment</li>
                  <li className="text-gray-700">Expert instruction from local guides</li>
                  <li className="text-gray-700">Light refreshments</li>
                  <li className="text-gray-700">Transportation to and from central meeting points</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What to Bring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">Comfortable clothing appropriate for the activity</li>
                  <li className="text-gray-700">Camera to capture your experience</li>
                  <li className="text-gray-700">Water bottle</li>
                  <li className="text-gray-700">Any personal items you might need</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Itinerary</h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-[#006B3F] pl-4">
                <p className="font-bold">Introduction (30 minutes)</p>
                <p className="text-gray-700">Meet your guide and get an overview of the experience and its cultural significance.</p>
              </div>
              <div className="border-l-4 border-[#006B3F] pl-4">
                <p className="font-bold">Learning Phase (2 hours)</p>
                <p className="text-gray-700">Hands-on instruction from experts, practicing techniques and developing skills.</p>
              </div>
              <div className="border-l-4 border-[#006B3F] pl-4">
                <p className="font-bold">Break & Cultural Context (30 minutes)</p>
                <p className="text-gray-700">Enjoy refreshments while learning more about the cultural significance.</p>
              </div>
              <div className="border-l-4 border-[#006B3F] pl-4">
                <p className="font-bold">Completion & Reflection (1 hour)</p>
                <p className="text-gray-700">Finish your project and share experiences with the group.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Traveler Reviews</h2>
              <Button>Write a Review</Button>
            </div>

            {isLoadingReviews ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <Skeleton key={i} className="h-40 w-full" />
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-10">No reviews yet. Be the first to review this experience!</p>
            ) : (
              <div className="space-y-6">
                {reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="booking" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Book this Experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Select Date & Participants</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#006B3F] focus:ring focus:ring-[#006B3F] focus:ring-opacity-20" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Adults</label>
                      <select className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#006B3F] focus:ring focus:ring-[#006B3F] focus:ring-opacity-20">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                      <select className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#006B3F] focus:ring focus:ring-[#006B3F] focus:ring-opacity-20">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#006B3F] hover:bg-[#005C35]">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Summary</h3>
                <p className="text-gray-700 mb-6">
                  Booking this experience helps support local artisans and preserves traditional Ghanaian crafts.
                </p>
                
                <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold mb-4">Price Breakdown</h4>
                  <div className="flex justify-between mb-2">
                    <span>Adult Price:</span>
                    <span>${experience.price} per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Child Price (under 12):</span>
                    <span>${Math.floor(experience.price * 0.7)} per person</span>
                  </div>
                  <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                    <span>Total:</span>
                    <span>${experience.price}</span>
                  </div>
                </div>
                
                <div className="bg-[#006B3F] bg-opacity-10 rounded-lg p-6">
                  <h4 className="font-bold mb-2">Cancellation Policy</h4>
                  <p className="text-gray-700 text-sm">
                    Free cancellation up to 24 hours before the experience starts. 
                    No refunds for cancellations made less than 24 hours in advance.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExperienceDetail;
