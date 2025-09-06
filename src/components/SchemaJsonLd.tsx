import Script from 'next/script'

interface SchemaJsonLdProps {
  data: object
}

const SchemaJsonLd: React.FC<SchemaJsonLdProps> = ({ data }) => {
  return (
    <Script
      id="alinaDorokhovaSchemaJsonLd"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SchemaJsonLd