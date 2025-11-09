import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Opebiyi Oluwafemi - Full-Stack & Blockchain Developer",
  description = "I am Opebiyi Oluwafemi, a full-stack developer, tech enthusiast and blockchain developer specializing in React, TypeScript, Node.js, and Solidity.",
  keywords = "Full-stack developer, React developer, Blockchain developer, Solidity, TypeScript, Web3, Smart Contracts, Frontend developer, Backend developer",
  image = "/hero-img.png",
  url = "https://your-portfolio-url.com"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Opebiyi Oluwafemi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@codewithopebiyi" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
