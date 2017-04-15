import Relay from 'react-relay';

const configName = process.env.NODE_ENV || 'development';
export default function refreshRelayNetwork(token) {
  const url = configName === 'development' ? '/graphql' : 'ENTER_WEBSITE_URL_FOR_WHEN_LIVE';
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(url, {
      fetchTimeout: 300000,
      retryDelays: [300000],
      headers: {
        Authorization: token
      },
    })
  );
}
