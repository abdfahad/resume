$(function () {  //Same as document.addEventListener("DOMContentLoaded")...i.e executes when dom has loaded but css has not

    function displayDate(response){

        let date = Date();  //Current Date
        date= (date.toString()).slice(0,15);
        response= response.replace(/{{Date}}/,date);

        document.querySelector("footer").innerHTML= response;
    }

    //HTTP request which will retrive data from date.html, call displayDate with the returned html as string.
    //False Denotes that the returned value is not JSON
    $ajaxUtils.sendGetRequest('date.html',displayDate,false);

});
