/* eslint-disable @next/next/no-page-custom-font */
import {
  getAllPagesSlugs,
  getDynamicPageBySlug,
  getSiteMetaTags,
} from '../lib/api';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { arrayOf, bool, shape, string } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { renderMetaTags } from 'react-datocms';
import { InferGetStaticPropsType, NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModuleContainer from '../components/Modules';
import ModularComponent from '../components/ModularComponent';
export const getStaticProps = async ({
  params,
}: {
  params: { slug: string | string[] };
}) => {
  const siteMetaTags = await getSiteMetaTags();
  const pageSlug = params.slug ? params.slug[0] : '';

  const pageData = await getDynamicPageBySlug(pageSlug);

  return {
    props: {
      pageData,
      siteData: {
        siteMetaTags,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const allPages = await getAllPagesSlugs();
  const formattedPages =
    allPages?.map((page) => ({
      params: { slug: [page.slug], pageType: 'normal' },
    })) || [];
  return {
    paths: [...formattedPages, ,],
    fallback: false,
  };
};

const DynamicPage = ({
  pageData,
  siteData,
  appProps,
  killTransitionIn,
}: any) => {
  const metaTags = pageData.seo.concat(siteData.siteMetaTags.favicon);
  // const { modules } = pageData;
  const router = useRouter();
  // const isGetStartedModalOpen = router.query['get-started'];
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef) containerRef?.current?.focus();
  }, [containerRef]);
  const { modules } = pageData;
  const initial = killTransitionIn ? false : { opacity: 0 };

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className='max-w-screen-xl	 mx-auto'
        initial={initial}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        role='main'
      >
        <Head>
          {renderMetaTags(metaTags)}̦{/* //Add acme fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=Acme&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Header />
        {modules.map((module: any) => {
          const moduleDomId = module.name?.toLowerCase().split(' ').join('_');
          module.moduleDomId = moduleDomId;

          return (
            <ModuleContainer
              key={`module-container-${module.id}`}
              id={`module_${moduleDomId}`}
              debug={pageData.debugModules}
              moduleName={module.name}
              accentColor={module.accentColor}
              killTransitionIn={killTransitionIn}
            >
              <ModularComponent key={module.id} module={module} />
            </ModuleContainer>
          );
        })}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default DynamicPage;
