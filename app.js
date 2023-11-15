const form = document.getElementById("myForm");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log("Form submitted with values:");
        alert("Form submitted with values:");
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      });