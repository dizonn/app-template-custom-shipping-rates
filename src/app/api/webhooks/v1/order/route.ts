import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  console.info('Webhook::order accepted - called');
  const { eventType, instanceId, payload } = await wixAppClient.webhooks.processRequest(request);

  console.info('Webhook::order accepted - input is:', {
    eventType,
    instanceId,
    payload,
  });

  return new Response('OK', {
    status: 200,
  });
}
