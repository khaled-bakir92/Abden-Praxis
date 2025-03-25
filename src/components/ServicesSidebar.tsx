
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { services } from './Leistungen';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from './ui/sheet';
import { Separator } from './ui/separator';

interface ServicesSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  currentServiceId?: string;
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ open, setOpen, currentServiceId }) => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl text-center">Alle Leistungen</SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Schließen</span>
          </SheetClose>
        </SheetHeader>
        <Separator className="mb-4" />
        <div className="grid gap-4 py-4">
          {services.map((service) => {
            const isActive = service.id === currentServiceId;
            
            return (
              <div 
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors
                  ${isActive 
                    ? 'bg-abdent-100 text-abdent-700' 
                    : 'hover:bg-abdent-50 text-dark'
                  }`}
              >
                <img 
                  src={service.imageSrc} 
                  alt={service.title}
                  className="h-5 w-5 flex-shrink-0" 
                />
                <div>
                  <h3 className="font-medium">{service.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ServicesSidebar;
