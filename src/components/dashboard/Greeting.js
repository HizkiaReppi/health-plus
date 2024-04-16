const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();

  let greeting = '';

  if (hours >= 0 && hours < 11) {
    greeting = 'Selamat Pagi';
  }
  if (hours >= 11 && hours < 14) {
    greeting = 'Selamat Siang';
  }
  if (hours >= 14 && hours < 18) {
    greeting = 'Selamat Sore';
  }
  if (hours >= 18 && hours < 24) {
    greeting = 'Selamat Malam';
    }
    
  return (
    <>
      <h4 className='text-xl md:text-2xl lg:text-3xl italic'>
        Halo, {greeting}
      </h4>
      <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-2'>
        Hizkia Reppi
      </h3>
    </>
  );
};

export default Greeting;
