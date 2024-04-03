function formatCurrentDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentHour = String(currentDate.getHours()).padStart(2, '0');
  const currentMinute = String(currentDate.getMinutes()).padStart(2, '0');
  const currentSecond = String(currentDate.getSeconds()).padStart(2, '0');

  const currentDateISO = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}:${currentSecond}.000Z`;
  return new Date(currentDateISO);
}

export const formatTimestamp = (timestamp) => {
  // Mengambil tanggal sekarang
  const currentDate = formatCurrentDate();

  const targetDate = new Date(timestamp);

  // Menghitung selisih waktu dalam milidetik antara tanggal sekarang dan tanggal target
  const timeDifference = currentDate - targetDate;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  // Jika kurang dari 24 jam, tampilkan berapa jam yang lalu
  if (hoursDifference < 24) {
    return `${hoursDifference} jam yang lalu`;
  } else if (daysDifference < 7) {
    return `${daysDifference} hari yang lalu`;
  } else {
    // Jika lebih dari 24 jam, tampilkan tanggal dengan format DD-MM-YYYY
    const day = targetDate.getDate();
    const month = targetDate.getMonth() + 1;
    const year = targetDate.getFullYear();
    return `${day < 10 ? '0' + day : day}-${
      month < 10 ? '0' + month : month
    }-${year}`;
  }
};

export const formatMonth = (timestamp) => {
  const targetDate = new Date(timestamp);

  const day = targetDate.getDate();
  const month = targetDate.toLocaleString('default', { month: 'long' });
  const year = targetDate.getFullYear();

  return `${day < 10 ? '0' + day : day} ${month} ${year}`;
};
