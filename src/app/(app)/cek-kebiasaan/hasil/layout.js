import NavAssesment from '@/components/assesment/NavAssesment';

export default function AssesmentResultLayout({ children }) {
  return (
    <>
      <NavAssesment />
      <div>{children}</div>
    </>
  );
}
