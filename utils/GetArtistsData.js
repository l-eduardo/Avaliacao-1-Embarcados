export default function GetAllArtist() {
  let rawData = require('../assets/attractions.json');

  return dataTextToDate(rawData)
}

const dataTextToDate = (data) => {
  for (let item of data) {
    item.startDate = new Date(item.startDate);
  }
  return data;
}