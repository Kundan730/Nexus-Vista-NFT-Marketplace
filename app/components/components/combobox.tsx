'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { type Product } from '@prisma/client';
import { useTransition } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Skeleton } from '@/components/ui/skeleton';
import { Icons } from '@/components/icons';
import { cn, isMacOs } from '@/lib/utils';

export function Combobox() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState<
    | {
        category: Product['category'];
        products: Pick<Product, 'id' | 'name' | 'category'>[];
      }[]
    | null
  >(null);
  const [isPending, startTransition] = useTransition();

  React.useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  function handleSelect(arg0: () => void): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Button
        variant='outline'
        className='relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2'
        onClick={() => setIsOpen(true)}
      >
        <Icons.search className='h-4 w-4 xl:mr-2' aria-hidden='true' />
        <span className='hidden xl:inline-flex'>Search APIs...</span>
        <span className='sr-only'>Search APIs</span>
      </Button>
      <CommandDialog position='top' open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder='Search APIs...' value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty className={cn(isPending ? 'hidden' : 'py-6 text-center text-sm')}>
            No APIs found.
          </CommandEmpty>
          {isPending ? (
            <div className='space-y-1 overflow-hidden px-1 py-2'>
              <Skeleton className='h-4 w-10 rounded' />
              <Skeleton className='h-8 rounded-sm' />
              <Skeleton className='h-8 rounded-sm' />
            </div>
          ) : (
            data?.map((group) => (
              <CommandGroup key={group.category} className='capitalize' heading={group.category}>
                {group.products.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(() => router.push(`/product/${item.id}`))}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
