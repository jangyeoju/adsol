import Head from 'next/head';
import React from 'react';

const Meta = ({ title, description, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default Meta;