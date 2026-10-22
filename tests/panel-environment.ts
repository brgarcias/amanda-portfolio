// Test-only settings for the review panel. The real credentials live only in
// the Netlify environment variables.

export const blobsServer = { port: 4174, token: 'blobs-de-teste' };

const blobsURL = `http://127.0.0.1:${blobsServer.port}`;

export const blobsContext = {
  edgeURL: blobsURL,
  uncachedEdgeURL: blobsURL,
  token: blobsServer.token,
  siteID: 'portfolio-local',
};

export const panelCredentials = {
  username: 'amanda-teste',
  password: 'senha-de-teste',
};
