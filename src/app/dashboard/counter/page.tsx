import { CartCounter } from '@/shoppint-cart/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Counter Page',
};
export default function CounterPage() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Products on cart</span>
            <CartCounter value={20} />
        </div>
    );
}
