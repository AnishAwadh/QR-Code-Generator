let QRImage = document.getElementById("QRImage");
let displayQR = document.getElementById("displayQR");
let QRtext = document.getElementById("QRtext");

let generateQR = () =>{
    if(QRtext.value.length > 0){
        QRImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        displayQR.classList.add("show-img");
    }
    else{ 
        QRtext.classList.add("error");
        setTimeout(() => {
            QRtext.classList.remove("error");
        }, 1000)
    }
    
}