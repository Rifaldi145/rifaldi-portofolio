import Link from 'next/link';

const Download = ({ icon }) => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <Link
          href="/Resume M Rifaldi Judri S,Kom.pdf"
          target="_blank"
          download
          className="inline-flex items-center gap-x-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition duration-200"
        >
          {icon}
          <span>Download Resume</span>
        </Link>

        <Link
          href="/portofolio.pdf"
          target="_blank"
          download
          className="inline-flex items-center gap-x-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition duration-200"
        >
          {icon}
          <span>Download Portofolio</span>
        </Link>
      </div>
    </div>
  );
};

export default Download;
