var formEditIndex = -1;
var finaluserlist = [
    {
        fname: "Vijay",
        lname: "Anand",
        dob: "2000-10-20",
        phone: "9876543210",
        email: "vijay@gmail.com",
        status: '1'
    }

];

// this uiRender function will display the initial user table finaluserlist[] during page onload
uiRender(finaluserlist);

//form submission
function handleFormSubmit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status').value;


    var userinput = {
        fname: fname,
        lname: lname,
        dob: dob,
        phone: phone,
        email: email,
        status: status

    }


    if (formEditIndex == -1) {
        finaluserlist.push(userinput);
    } else {
        // alert('user already exists..!!');
        finaluserlist[formEditIndex] = userinput;
    }
    uiRender(finaluserlist);


    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('status').value = '';
    formEditIndex = -1;

}

//form Edit
function handleEdit(i) {
    // console.log (finaluserlist[i]);
    formEditIndex = i;
    // console.log (formEditIndex);
    document.getElementById('fname').value = finaluserlist[i].fname;
    document.getElementById('lname').value = finaluserlist[i].lname;
    document.getElementById('dob').value = finaluserlist[i].dob;
    document.getElementById('phone').value = finaluserlist[i].phone;
    document.getElementById('email').value = finaluserlist[i].email;
    document.getElementById('status').value = finaluserlist[i].status;
}

//form delete
function handleDelete(i) {
    finaluserlist.splice(i, 1);
    uiRender(finaluserlist);
}

//form Clear
function handleFormClear() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('status').value = '';
}

//form Filter
function handleFilter(event) {
    const svalue = event.target.value;
    let sresult = finaluserlist.filter(xyz => xyz.fname.toLowerCase().includes(svalue.toLowerCase()));
    if (svalue.length > 0) {
        uiRender(sresult);
    } else {
        uiRender(finaluserlist);
    }

    // console.log(sresult);
}

// this function is used to display the user table during onload & page submit
function uiRender(user) {

    document.getElementById('finaluserlist').innerHTML = user.map((data, i) =>

        `
        <tr id="userrow">
            <td>${i + 1}</td>
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.dob}</td>
            <td>${data.phone}</td>
            <td>${data.email}</td>
            <td id="userstatus">${data.status}</td>
            <td><button type="button" class="btn btn-sm btn-success" onclick="handleEdit(${i})">Edit</button></td>
            <td><button type="button" class="btn btn-sm btn-danger" onclick="handleDelete(${i})">Delete</button></td>
            </tr>
        `
    )   
//console.log(finaluserlist.length);
    if (document.getElementById('userstatus').innerHTML == '1') {
        //console.log('color');
        document.getElementById('userrow').style.color = "Green";
        document.getElementById('userstatus').innerHTML="Enabled";
    } else {
        document.getElementById('userrow').style.color = "red";
        document.getElementById('userstatus').innerHTML="Disabled";
    }

}

        //  console.log('form submitted', finaluserlist);
