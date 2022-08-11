// Step 1
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  const searchValue = document.querySelector(".form-input").value;
  const url=`https://jsonplaceholder.typicode.com/posts?utm_source=searchValue&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&count=25`;
  
  xhr.open("GET", url,false);

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);

      let template = '';
      for (let i = 0; i < response.length; i++) {
        template += `
                      <div style="width: 20%; margin: 1.3em">
                          <img src="/1.png" alt='hello' style="width:100%;border:4px solid grey;border-radius:5px">
                          <h2 style="color:black">${response[i].title}</h2>
                          <p style="color: gray">${response[i].body}</p>
                          
                      </div>
                  `;
      }
  
      document.querySelector("#my-container").style.visibility="visible";
      document.querySelector("#li").style.visibility="visible";
      document.querySelector("#content-word").style.visibility="hidden";
      document.querySelector("#content-word").style.margin="-10%";
      document.querySelector("#contact-content").style.marginTop="5px";
      document.querySelector("#container").innerHTML = template;

    }
  };

  xhr.send();

  
});
