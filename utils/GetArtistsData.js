export default function GetAllArtist() {
  let rawData = require('../assets/attractions.json');

  return dataTextToDate(rawData)
}

const dataTextToDate = (data) => {
  for (let item of data) {
    console.log(item.startDate)
    item.startDate = new Date(parseInt(item.startDate));
  }
  return data;
}