import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Destination, Review } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/common/ReviewCard";
import { ChevronLeft, MapPin, Star } from "lucide-react";
import { useGetDestinationQuery } from "@/redux/features/app";

const DestinationDetail = () => {
  const { id: destinationId } = useParams();

  const { data: reviews = [], isLoading: isLoadingReviews } = useQuery<
    Review[]
  >({
    queryKey: [`/api/reviews/destination/${destinationId}`],
    enabled: !isNaN(destinationId),
  });

  const { data: destination, isLoading: isLoadingDestination } =
    useGetDestinationQuery({ destinationId });

  if (isLoadingDestination) {
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

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-16 pt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
        <p className="mb-6">
          The destination you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/destinations">
          <Button>Back to Destinations</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${
            destination.data.imageUrl
          })`,
        }}
        // style={{ backgroundImage: `url(https://rggnews.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-10.39.50-AM.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
            <Link href="/destinations">
              <Button variant="outline" className="mb-4 bg-white bg-opacity-80">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {destination.data.name}
            </h1>
            <div className="flex items-center text-white mb-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{destination.data.region}</span>
              <div className="ml-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1 fill-yellow-400" />
                <span>{destination.data.rating / 10} / 5</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(destination.data.tags) &&
                destination.data.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">
                  About {destination.data.name}
                </h2>
                <p className="text-gray-700 mb-6">
                  {destination.data.description}
                </p>

                <h3 className="text-xl font-bold mb-3">Top Attractions</h3>
                <ul className="list-disc pl-5 mb-6">
                  {Array.isArray(destination.data.topAttractions) &&
                    destination.data.topAttractions.map(
                      (attraction: string, index: number) => (
                        <li key={index} className="mb-1 text-gray-700">
                          {attraction}
                        </li>
                      )
                    )}
                </ul>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
                    <p className="text-gray-700 mb-6">
                      Ready to experience {destination.data.name}? Book your
                      trip now!
                    </p>

                    <Button className="w-full mb-3 bg-[#006B3F] hover:bg-[#005C35]">
                      Check Availability
                    </Button>

                    <Button variant="outline" className="w-full">
                      Add to Wishlist
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="attractions" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">
              Top Attractions in {destination.data.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.isArray(destination.data.topAttractions) &&
                destination.data.topAttractions.map(
                  (attraction: string, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{attraction}</h3>
                        <p className="text-gray-700">
                          Detailed information about this attraction would be
                          displayed here.
                        </p>
                      </CardContent>
                    </Card>
                  )
                )}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Traveler Reviews</h2>
              <Button>Write a Review</Button>
            </div>

            {isLoadingReviews ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-40 w-full" />
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                No reviews yet. Be the first to review this destination!
              </p>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Location & Map</h2>
            {/* <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-2">
                  Interactive map would be displayed here
                </p>
                {destination.data.coordinates && (
                  <p className="text-gray-500">
                    Coordinates: {destination.data.coordinates.lat},{" "}
                    {destination.data.coordinates.lng}
                  </p>
                )}
              </div>
            </div> */}

            <TabsContent value="map" className="mt-0">
              <h2 className="text-2xl font-bold mb-6">Location & Map</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${destination.data.coordinates.coordinates[1]},${destination.data.coordinates.coordinates[0]}&z=14&output=embed`}
                ></iframe>
              </div>
            </TabsContent>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DestinationDetail;
