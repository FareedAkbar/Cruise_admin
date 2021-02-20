import NextApp from 'next/app'
import Router, { withRouter } from 'next/router'
import App from "next/app";
import Head from "next/head";
import React from 'react'
import withClint from '../GraphQL/client'
import {ApolloProvider} from '@apollo/client'
 class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//         pageProps = await Component.getInitialProps(ctx);
//     }

//     // this exposes the query to the user
//     pageProps.query = ctx.query;
//     return { pageProps };
// }
    render() {
      const { Component,pageProps, apollo } = this.props;
    
    
        const Layout = Component.layout || (({ children }) => <>{children}</>);
    
        return (
          <React.Fragment>
            <Layout>
            <ApolloProvider client={apollo}>
              <Component {...pageProps} />
           </ApolloProvider>
           </Layout>
          </React.Fragment>
        );
      }
}

export default withClint(MyApp)