const TitleSection = ({ children }) => {
  const firstWord = children?.split(' ')[0];
  const remainingWords = children?.split(' ').slice(1).join(' ');

  return (
    <p className='text-xl font-semibold'>
      <span className='inline-block py-2 px-3 bg-primary-500 text-white rounded-md'>
        {firstWord}
      </span>{' '}
      {remainingWords}
    </p>
  );
};

export default TitleSection;
