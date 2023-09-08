
//    var submitbtn=document.getElementById("submit");
//     submitbtn.addEventListener('click',function(){
      
//     var sno = document.getElementById("sno").value;
//     var shipmentMode = document.getElementById("shipmentmode").value;
//     var poNumber = document.getElementById("ponumber").value;
//     var supplierName = document.getElementById("suppliername").value;
//     var consignee = document.getElementById("consignee").value;
//     var materialPickDt = document.getElementById("materialpickdt").value;
//     var actualPickupDt = document.getElementById("actualpickupdt").value;
//     var etd = document.getElementById("etd").value;
//     var actualEtd = document.getElementById("actualetd").value;
//     var eta = document.getElementById("eta").value;
//     var actualEta = document.getElementById("actualeta").value;
//     var origin = document.getElementById("origin").value;
//     var portOfLoading = document.getElementById("portofloading").value;
//     var sizeOfContainers = document.getElementById("sizeofcontainers").value;
//     var noOfContainers = document.getElementById("noofcontainer").value;
//     var containerNumbers = document.getElementById("containernumbers").value;
//     var mblNumber = document.getElementById("mblnumber").value;
//     var hblNumber = document.getElementById("hblnumber").value;
//     var nameOfShippingLiner = document.getElementById("nameofshippingliner").value;
//     var federVesselName = document.getElementById("federvesselname").value;
//     var federVesselImoNumber = document.getElementById("federvesselimonumber").value;
//     var firstTranshipmentEta = document.getElementById("firsttranshipmenteta").value;
//     var firstTranshipmentEtd = document.getElementById("firsttranshipmentetd").value;
//     var firstTranshipmentPortName = document.getElementById("firsttranshipmentportname").value;
//     var motherVesselName = document.getElementById("mothervesselname").value;
//     var secondTranshipmentEta = document.getElementById("secondtranshipmenteta").value;
//     var secondTranshipmentEtd = document.getElementById("secondtranshipmentetd").value;
//     var secondTranshipmentPortName = document.getElementById("secondtranshipmentportname").value;
//     var secondFederVesselName = document.getElementById("secondfedervesselname").value;
//     var preAlertDtd = document.getElementById("prealertdtd").value;
//     var remarks = document.getElementById("remarks").value;
    
//     if (sno === "" || sno === null) {
//         alert("Serial No is required");
//     } else if (shipmentMode === "" || shipmentMode === null) {
//         alert("Shipment Mode is required");
//     } else if (poNumber === "" || poNumber === null) {
//         alert("PO Number is required");
//     } else if (supplierName === "" || supplierName === null) {
//         alert("Supplier Name is required");
//     } else if (consignee === "" || consignee === null) {
//         alert("Consignee is required");
//     } else if (materialPickDt === "" || materialPickDt === null) {
//         alert("Material Pickup Date is required");
//     } else if (actualPickupDt === "" || actualPickupDt === null) {
//         alert("Actual Pickup Date is required");
//     } else if (etd === "" || etd === null) {
//         alert("ETD is required");
//     } else if (actualEtd === "" || actualEtd === null) {
//         alert("Actual ETD is required");
//     } else if (eta === "" || eta === null) {
//         alert("ETA is required");
//     } else if (actualEta === "" || actualEta === null) {
//         alert("Actual ETA is required");
//     } else if (origin === "" || origin === null) {
//         alert("Country Of Origin is required");
//     } else if (portOfLoading === "" || portOfLoading === null) {
//         alert("Port Of Loading is required");
//     } else if (sizeOfContainers === "" || sizeOfContainers === null) {
//         alert("Size Of Containers is required");
//     } else if (noOfContainers === "" || noOfContainers === null) {
//         alert("No Of Container is required");
//     } else if (containerNumbers === "" || containerNumbers === null) {
//         alert("Container Numbers is required");
//     } else if (mblNumber === "" || mblNumber === null) {
//         alert("MBL Number is required");
//     } else if (hblNumber === "" || hblNumber === null) {
//         alert("HBL Number is required");
//     } else if (nameOfShippingLiner === "" || nameOfShippingLiner === null) {
//         alert("Name Of Shipping Liner is required");
//     } else if (federVesselName === "" || federVesselName === null) {
//         alert("1st Feder Vessel Name is required");
//     } else if (federVesselImoNumber === "" || federVesselImoNumber === null) {
//         alert("1st Feder Vessel IMO Number is required");
//     } else if (firstTranshipmentEta === "" || firstTranshipmentEta === null) {
//         alert("1st Transhipment ETA is required");
//     } else if (firstTranshipmentEtd === "" || firstTranshipmentEtd === null) {
//         alert("1st Transhipment ETD is required");
//     } else if (firstTranshipmentPortName === "" || firstTranshipmentPortName === null) {
//         alert("1st Transhipment Port Name is required");
//     } else if (secondTranshipmentEta === "" || secondTranshipmentEta === null) {
//         alert("2nd Transhipment ETA is required");
//     } else if (secondTranshipmentEtd === "" || secondTranshipmentEtd === null) {
//         alert("2nd Transhipment ETD is required");
//     } else if (secondTranshipmentPortName === "" || secondTranshipmentPortName === null) {
//         alert("2nd Transhipment Port Name is required");
//     } else if (secondFederVesselName === "" || secondFederVesselName === null) {
//         alert("2nd Feder Vessel Name is required");
//     } else if (preAlertDtd === "" || preAlertDtd === null) {
//         alert("Pre Alert/DTD is required");
//     } else if (remarks === "" || remarks === null) {
//         alert("Remarks is required");
//     } else {
//         alert("Form Submitted Successfully!!!");
//         // document.getElementById("myForm").reset();
//     }
// });

$(document).ready(function() {
    // Function to update the progress bar
    function updateProgress() {
        const totalFields = $('form#myForm input').length;
        const filledFields = $('form#myForm input').filter(function() {
            return $.trim(this.value).length > 0;
        }).length;
        const progress = (filledFields / totalFields) * 100;
        $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text(Math.round(progress) + '%');
    }

    // Initialize the progress bar
    updateProgress();

    // Listen for changes on input fields to update the progress bar
    $('form#myForm input').on('input', function() {
        updateProgress();
    });

    // Form submission
    $('#myForm').on('submit', function(event) {
        event.preventDefault();
        // Your validation logic here
        // Serialize form data
        // Initialize an empty payload object
        const payload = {};

        // Loop through each input field and populate the payload object
        $('form#myForm input').each(function() {
            const fieldId = $(this).attr('id');
            const fieldValue = $(this).val();
            if (fieldId && fieldValue.trim() !== '') {
                payload[fieldId] = fieldValue;
            }
        });

        // Log the payload object to the console
        console.log('Payload:', payload);
    alert("Form Submitted Successfully!!!");
    });
});


  