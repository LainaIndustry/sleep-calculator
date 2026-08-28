import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sleep-buddy-clone.lovable.app";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/18d994f0-5476-4875-b6dd-2bc339ccde1a";

type Props = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export const SEO = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}: Props) => {
  const url = `${SITE_URL}${path}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {ldArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
