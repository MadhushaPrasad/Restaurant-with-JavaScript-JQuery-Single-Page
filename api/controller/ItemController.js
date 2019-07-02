$(function () {
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


    $('#cusTxt, #AgeTxt, #txtTP, #SalaryTxt, #SaveCustomer').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $(this).next().focus();
            // alert("Hi its work Bro!!");
        }
    });
});

function addItem() {
        let itemName = $('#ItemName').val();
        let itemPrice = $('#ItemPrice').val();
        let itemQuantity = $('#ItemQuantity').val();

        var i1= new ItemDTO(itemName,itemPrice,itemQuantity);
        itemTable.push(i1);
}
















// <!--Item Form Start-->
// $('#saveItem').click(function () {

//
//     let tblRow = "<tr>" + "<td>" + itemName + "</td>" + "<td>" + itemPrice + "</td>" + "<td>" + itemAddress + "</td>" + "</tr>";
//     $('#tblBody02').append(tblRow);
//     $('#ItemName,#ItemPrice,ItemQuantity').val("");
//     if (a){
//         $('#tblDiv02').slideToggle(2000);
//         a=false;
//     }
//
//
// });
//
// $('#ItemName, #ItemPrice, #ItemQuantity').on('keypress', function (e) {
//     if (e.keyCode == 13) {
//         $(this).next().focus();
//     }
//     // alert("Hi its work Bro!!")
// });
//
// $('#btnSearchItem').click(function () {
//     let searchCus = $('#inputSearchItem').val();
//     if (searchCus == '') {
//         alert("Please input Item Code or Item Name...");
//     }
//     /*else {
//
//             }*/
// });
// <!--Item Form End-->