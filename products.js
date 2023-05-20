let tableHeaderHTML = `<table class="table table-hover table-bordered ">
       <th>Reviewed Company<br />
        <input type="text" id="txtReviewedCompany"   onblur="filterReviewedCompany(event)" /></th>
        <th>Reviewed date<br />
          <input type="text" id="txtReviewdDate"   onblur="filterReviewdDate(event)"/></th>
          <th>Contant<br />
        <input type="text" id="txtContant"   onblur="filterContent(event)" /></th>
        <th>Verified<br />
        <input type="text" id="txtVerified"   onblur="filterVerified(event)" /></th>
        <th>Rating<br/>
        <input type="text" id="txtRating"   onblur="filterRating(event)"/></th>
        <th>Review Page<br/>
        <input type="text" id="txtReviewpage"   onblur="filterReviewPage(event)"/></th>

        `;

        function filterReviewedCompany(event){
           let searchText = event.target.value;
          filteredArray = fashionProducts.filter(function(arrayItem){return checkReviewedCompany(arrayItem, searchText)});
          renderData(filteredArray);
       }
      
       function checkReviewedCompany(arrayItem, searchText){
        if(arrayItem.reviewed_by)
          return arrayItem.reviewed_by.includes(searchText);
        else
          return false;
       }


       function filterReviewedDate(event){
        let searchText = event.target.value;
       filteredArray = fashionProducts.filter(function(arrayItem){return checkReviewedDate(arrayItem, searchText)});
       renderData(filteredArray);
    }

    function checkReviewedDate(arrayItem, searchText){
       return arrayItem.reviewed_at.includes(searchText);
    }


    function filterContent(event){
      let searchText = event.target.value;
     filteredArray = fashionProducts.filter(function(arrayItem){return checkContent(arrayItem, searchText)});
     renderData(filteredArray);
  }
 
  function checkContent(arrayItem, searchText){
     return arrayItem.content.includes(searchText);
  }


  function filterVerified(event){ 
    let searchText = event.target.value;
   filteredArray = fashionProducts.filter(function(arrayItem){return checkVerified(arrayItem, searchText)});
   renderData(filteredArray);
}

function checkVerified(arrayItem, searchText){
   return arrayItem.verified.includes(searchText);
}


function filterRating(event){   
  let searchText = event.target.value;
 filteredArray = fashionProducts.filter(function(arrayItem){return checkRating(arrayItem, searchText)});
 renderData(filteredArray);
}

function checkRating(arrayItem, searchText){
 return arrayItem.rating.includes(searchText);
}

      
function filterReviewPage(event){   
  let searchText = event.target.value;
 filteredArray = fashionProducts.filter(function(arrayItem){return checkReviewPage(arrayItem, searchText)});
 renderData(filteredArray);
}

function checkReviewPage(arrayItem, searchText){
 return arrayItem.review_page_url.includes(searchText);
}

      
       


       function displayAdditionalDetails(arrayItemIndex)
       {
        document.getElementById('rowDetails').innerHTML = `<table class="table table-hover table-bordered border border-warning " >
        <th class="text-primary bg-warning"> Raw Content:</th>
      <th  class="text-primary bg-warning">  Review Page Link:</th>
      <tr>
       <td>  ${filteredArray[arrayItemIndex].raw_content} </td>
       <td><a href="" target="_blank" >   ${filteredArray[arrayItemIndex].review_page_url}</a> </td>
          </table>
       `;
       
    }
   

      function renderData(arrayToProcess)
      {
     
        var tableRowsHTML = '';
        let i=0;  
        for(i=0; i< arrayToProcess.length; i++)
        {
          try
          {
            let rowHTML = `<tr  onclick = "displayAdditionalDetails(${i})" data-bs-toggle="offcanvas" data-bs-target="#demo" >
            <td class="text-wrap">${arrayToProcess[i].reviewed_by}</td>
            <td class="text-wrap">${arrayToProcess[i].reviewed_at}</td> 
            <td class="text-wrap">${arrayToProcess[i].content}</td> 
            <td class="text-wrap">${arrayToProcess[i].verified}</td>    
            <td class="text-wrap">${arrayToProcess[i].rating}</td>
            <td class="text-wrap"><a href="${arrayToProcess[i].review_page_url}" target="_blank"> ${arrayToProcess[i].review_page_url}</a></td>
          </tr>`;
    
          tableRowsHTML += rowHTML;
          document.getElementById('rowsCounts').innerHTML = `Rows processed: ${i+1}`
          }
          catch(ex)
          {
            console.log(`exception in row ${i.toString()} \n ${ex.toString()}`);
          }
          
        }
       fashionProductsHTML =  `${tableHeaderHTML} ${tableRowsHTML} </table>`;
        document.getElementById('fashion_productsDiv').innerHTML = fashionProductsHTML;
        
      }