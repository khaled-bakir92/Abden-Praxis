
import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialMediaProps {
  className?: string;
}

const SocialMedia = ({ className , iconColor = "text-black"}: SocialMediaProps) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com', 
      delay: '0.1s' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com', 
      delay: '0.2s' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com', 
      delay: '0.3s' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com', 
      delay: '0.4s' 
    },
  ];

  return (
    <div className={cn("flex space-x-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon opacity-0 animate-slide-in-right"
          style={{ animationDelay: social.delay, animationFillMode: 'forwards' }}
          aria-label={social.name}
        >
          <social.icon className="w-6 h-6, iconColor" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
