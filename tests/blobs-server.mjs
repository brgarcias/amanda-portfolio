// Local Netlify Blobs server for the browser tests, backed by a temporary
// directory, so tests never touch the site's real reviews.
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { BlobsServer } from '@netlify/blobs/server';

const server = new BlobsServer({
  directory: await mkdtemp(join(tmpdir(), 'portfolio-blobs-')),
  port: Number(process.env.BLOBS_PORT),
  token: process.env.BLOBS_TOKEN,
});
const { port } = await server.start();
console.log(`Local Netlify Blobs server on port ${port}`);
