import Head from 'next/head';
import { motion } from 'framer-motion';
import { renderMetaTags } from 'react-datocms';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType } from 'next';
import { getDynamicPageBySlug, getSiteMetaTags } from '../lib/api';

export const getStaticProps = async () => {
  const siteMetaTags = await getSiteMetaTags();
  const pageData = await getDynamicPageBySlug('404');

  return {
    props: {
      pageData,
      siteData: {
        siteMetaTags,
      },
    },
  };
};

const DynamicPage = ({
  pageData,
  siteData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const metaTags = pageData.seo.concat(siteData.siteMetaTags.favicon);
  //   const { modules } = pageData;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Head>{renderMetaTags(metaTags)}</Head>
        <h1 className=''>{pageData.title}</h1>
      </div>
    </motion.div>
  );
};

export default DynamicPage;
