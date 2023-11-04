'use client';

import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './apikeyui/Button';
import { toast } from 'sonner';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ valueToCopy, className, ...props }) => {
  return (
    <Button
      {...props}
      type='button'
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast.success('Copied, API key copied to clipboard.');
      }}
      variant='ghost'
      className={cn('', className)}
    >
      <Copy className='h-5 w-5' />
    </Button>
  );
};

export default CopyButton;
