import { FaCheck, FaPencilAlt } from 'react-icons/fa';

const WeeklyPlanCard = ({ name, date, time, description, duration = '' }) => {
  const color = [
    '#dafcb8',
    '#e4ffc2',
    '#eeffcc',
    '#f8ffd6',
    '#ffffe0',
    '#f3ffc0',
    '#fdffca',
    '#eeffd8',
    '#f8ffe2',
  ];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  description = description?.split('"').map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });

  return (
    <div
      className={`bg-[${randomColor}] p-5 text-center rounded-2xl shadow-md w-full h-full`}
    >
      <div className='flex items-center justify-end gap-3 mt-2'>
        <button className='p-1 md:p-1.5 lg:p-2 rounded bg-primary-500 hover:bg-primary-700 text-xs md:text-sm lg:text-base text-white'>
          <FaCheck />
        </button>
        <button className='p-1 md:p-1.5 lg:p-2 rounded bg-yellow-500 hover:bg-yellow-700 text-xs md:text-sm lg:text-base text-white'>
          <FaPencilAlt />
        </button>
      </div>
      <p className='py-2 px-7 bg-white inline-block text-center text-xl font-semibold rounded-[10px]'>
        {name}
      </p>
      <div className='bg-white p-5 mt-3'>
        <table className='text-[#777777] font-semibold'>
          <tbody>
            <tr>
              <td className='text-left'>Tanggal</td>
              <td className='px-3 py-1.5'>:</td>
              <td className='text-left'>{date}</td>
            </tr>
            <tr>
              <td className='text-left'>Waktu</td>
              <td className='px-3 py-1.5'>:</td>
              <td className='text-left'>{time}</td>
            </tr>
            {duration && (
              <tr>
                <td className='text-left'>Durasi</td>
                <td className='px-3 py-1.5'>:</td>
                <td className='text-left'>{duration}</td>
              </tr>
            )}
            <tr>
              <td className='text-left align-top'>Rincian</td>
              <td className='px-3 align-top'>:</td>
              <td className='text-left align-top'>{description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type='button'
        className='py-1 px-4 rounded-full bg-primary-500 hover:bg-primary-800 text-white mt-5'
      >
        Simpan
      </button>
    </div>
  );
};

export default WeeklyPlanCard;
