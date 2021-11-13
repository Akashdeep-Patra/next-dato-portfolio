import Head from 'next/head';
import { motion } from 'framer-motion';
import { renderMetaTags } from 'react-datocms';
import { useRouter } from 'next/router';
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  InferGetStaticPropsType,
} from 'next';
import {
  getAllPagesSlugs,
  getDynamicPageBySlug,
  getSiteMetaTags,
} from '../lib/api';
import { NextPage } from 'next';
import { arrayOf, shape, string } from 'prop-types';

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
  const router = useRouter();
  const isGetStartedModalOpen = router.query['get-started'];

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

DynamicPage.propTypes = {
  pageData: shape({
    modules: arrayOf(shape({})),
  }),
  appProps: shape({
    footerMessage: string,
    footerLinks: arrayOf(
      shape({
        id: string,
        title: string,
        slug: string,
      })
    ),
    navigation: arrayOf(shape({})),
  }),
  siteData: shape({}),
};

export default DynamicPage;
