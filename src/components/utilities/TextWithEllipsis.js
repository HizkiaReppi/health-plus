const TextWithEllipsis = ({ text, wordCount }) => {
  const cleanText = text.replace(/(<([^>]+)>|\r?\n|\r)/gi, '');
  const truncatedText = cleanText.split(' ').slice(0, wordCount).join(' ');
  const showEllipsis = cleanText.split(' ').length > wordCount;

  return (
    <p className='text-[10px] md:text-xs text-justify truncated-text'>
      {truncatedText}
      {showEllipsis && '...'}
    </p>
  );
};

export default TextWithEllipsis;
