'use client';
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
    const counter = useAppSelector((state) => state.counter.count);

    return (
        <div className='flex flex-wrap p-2'>
            <SimpleWidget
                title={counter.toString()}
                subtitle='Shopping cart items'
                label='Counter'
                icon={<IoCartOutline size={70} className='text-blue-600' />}
                href='/dashboard/counter'
            />
        </div>
    );
};
