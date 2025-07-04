import { Review, User, Destination, Experience } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  // Fetch user data
  const { data: user } = useQuery<User>({
    queryKey: [`/api/users/${review.userId}`],
    enabled: !!review.userId,
  });

  // Fetch destination if applicable
  const { data: destination } = useQuery<Destination>({
    queryKey: [`/api/destinations/${review.destinationId}`],
    enabled: !!review.destinationId,
  });

  // Fetch experience if applicable
  const { data: experience } = useQuery<Experience>({
    queryKey: [`/api/experiences/${review.experienceId}`],
    enabled: !!review.experienceId,
  });

  // Get location info
  const getLocationInfo = () => {
    if (destination) {
      return `Visited ${destination.name}, ${review.visitDate || ""}`;
    } else if (experience) {
      return `Experienced ${experience.title}, ${review.visitDate || ""}`;
    }
    return review.visitDate || "";
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  // Get tag color
  const getTagColor = (tag: string) => {
    if (tag.includes("Cultural")) return "bg-[#E5B25D] bg-opacity-10 text-[#E5B25D]";
    if (tag.includes("Beaches")) return "bg-[#006B3F] bg-opacity-10 text-[#006B3F]";
    if (tag.includes("Nature") || tag.includes("Wildlife") || tag.includes("Safari")) 
      return "bg-[#006B3F] bg-opacity-10 text-[#006B3F]";
    if (tag.includes("Markets")) return "bg-[#CE1126] bg-opacity-10 text-[#CE1126]";
    return "bg-gray-200 text-gray-700";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          {user?.profilePicture ? (
            <img 
              src={user.profilePicture} 
              alt={user.fullName || user.username} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#006B3F] flex items-center justify-center text-white font-bold">
              {user?.username?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-neutral-800">
            {user?.fullName || user?.username || "Anonymous User"}
          </h4>
          <p className="text-gray-500 text-sm">{getLocationInfo()}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex text-yellow-400 mb-2">
          {renderStars(review.rating)}
        </div>
        <h3 className="font-bold text-lg mb-2 font-montserrat">{review.title}</h3>
        <p className="text-gray-600">{review.content}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.isArray(review.tags) && review.tags.map((tag, index) => (
          <span 
            key={index} 
            className={`${getTagColor(tag)} px-3 py-1 rounded-full text-xs`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
