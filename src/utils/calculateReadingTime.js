export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;

  // Menghitung jumlah kata dalam konten
  const words = content.replace(/<\/?[^>]+(>|$)/g, '').split(/\s+/).length;

  // Menghitung estimasi waktu baca dalam menit
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);

  return readingTimeMinutes;
};
