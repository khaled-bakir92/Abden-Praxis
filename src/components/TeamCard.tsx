
import React from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

export interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  className?: string;
  featured?: boolean;
}

const TeamCard = ({ id, name, role, image, className, featured = false }: TeamMemberProps) => {
  // Split the name to render in the desired format if needed
  const formattedName = featured ? name : name;
  
  const cardContent = (
    <>
      <div className="relative">
      <div className={cn(
        "w-full overflow-hidden",
        featured ? "max-h-96" : "max-h-90"  // Smaller height for regular cards
      )}>
          <img 
            src={image} 
            alt={name} 
            className={cn(
              "w-full",
              "object-contain" // Both use object-contain to show complete image
            )}
          />
        </div>
      </div>
      <CardContent className={cn(
        "text-center bg-white",
        featured ? "p-2" : "p-1" // Even smaller padding for regular cards
      )}>
        <h3 className={cn(
          "font-bold text-dark",
          featured ? "text-sm" : "text-xs" // Smaller text for regular cards
        )}>
          {formattedName}
        </h3>
        <p className={cn(
          "text-dark-light mt-1",
          featured ? "text-xs" : "text-xs" // Same small text for both
        )}>
          {role}
        </p>
      </CardContent>
    </>
  );

  // If featured, wrap in Link, otherwise just return the Card
  if (featured) {
    return (
      <Link to={`/team/${id}`} className="block w-auto">
        <Card className={cn(
          "overflow-hidden w-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer max-w-xs mx-auto", 
          className
        )}>
          {cardContent}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn(
      "overflow-hidden mx-auto", 
      "w-full max-w-[250px]", // Explicitly set smaller max width for regular cards
      className
    )}>
      {cardContent}
    </Card>
  );
};

export default TeamCard;