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
  const [questionPerPage, setQuestionPerPage] = React.useState(5);
  const [tempAnswer, setTempAnswer] = React.useState({});
  const [answer, setAnswer] = React.useState({
    makanan: [],
    aktivitas: [],
    mental: [],
  });

  React.useEffect(() => {
    // jika temp answer ada
    if (Object.keys(tempAnswer).length) {
      Object.entries(tempAnswer).forEach(([questionId, value]) => {
        questions.forEach((question) => {
          if (question.id == questionId) {
            if (question.category === 'DIET') {
              setAnswer((prevAnswer) => ({
                ...prevAnswer,
                makanan: [...prevAnswer.makanan, value],
              }));
            } else if (question.category === 'ACTIVITY') {
              setAnswer((prevAnswer) => ({
                ...prevAnswer,
                aktivitas: [...prevAnswer.aktivitas, value],
              }));
            } else if (question.category === 'MENTAL_HEALTH') {
              setAnswer((prevAnswer) => ({
                ...prevAnswer,
                mental: [...prevAnswer.mental, value],
              }));
            }
          }
        });
      });
    }

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
        console.log(data);
        setQuestions(data.data);
        setTotalPages(data.meta.totalPage);
        console.log({ answer });
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
    try {
      const response = await fetch('http://localhost:3001/api/v1/assesment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          answer,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Jawaban berhasil disimpan!');
      } else {
        alert('Gagal menyimpan jawaban!');
      }
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan jawaban!');
    }
  };

  const currentIndex = currentPage * questionPerPage;
  const allQuestionsAnswered = Object.keys(tempAnswer).length === currentIndex;

  return (
    <>
      <div className='flex justify-center items-center gap-4 mt-10'>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`w-full h-4 rounded-full bg-${
              index + 1 <= currentPage ? 'blue' : 'gray'
            }-500`}
          />
        ))}
      </div>
      <div className='px-10 md:px-16 py-20'>
        {questions?.map((question) => {
          const questionId = question.id;
          const categoryAnswers = [];
          categoryAnswers.push(tempAnswer[questionId]);

          return (
            <div
              key={question.id}
              className='flex flex-col content-center mb-20'
            >
              <label
                htmlFor={questionId}
                className='text-lg md:text-2xl lg:text-3xl font-semibold text-center'
              >
                {question.question}
              </label>
              <div className='flex items-center justify-center gap-x-6 md:gap-x-12 mt-14'>
                <span className='text-base md:text-lg lg:text-xl font-semibold text-red-500'>
                  {question.options[0]}
                </span>
                {question.options.map((option, index) => (
                  <React.Fragment key={index}>
                    <input
                      type='radio'
                      className={`w-[${
                        index === 0
                          ? 55
                          : index === question.options.length - 1
                          ? 55
                          : 30
                      }px] h-[${
                        index === 0
                          ? 55
                          : index === question.options.length - 1
                          ? 55
                          : 30
                      }px] md:w-[${
                        index === 0
                          ? 70
                          : index === question.options.length - 1
                          ? 70
                          : 45
                      }px] md:h-[${
                        index === 0
                          ? 70
                          : index === question.options.length - 1
                          ? 70
                          : 45
                      }px] text-[${
                        index === 0
                          ? '#EF4444'
                          : index === question.options.length - 1
                          ? '#3B82F6'
                          : '#9CA3AF'
                      }] border-[${
                        index === 0
                          ? '#EF4444'
                          : index === question.options.length - 1
                          ? '#3B82F6'
                          : '#9CA3AF'
                      }] focus:ring-[${
                        index === 0
                          ? '#EF4444'
                          : index === question.options.length - 1
                          ? '#3B82F6'
                          : '#9CA3AF'
                      }] dark:focus:ring-[${
                        index === 0
                          ? '#EF4444'
                          : index === question.options.length - 1
                          ? '#3B82F6'
                          : '#9CA3AF'
                      }] focus:ring-2`}
                      id={`question-${index}`}
                      name={questionId}
                      value={index - Math.floor(question.options.length / 2)}
                      onChange={() =>
                        handleAnswerChange(
                          questionId,
                          index - Math.floor(question.options.length / 2)
                        )
                      }
                      checked={categoryAnswers?.includes(
                        index - Math.floor(question.options.length / 2)
                      )}
                      required
                    />
                  </React.Fragment>
                ))}
                <span className='text-base md:text-lg lg:text-xl font-semibold text-[#3B82F6]'>
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
                allQuestionsAnswered ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!allQuestionsAnswered}
              onClick={handleSubmit}
            >
              Lihat Hasil
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
