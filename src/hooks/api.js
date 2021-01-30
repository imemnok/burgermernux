
const baseUri = ""
export const postFetch = (path,object) => {
    console.log(path)
    console.log(object)
   const uri = baseUri + path
   fetch(uri, {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(object)
   })
   .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
}

export const patchFetch = (path,object) => {
    console.log(path)
    console.log(object)
   const uri = baseUri + path
   fetch(uri, {
       method: "PATCH",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(object)
   })
   .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
}