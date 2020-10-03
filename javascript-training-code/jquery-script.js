// pure vanilla JS
// function bodyOnLoad() {
//   var btn = document.getElementById("myBtn");
//   btn.addEventListener("click", function () {
//     console.log("BUTON CLICKED");
//   });
// }


// with JQUERY
$(document).ready(function () {
  $("#myBtn").click(function () {
    $(this).hide();
  });
});


// assignment 
// step 1 : use this API :  'https://reqres.in/api/users?page=2';
// step 2 : use Jquery $.ajax() method to fetch backend data 
// step 3 : construct HTML table based on the response 

const userListAPI = 'https://reqres.in/api/users?page=2';
fetch(userListAPI)
.then(function(response){
   const responsePromise = response.json();
   responsePromise.then(function(data){
     const userListData = data.data;
     generateTable(userListData);
   })
   .catch(function(error){
    console.log('Promise data-->', error);
   })
})
.catch(function(error){
    console.log('Error', error);
})
function generateTable(arr){
    if(arr.length === 0){
        return;
    }
    const tableHolder = document.getElementById('table-Holder');
    const colNames = ['ID','First Name', 'Last Name' ,'Email', 'Picture'];
    const table = document.createElement('table');
    table.setAttribute('class','table table-striped');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // generate columns 
    for(var i = 0; i<colNames.length;i++){
        const colName = colNames[i];
        const th = document.createElement('th');
        th.innerText = colName;
        thead.appendChild(th);
        table.appendChild(thead);
    }

    // generate rows 
    for(var i=0;i<arr.length;i++){
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const eachUser = arr[i];

        for(var key in eachUser){
          
            // detect image URL 
            if(key === 'avatar'){
                const img = document.createElement('img');
                img.setAttribute('class','my-img');
                img.src  = eachUser[key];
                tr.appendChild(img);
            }else {
                const td = document.createElement('td');
                td.innerText = eachUser[key];
                tr.appendChild(td);
            }
            
        }
    }
    tableHolder.appendChild(table);
}