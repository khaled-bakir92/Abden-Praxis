
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  id: string; // Add ID prop for links
}

const ServiceCard = ({ title, description, imageSrc, className, id }: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`} className="block h-full">
      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-abdent-50 bg-white cursor-pointer", 
        className
      )}>
        <CardHeader className="flex flex-col items-center text-center pb-2">
          <div className="p-3 rounded-full bg-abdent-100 mb-3">
            <img src={imageSrc} alt={title} className="h-20 w-20" />
          </div>
          <CardTitle className="text-xl font-bold text-dark">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-dark-light">
          <CardDescription className="text-dark-light text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
