/* eslint-disable no-console, no-shadow */

import path from 'path';
import webpack from 'webpack';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';
import webpackConfig from '../webpack.config';
import config from './config/environment';
import schema from './app/schema';
import requestProxy from 'express-request-proxy';
import session from 'express-session';
import request from 'request';
import url from 'url';
import cors from 'cors';

require('babel-polyfill');

if (config.env === 'development') {
  // Launch GraphQL
  const graphql = express();
  graphql.use(cors());
  graphql.use(session({
    secret: 'some unusual secret',
    cookie: {
      maxAge: 60000
    },
    resave: true,
    saveUninitialized: true
  }));
  graphql.use('/', graphQLHTTP(request => ({
    graphiql: true,
    pretty: true,
    schema,
    context: { request },
    formatError: (error) => {
      console.log('formatError', error);
      return error;
    },
  })));
  graphql.listen(config.graphql.port, () => console.log(chalk.green(`GraphQL is listening on port ${config.graphql.port}`)));

  // Launch Relay by using webpack.config.js
  const relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    proxy: {
      '/graphql': `http://localhost:${config.graphql.port}`
    },
    stats: {
      colors: true
    },
    hot: true,
    historyApiFallback: true
  });

  // Serve static resources
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.listen(config.port, () => console.log(chalk.green(`Relay is listening on port ${config.port}`)));
} else if (config.env === 'production') {
  // Launch Relay by creating a normal express server
  const relayServer = express();
  relayServer.use(cors());
  relayServer.use(historyApiFallback());
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.use('/graphql', graphQLHTTP({ schema }));
  relayServer.use('/graphql', graphQLHTTP(request => ({
    schema,
    context: { request },
  })));
  relayServer.listen(config.port, () => console.log(chalk.green(`Relay is listening on port ${config.port}`)));
}
