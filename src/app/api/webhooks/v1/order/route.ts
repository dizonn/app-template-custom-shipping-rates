import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  console.info(
    'Webhook::order accepted - called. Body: ' +
      JSON.stringify(request.body) +
      ' Headers: ' +
      JSON.stringify(request.headers),
  );

  return new Response('OK', {
    status: 200,
  });
}
