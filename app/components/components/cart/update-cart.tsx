'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { CartLineItem } from '@/types';
import { useTransition } from 'react';

interface UpdateCartProps {
  cartLineItem: CartLineItem;
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className='flex items-center space-x-1'>
      <div className='flex items-center space-x-1'>
        <Button
          variant='outline'
          size='icon'
          className='h-8 w-8'
          onClick={() => {
            startTransition(async () => {
              // Your updateCartItemAction logic here
            });
          }}
          disabled={isPending}
        >
          <Icons.remove className='h-3 w-3' aria-hidden='true' />
          <span className='sr-only'>Remove one item</span>
        </Button>
        <Input
          type='number'
          min='0'
          className='h-8 w-14'
          value={cartLineItem.quantity}
          onChange={(e) => {
            startTransition(async () => {
              // Your updateCartItemAction logic here
            });
          }}
          disabled={isPending}
        />
        <Button
          variant='outline'
          size='icon'
          className='h-8 w-8'
          onClick={() => {
            startTransition(async () => {
              // Your updateCartItemAction logic here
            });
          }}
          disabled={isPending}
        >
          <Icons.add className='h-3 w-3' aria-hidden='true' />
          <span className='sr-only'>Add one item</span>
        </Button>
      </div>
      <Button
        variant='outline'
        size='icon'
        className='h-8 w-8'
        onClick={() => {
          startTransition(async () => {
            // Your deleteCartItemAction logic here
          });
        }}
        disabled={isPending}
      >
        <Icons.trash className='h-3 w-3' aria-hidden='true' />
        <span className='sr-only'>Delete item</span>
      </Button>
    </div>
  );
}
