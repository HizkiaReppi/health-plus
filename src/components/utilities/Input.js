const Input = ({ type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className='h-12 border focus:border-primary-500 border-[#666666] border-opacity-25 bg-white placeholder:text-[#E6E6E6] py-2 px-3 rounded-[4px]'
      {...props}
    />
  );
};

export default Input;
