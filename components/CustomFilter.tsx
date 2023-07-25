"use client";
import {useState, Fragment} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';

export const CustomFilter = ({title, options}:
  CustomFilterProps) => {
    const [selected, setSelected] = useState(options);

  return (
    <div className='w-fit'>
      <Listbox
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate '></span>
            
        

          </Listbox.Button>

        </div>


      </Listbox>
      
    </div>
  )
}
