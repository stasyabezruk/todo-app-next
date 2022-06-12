import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Todos from 'components/ToDoApp';
import GlobalStyles from 'styles/global';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Todos />
    </>
  );
};

export default IndexPage;
