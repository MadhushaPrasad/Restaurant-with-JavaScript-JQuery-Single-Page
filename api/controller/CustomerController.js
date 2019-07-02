$('#tblDiv01 ,#tblDiv02 ,#tblDiv').fadeOut(1);
// < !--CustomerForm-->
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

$('#custNIC,#cusTxt,#addressTxt,#txtTP,#SalaryTxt').on('keypress', function (e) {
    if (e.keyCode == 13) {
        if ($('#custNIC').val() == "") {
            $('#custNIC').focus();
        }
        else if ($('#cusTxt').val() == "") {
            $('#cusTxt').focus();
        } else if ($('#addressTxt').val() == "") {
            $('#addressTxt').focus();
        } else if ($('#txtTP').val() == "") {
            $('#txtTP').focus();
        } else if ($('#SalaryTxt').val() == "") {
            $('#SalaryTxt').focus();
        } else {
            $(this).next().focus();
        }
        // alert("Hi its work Bro!!");
    }
});


function addCustomer(customerNIC, customerName, customerAddress, customerTP, customerSalary) {
    // var customernic = customerNIC;
    // var cname = customerName;
    // var caddress = customerAddress;
    // var tele = customerTP;
    // var salary = customerSalary;

    // var customernic = $('#custNIC').val();
    // var cname = $('#cusTxt').val();
    // var caddress = $('#addressTxt').val();
    // var tele = $('#txtTP').val();
    // var salary = $('#SalaryTxt').val();


    var c1 = new CustomerDTO(customerNIC, customerName, customerAddress, customerTP, customerSalary);
    console.dir(c1);
    customerTable.push(c1);
}

function updateCustomer(customerNIC, customerName, customerAddress, customerTP, customerSalary) {
    var c1 = new CustomerDTO(customerNIC, customerName, customerAddress, customerTP, customerSalary);
    customerTable.push(c1);
}

function deleteCustomer(customerNIC) {
    var c1 = new CustomerDTO(customerNIC, customerName, customerAddress, customerTP, customerSalary);
    customerTable.push(c1);
}

function searchCustoer(customerNIC) {
    var c1 = new CustomerDTO(customerNIC, customerName, customerAddress, customerTP, customerSalary);
    customerTable.push(c1);
}


function getAllCustomer() {
    $('#tblBody').empty();
    for (var i in customerTable) {
        var customernic = customerTable[i].getCustomerNic();
        var customername = customerTable[i].getCustomerName();
        var customeraddress = customerTable[i].getCustomerAddress();
        var customertp = customerTable[i].getCustomerTP();
        var customersalary = customerTable[i].getCustomerSallery();
        let tableRow = "<tr>" +
            "<td>" + customernic + "</td>" +
            "<td>" + customername + "</td>" +
            "<td>" + customeraddress + "</td>" +
            "<td>" + customertp + "</td>" +
            "<td>" + customersalary + "</td>" +
            "</tr>";
        $('#tblBody').append(tableRow);
    }
}
//
var a = true;
$('#SaveCustomer').click(function () {
    var customernic = $('#custNIC').val();
    var cname = $('#cusTxt').val();
    var caddress = $('#addressTxt').val();
    var tele = $('#txtTP').val();
    var salary = $('#SalaryTxt').val();
    console.log(customernic, cname, caddress, tele, salary);
    addCustomer(customernic, cname, caddress, tele, salary);
    getAllCustomer();
    clearTextField();
    if (a) {
        $('#tblDiv01').slideToggle(2000);
        a = false;
    }
});

function clearTextField() {
    $('#custNIC').val("");
    $('#cusTxt').val("");
    $('#addressTxt').val("");
    $('#txtTP').val("");
    $('#SalaryTxt').val("");
}
