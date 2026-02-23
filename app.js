const condition = true;

const myPromise = new Promise((resolve, reject) => {
  condition ? resolve("Success!") : reject("Failure!");
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();