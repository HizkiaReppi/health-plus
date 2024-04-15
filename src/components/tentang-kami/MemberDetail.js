import Image from 'next/image';

const MemberDetail = ({ image, name, position }) => {
  const formattedName = name
    ?.split(' ')
    .map((word, index) => {
      if (index === 0 || index === name?.split(' ').length - 1) {
        return word;
      } else {
        return `${word.charAt(0)}.`;
      }
    })
    .join(' ');
  return (
    <div className='mb-10'>
      <Image
        src={image}
        alt={name}
        className='w-40 h-40 md:w-52 md:h-52 object-cover rounded md:rounded-md'
      />
      <h3 className='text-base md:text-lg: lg:text-xl font-semibold mt-1.5 mb-1'>
        {formattedName}
      </h3>
      <p className='text-sm md:text-base lg:text-lg'>Posisi: {position}</p>
    </div>
  );
};

export default MemberDetail;
