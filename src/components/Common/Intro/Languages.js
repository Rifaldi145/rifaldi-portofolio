import LinearBar from './LinearBar';
import { Bahasa } from '../../../constants/constants';
const Languages = () => {
    return (
        <div className='flex flex-col space-y-1 pt-6'>
            <div className='flex flex-col gap-y-4'>
                <span className='text-Snow text-xs font-bold bg-gradient-to-bl'>Languages</span>
                <div className='flex flex-col space-y-4'>
                    {Bahasa.map((Language, index) => {
                        return <LinearBar key={index} title={Language.title} percent={Language.level} bgColor='bg-Blue' />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Languages;
