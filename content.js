const url = "https://api.pexels.com/v1/photos/2014422";

const apiKey = "NbFoOQvpX9BWJLEVYjiL24Fx4eLrruaM7s62HeU4SpyXqpkgvwfVdO2l";

fetch(url, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const photo = data;
    photoData(photo);
  });

const photoData = (value) => {
  console.log(value);
};
