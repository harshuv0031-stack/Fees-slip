// Today's date automatically set
document.getElementById("date").valueAsDate = new Date();


function generateSlip() {

    // Get student details
    const name =
        document.getElementById("studentName").value.trim();

    const roll =
        document.getElementById("rollNo").value.trim();

    const date =
        document.getElementById("date").value;


    // Get amount values
    const fee =
        Number(document.getElementById("feeAmount").value) || 0;

    const due =
        Number(document.getElementById("dueAmount").value) || 0;

    const external =
        Number(document.getElementById("externalCharge").value) || 0;


    // Validation
    if (name === "") {

        alert("Please enter student's name.");

        return;
    }


    if (roll === "") {

        alert("Please enter roll number.");

        return;
    }


    // Calculate total amount
    const total = fee + due + external;


    // Show student name
    document.getElementById("showName").textContent =
        name;


    // Show roll number
    document.getElementById("showRoll").textContent =
        roll;


    // Format date
    if (date !== "") {

        const dateObject = new Date(date);

        const formattedDate =
            String(dateObject.getDate()).padStart(2, "0") +
            "/" +
            String(dateObject.getMonth() + 1).padStart(2, "0") +
            "/" +
            dateObject.getFullYear();

        document.getElementById("showDate").textContent =
            formattedDate;

    } else {

        document.getElementById("showDate").textContent =
            "-";
    }


    // Show amounts
    document.getElementById("showFee").textContent =
        fee.toFixed(2);

    document.getElementById("showDue").textContent =
        due.toFixed(2);

    document.getElementById("showExternal").textContent =
        external.toFixed(2);

    document.getElementById("showTotal").textContent =
        total.toFixed(2);


    // Show fees slip
    document.getElementById("feesSlip").style.display =
        "block";


    // Show print button
    document.getElementById("printButton").style.display =
        "block";


    // Scroll to slip
    document.getElementById("feesSlip").scrollIntoView({
        behavior: "smooth"
    });
}



function resetForm() {

    // Clear fields
    document.getElementById("studentName").value = "";

    document.getElementById("rollNo").value = "";

    document.getElementById("feeAmount").value = "";

    document.getElementById("dueAmount").value = "";

    document.getElementById("externalCharge").value = "";


    // Reset date
    document.getElementById("date").valueAsDate =
        new Date();


    // Hide slip
    document.getElementById("feesSlip").style.display =
        "none";


    // Hide print button
    document.getElementById("printButton").style.display =
        "none";
}