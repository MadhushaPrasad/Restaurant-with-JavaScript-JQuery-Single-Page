$(function () {
    $('#tblDiv01 ,#tblDiv02 ,#tblDiv').fadeOut(1);
    <!--CustomerForm-->
    $('#section01').css('display', 'none');
    $('#section02').css('display', 'none');
    $('#section03').css('display', 'none');


    $('#customer').click(function () {
        $('#section0 , #section00, #section02, #section03').css('display', 'none');
        $('#section01').css('display', 'block');
    });
    $('#item').click(function () {
        $('#section0 , #section00 ,#section01, #section03').css('display', 'none');
        $('#section02').css('display', 'block');
    });
    $('#orders').click(function () {
        $('#section0 , #section00 , #section01 , #section02').css('display', 'none');
        $('#section03').css('display', 'block');
    });


    $('#cusTxt, #AgeTxt, #txtTP, #SalaryTxt, #SaveCustomer').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $(this).next().focus();
            // alert("Hi its work Bro!!");
        }
    });
});


function addCustomer() {
    var customerID = $('#cusTxt').val();
    var customerAge = $('#AgeTxt').val();
    var customerTP = $('#txtTP').val();
    var customerSalary = $('#SalaryTxt').val();

    var c1 = new CustomerDTO(customerID, customerAge, customerTP, customerSalary);
    customerTable.push(c1);
}

function updateCustomer() {
    if($('#cusTxt , #AgeTxt , #txtTP , #SalaryTxt').val()!==""){
        var customerID = $('#cusTxt').val();
        var customerAge = $('#AgeTxt').val();
        var customerTP = $('#txtTP').val();
        var customerSalary = $('#SalaryTxt').val();

        var c1 = new CustomerDTO(customerID, customerAge, customerTP, customerSalary);
        customerTable.push(c1);
    }else{
        alert("Please input your data...")
    }
}
//
// function deleteCustomer() {
// }
//
function searchCustomer() {

    let searchCus = $('#inputSearchCustomer').val();
    if (searchCus == '') {
        alert("Please input your Customer ID or Customer Name or TP...");
    }
    else {

    }
}

function getAllCustomer() {
    $('#tblBody').empty();
    for (var i in customerTable) {
        var customerID = customerTable[i].getCustomerID();
        var customerAge = customerTable[i].getCustomerAge();
        var customerTP = customerTable[i].getCustomerTP();
        var customerSallary = customerTable[i].getCustomerSallery();

        let tblRow = "<tr>" + "<td>" + customerID + "</td>" + "<td>" + customerAge + "</td>" + "<td>" + customerTP + "</td>" + "<td>" + customerSallary + "</td>" + "</tr>";
        $('#tblBody').append(tblRow);
    }
}

//
var a = true;
$('#SaveCustomer').click(function () {
    addCustomer();
    getAllCustomer();
    $('#cusTxt , #AgeTxt , #txtTP , #SalaryTxt').val("");
    if (a) {
        $('#tblDiv01').slideToggle(2000);
        a = false;
    }
});

$('#searchCustomer').click(function () {
    searchCustomer();
});

$('#btnEdit').click(function () {

})
