'use client';
import Button from '@/components/utilities/Button';
import React from 'react';
import { useAuth } from '../../providers';
import { useRouter } from 'next/navigation';

export default function PertanyaanPage() {
  const { token } = useAuth();

  const router = useRouter();

  if (!token) {
    router.push('/masuk');
    return null;
  }

  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalData, setTotalData] = React.useState(0);
  const [questionPerPage, setQuestionPerPage] = React.useState(5);
  const [tempAnswer, setTempAnswer] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/v1/questions?page=${currentPage}&limit=${questionPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        setQuestions(data.data);
        setTotalPages(data.meta.totalPage);
        setTotalData(data.meta.totalData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleAnswerChange = (questionId, value) => {
    setTempAnswer((prevTempAnswer) => ({
      ...prevTempAnswer,
      [questionId]: value,
    }));
  };

  const handleBackButtonClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      router.push('/cek-kebiasaan/hasil');
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan jawaban!');
    } finally {
      setLoading(false);
    }
  };

  const currentIndex = currentPage * questionPerPage;
  const allQuestionsAnswered = Object.keys(tempAnswer).length === currentIndex;

  return (
    <>
      <div className='flex flex-col mx-auto w-72 md:w-96 lg:w-[500px] xl:w-[750px]'>
        <div className='flex justify-center items-center gap-4 mt-10'>
          <div className='h1 md:h-2 w-full bg-gray-300 rounded-full'>
            <div
              className='h-1 md:h-2 bg-primary-800 rounded-full'
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className='text-right'>
          <span className='text-xs md:text-sm font-semibold text-gray-400'>
            {Object.keys(tempAnswer).length}/{totalData} Pertanyaan Terjawab
          </span>
        </div>
      </div>
      <div className='px-10 md:px-16 pt-14 md:pt-16 lg:pt-20 pb-6 md:pb-10 lg:pb-16'>
        {questions?.map((question) => {
          const questionId = question.id;
          const categoryAnswers = [];
          categoryAnswers.push(tempAnswer[questionId]);

          return (
            <div
              key={question.id}
              className='flex flex-col content-center mb-14 md:mb-16 lg:mb-20'
            >
              <label
                htmlFor={questionId}
                className='text-base md:text-lg lg:text-2xl xl:text-3xl font-semibold text-center'
              >
                {question.question}
              </label>
              <div className='flex items-center justify-center gap-x-6 md:gap-x-12 mt-8 md:mt-10 lg:mt-14'>
                <span className='text-sm md:text-base lg:text-lg xs:text-xl font-semibold text-red-500'>
                  {question.options[0]}
                </span>
                <input
                  type='radio'
                  className={`w-[45px] h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px] text-[#EF4444] border-[#EF4444] focus:ring-[#EF4444] focus:ring-2`}
                  id={`question-${questionId}`}
                  name={questionId}
                  value='-2'
                  onChange={() => handleAnswerChange(questionId, -2)}
                  checked={categoryAnswers?.includes(-2)}
                  required
                />
                <input
                  type='radio'
                  className={`w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] text-[#F87171] border-[#F87171] focus:ring-[#F87171] focus:ring-2`}
                  id={`question-${questionId}`}
                  name={questionId}
                  value='-1'
                  onChange={() => handleAnswerChange(questionId, -1)}
                  checked={categoryAnswers?.includes(-1)}
                  required
                />
                <input
                  type='radio'
                  className={`w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px] text-[#9CA3AF] border-[#9CA3AF] focus:ring-[#9CA3AF] focus:ring-2`}
                  id={`question-${questionId}`}
                  name={questionId}
                  value='0'
                  onChange={() => handleAnswerChange(questionId, 0)}
                  checked={categoryAnswers?.includes(0)}
                  required
                />
                <input
                  type='radio'
                  className={`w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] text-[#60A5FA] border-[#60A5FA] focus:ring-[#60A5FA] focus:ring-2`}
                  id={`question-${questionId}`}
                  name={questionId}
                  value='1'
                  onChange={() => handleAnswerChange(questionId, 1)}
                  checked={categoryAnswers?.includes(1)}
                  required
                />
                <input
                  type='radio'
                  className={`w-[45px] h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px] text-[#3B82F6] border-[#3B82F6] focus:ring-[#3B82F6] focus:ring-2`}
                  id={`question-${questionId}`}
                  name={questionId}
                  value='2'
                  onChange={() => handleAnswerChange(questionId, 2)}
                  checked={categoryAnswers?.includes(2)}
                  required
                />
                <span className='text-sm md:text-base lg:text-lg xs:text-xl font-semibold text-[#3B82F6]'>
                  {question.options[question.options.length - 1]}
                </span>
              </div>
            </div>
          );
        })}
        <div className='flex justify-center items-center gap-10 mt-8'>
          {currentPage !== 1 && (
            <Button outline={true} onClick={handleBackButtonClick}>
              Sebelumnya
            </Button>
          )}
          {currentPage !== totalPages && (
            <Button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
              Berikutnya
            </Button>
          )}
          {currentPage === totalPages && (
            <Button
              className={`${
                allQuestionsAnswered
                  ? ''
                  : 'opacity-50 cursor-not-allowed disabled:bg-primary-800'
              }`}
              disabled={!allQuestionsAnswered || loading}
              onClick={handleSubmit}
            >
              {loading && (
                <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
              )}
              Lihat Hasil
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
