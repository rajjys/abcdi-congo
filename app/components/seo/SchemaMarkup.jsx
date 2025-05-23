// components/SchemaMarkup.tsx
"use client"; // Required for <script> tags in App Router

export const SchemaMarkup = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};