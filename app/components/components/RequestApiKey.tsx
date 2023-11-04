'use client';

import { createApiKey } from '@/helpers/create-api-key';
import { Key } from 'lucide-react';
import { FC, useState } from 'react';
import CopyButton from './ui/CopyButton';
import { Button } from './ui/apikeyui/Button';
import { Input } from './ui/apikeyui/Input';
import Paragraph from './ui/apikeyui/Paragraph';
import { toast } from 'sonner';

interface RequestApiKeyProps {}

const RequestApiKey: FC<RequestApiKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`Error, ${err.message}`);

        return;
      }
      toast.error(`Error, Something went wrong`);
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className='container md:max-w-2xl'>
      <div className='flex flex-col items-center gap-6'>
        <Key className='mx-auto h-12 w-12 text-gray-500' />
        <h1 className='text-center text-5xl'>Request your API key</h1>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form onSubmit={createNewApiKey} className='mt-6 sm:flex sm:items-center' action='#'>
        <label htmlFor='emails' className='sr-only'>
          Your API key
        </label>
        <div className='relative rounded-md shadow-sm sm:min-w-0 sm:flex-1'>
          {/* Show a copy icon if API key was generated successfully */}
          {apiKey ? (
            <CopyButton
              className='absolute inset-y-0 right-0 animate-in fade-in duration-300'
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ''}
            placeholder='Request an API key to display it here'
          />
        </div>
        <div className='mt-6 flex justify-center sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
