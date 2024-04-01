const DATA = [];

export function loadData() {
  const rawData = require('../assets/attractions.json');
  let sortedAndConvertedData = dataTextToDate(rawData);
  
  for (const data of sortedAndConvertedData) {
    DATA.push(data);
  }
}

export function GetAllArtist() {
  return DATA;
}

const dataTextToDate = (data) => {
  let sortedDate = sortByDate(data)
  for (let item of sortedDate) {
    item.startDate = new Date(parseInt(item.startDate)).toLocaleDateString('pt-BR', { hour:'numeric', minute:'numeric', second:'numeric', hour12:false });
    console.log(item.startDate)
  }

  return sortedDate;
}

const sortByDate = (data) => data.sort((a, b) => a.startDate > b.startDate ? 1 : -1)