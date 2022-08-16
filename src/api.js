const getData = async (URL) => {
  try {
    const data = await fetch(URL);
    return await data.json();

  } catch(error) {
    console.log(error);
  }
}

export {
  getData,
}