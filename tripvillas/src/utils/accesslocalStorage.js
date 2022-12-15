function loadData(key) {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (err) {
    console.log(err);
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { saveData, loadData };
