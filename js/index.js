var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var Submit = document.getElementById("Submit");
var error = document.getElementById("error");
var container;

if (localStorage.Urls != null) {
    container = JSON.parse(localStorage.Urls);
    display();
} else {
    container = [];
}

Submit.onclick = function () {
    if (validateAllInput(siteName) && validateAllInput(siteUrl)) {
        var inputs = {
            name: siteName.value.trim(),
            url: formatURL(siteUrl.value.trim())
        };

        container.push(inputs);

        localStorage.setItem("Urls", JSON.stringify(container));

        display();
        clear();
    } else {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Something went wrong!",
         footer: '<a href="#">Why do I have this issue?</a>'
       });
    }
};

function display() {
    var cartona = "";

    for (var i = 0; i < container.length; i++) {
        cartona += `
            <tr class="border border-bottom">
                <td>${i + 1}</td>
                <td class="cap">${container[i].name}</td>
                <td>
                    <a href="${container[i].url}" target="_blank" class="btn btn-success mt-2">
                        <i class="fa-regular fa-eye"></i> Visit
                    </a>
                </td>
                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-danger mt-2">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `;
    }
    document.getElementById("car").innerHTML = cartona;
}

function deleteProduct(index) {
    container.splice(index, 1);
    localStorage.setItem("Urls", JSON.stringify(container));
    display();
}

function clear() {
    siteName.value = null;
    siteUrl.value = null;
    siteName.classList.remove("is-valid", "is-invalid");
    siteUrl.classList.remove("is-valid", "is-invalid");
}

function validateAllInput(element) {
    var regex = {
        siteName: /^[a-zA-Z0-9]{3,}$/,
        siteUrl: /^(https?:\/\/)?[a-zA-Z0-9-]+(\.[a-zA-Z]+)+.*$/
    };

    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        return false;
    }
}

function formatURL(url) {
    if (!/^https?:\/\//.test(url)) {
        url = "https://" + url;
    }
    return url;
    
   }








// // // Create product

// let title = document.getElementById("title");
// let price = document.getElementById("price");
// let takes = document.getElementById("takes");
// let ads = document.getElementById("ads");
// let discount = document.getElementById("discount");
// let total = document.getElementById("total");
// let count = document.getElementById("count");
// let category = document.getElementById("category");
// let Submit = document.getElementById("Submit");

// if (localStorage.products != null) {
//   dataPro = JSON.parse(localStorage.products);
//   showData()
// } else {
//   dataPro = [];
//   showData()
// }

// function getTotal() {
//   if (price.value != "") {
//     var result = +price.value + +takes.value + +ads.value - discount.value;
//     total.innerHTML = result;
//     total.style.background = "green";
//   } else {
//     total.innerHTML = "";
//     total.style.background = "red";
//   }
// }

// Submit.onclick = function () {
//   let newPro = {
//     title: title.value,
//     price: price.value,
//     takes: takes.value,
//     ads: ads.value,
//     discount: discount.value,
//     total: total.innerHTML,
//     count: count.value,
//     category: category.value,
//   };
//   dataPro.push(newPro);
//   localStorage.setItem("products", JSON.stringify(dataPro));
//   console.log(dataPro);
//   showData();
//   clear();
// };

// function clear() {
//   title.value = null;
//   price.value = null;
//   takes.value = null;
//   ads.value = null;
//   discount.value = null;
//   total.innerHTML = null;
//   count.value = null;
//   category.value = null;
// }

// function showData() {
//   let table = ``;
//   for (var i = 1; i < dataPro.length; i++) {
//     table +=`
//             <tr>
//               <td>${[i]}</td>
//               <td>${dataPro[i].title}</td>
//               <td>${dataPro[i].price}</td>
//               <td>${dataPro[i].takes}</td>
//               <td>${dataPro[i].ads}</td>
//               <td>${dataPro[i].discount}</td>
//               <td>${dataPro[i].total}</td>
//               <td>${dataPro[i].category}</td>
//               <td><button>update</button></td>
//               <td><button>delete</button></td>
//             </tr>
//      `;
//   }
//   document.getElementById("my-tbody").innerHTML = table;
// }
