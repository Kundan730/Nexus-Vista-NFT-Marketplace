import { prisma } from '@/lib/prismadb';
import { formatDistance } from 'date-fns';
import { notFound } from 'next/navigation';
import ApiKeyOptions from './ApiKeyOptions';
import { Input } from './ui/apikeyui/Input';
import Paragraph from './ui/apikeyui/Paragraph';
import Table from './ui/apikeyui/Table';
import { currentUser } from '@clerk/nextjs';

const ApiDashboard = async ({}) => {
  const user = await currentUser();
  if (!user) return notFound();

  const apiKeys = await prisma.apiKey.findMany({
    where: { userId: user.id }
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  const userRequests = await prisma.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id)
      }
    }
  });

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date())
  }));

  return (
    <div className='container flex flex-col gap-6'>
      <h1 className='text-7xl'>Welcome back, {user.username || user.firstName}</h1>
      <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start'>
        <Paragraph>Your API key:</Paragraph>
        <Input className='w-fit truncate' readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <Paragraph className='-mb-4 mt-4 text-center md:text-left'>Your API history:</Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  );
};

export default ApiDashboard;
