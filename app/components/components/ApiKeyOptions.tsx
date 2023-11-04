'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/apikeyui/DropdownMenu';
import { createApiKey } from '@/helpers/create-api-key';
import { revokeApiKey } from '@/helpers/revoke-api-key';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Button } from './ui/apikeyui/Button';
import { toast } from 'sonner';

interface ApiKeyOptionsProps {
  // passing of entire object not allowed due to date property not being serializable
  apiKeyKey: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyKey }) => {
  const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  const createNewApiKey = async () => {
    setIsCreatingNew(true);
    try {
      await revokeApiKey();
      await createApiKey();
      router.refresh();
    } catch (error) {
      toast.error('Error creating new API key, Please try again later.');
    } finally {
      setIsCreatingNew(false);
    }
  };

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true);
    try {
      await revokeApiKey();
      router.refresh();
    } catch (error) {
      toast.error('Error revoking your API key, Please try again later.');
    } finally {
      setIsRevoking(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant='ghost' className='flex items-center gap-2'>
          <p>{isCreatingNew ? 'Creating new key' : isRevoking ? 'Revoking key' : 'Options'}</p>
          {isCreatingNew || isRevoking ? <Loader2 className='h-4 w-4 animate-spin' /> : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(apiKeyKey);

            toast.success('Copied, API key copied to clipboard.');
          }}
        >
          Copy
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={createNewApiKey}>Create new key</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={revokeCurrentApiKey}>Revoke key</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
