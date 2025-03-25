
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: object;
  keywords?: string;
  author?: string;
  lang?: string;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage = '/og-image.png', 
  schema,
  keywords = 'Zahnarzt, Lage, Detmold, Bielefeld, Herford, Zahnmedizin, Implantologie, Parodontitis, Zahnreinigung, Zahnarztpraxis, ABDEN, Zahnarzt Lage, Zahnarzt Detmold, Zahnarzt Bielefeld, Zahnarzt Herford,طبيب اسنان , دكتور اسنان', 
  author = 'ABDEN Zahnarztpraxis',
  lang = 'de'
}: SEOProps) => {
  const siteUrl = 'https://zahnarzt-abden.de'; 
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Viewport for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="ABDEN Zahnarztpraxis" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content="ABDEN Zahnarztpraxis in Lage" />
      <meta property="og:url" content={fullUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Lage" />
      <meta name="geo.position" content="51.9333;8.8833" />
      <meta name="ICBM" content="51.9333, 8.8833" />
      
      {/* Structured data / Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
