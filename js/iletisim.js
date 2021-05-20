
var uyari = document.getElementsByClassName("uyari");
var inputIsimUygun=false;
var inputSoyadUygun=false;
var inputEmailUygun =false;
var inputTelNoUygun=false;
var inputDogumTarihiUygun=false;
var inputSehirUygun=false;
var inputCinsiyetUygun=false;
var inputCinsiyetUygun=false;
var inputEgitimDuzeyiUygun=false;
var inputBilinenDillerUygun=false;

function funIsim()
{
    var inputIsim = document.getElementById("isim");
    var rakamVarmi=false;
    
   for(var i=0;i <inputIsim.value.length;i++)
   {
    if(!Number.isNaN(Number(inputIsim.value[i]))){rakamVarmi=true;}   
   }

    if(inputIsim.value == "")
    {      
        uyari[0].innerHTML="Bu alan boş bırakılamaz";
        inputIsimUygun=false;
    }else if(rakamVarmi)
    {
        uyari[0].innerHTML="Bu alana rakam girilemez";
        inputIsimUygun=false;
    }else{
         inputIsimUygun = true;
         uyari[0].innerHTML="";
    }   
}

function funSoyad()
{
    var inputSoyad = document.getElementById("soyad");
    var rakamVarmi=false;
    

   for(var i=0;i <inputSoyad.value.length;i++)
   {
    if(!Number.isNaN(Number(inputSoyad.value[i]))){rakamVarmi=true;}   
   }

    if(inputSoyad.value == "")
    {    
        uyari[1].innerHTML="Bu alan boş bırakılamaz";
        inputSoyadUygun=false;
    }else if(rakamVarmi)
    {
        
        uyari[1].innerHTML="Bu alana rakam girilemez";
        inputSoyadUygun = false;
    }else{
        inputSoyadUygun = true;
        uyari[1].innerHTML="";
    }   
}

function funEmail()
{
    var inputEmail = document.getElementById("Email");
    var etIsaretiVarmi=false;
    var etIsaretininDevamiVarmi;
    var kontrol;
    
   for(var i=0;i <inputEmail.value.length;i++)
   {
    if(inputEmail.value[i] == "@"){etIsaretiVarmi=true; kontrol=i;}       
   }

    if(inputEmail.value[kontrol + 1] != null){etIsaretininDevamiVarmi=true;}
    else{etIsaretininDevamiVarmi=false}

    if(inputEmail.value == "")
    {      
        uyari[2].innerHTML="Bu alan boş bırakılmaz";
        inputEmailUygun=false;
    }else if(!etIsaretiVarmi)
    {
        uyari[2].innerHTML="Bu alan @ işareti bulundurmak zorunda";
        inputEmailUygun=false;
    }else if(!etIsaretininDevamiVarmi)
    {
        uyari[2].innerHTML="Bu alan email formatında olmak zorunda";
        inputEmailUygun=false;
    }
    else{
        inputEmailUygun = true;
         uyari[2].innerHTML="";
    }   
}

function funTelNo()
{
    var inputTelNo = document.getElementById("telNo");
    var harfVarmi=false;
    
   for(var i=0;i <inputTelNo.value.length;i++)
   {
    if(Number.isNaN(Number(inputTelNo.value[i]))){harfVarmi=true;}   
   }

    if(inputTelNo.value == "")
    {      
        uyari[3].innerHTML="Bu alan boş bırakılamaz";
        inputTelNoUygun=false;
    }else if(harfVarmi)
    {
        uyari[3].innerHTML="Bu alana harf girilemez";
        inputTelNoUygun=false;
    }else if(!(inputTelNo.value.length == 11))
    {
        uyari[3].innerHTML="11 hane girmelisiniz";
        inputTelNoUygun=false;
    }
    else{
        inputTelNoUygun = true;
         uyari[3].innerHTML="";
    }   
}

function funDogumTarihi()
{
    var inputDogumTarihi = document.getElementById("dogumTarihi");
    
    var tarih = new Date();
    
    var buYil = Number(tarih.getFullYear());
    var buAy = Number(tarih.getMonth()) + 1;
    var buGun = Number(tarih.getUTCDate());
    
    var dizi = inputDogumTarihi.value.split("-");
     
    // alert(dizi[0]);
    if(inputDogumTarihi.value == "")
    {
        uyari[4].innerHTML="Bu alan boş geçilemez";
        inputDogumTarihiUygun=false;
    }else if(Number(dizi[0]) >= buYil)
    {
        if(Number(dizi[0]) == buYil)
        {
            if(Number(dizi[1]) >= buAy)
            {
                if(Number(dizi[1]) == buAy)
                {
                    if(Number(dizi[2]) > buGun)
                    {
                        uyari[4].innerHTML="Belirlediğiniz Tarih Doğum Gününüz Olamaz";
                        inputDogumTarihiUygun=false; 
                    }else{
                         uyari[4].innerHTML="";
                       inputDogumTarihiUygun=true;
                    }
                }else{
                    alert("ds")
                    uyari[4].innerHTML="Belirlediğiniz Tarih Doğum Gününüz Olamaz";
                    inputDogumTarihiUygun=false; 
                }
            }else
            {
                
                uyari[4].innerHTML="";
                inputDogumTarihiUygun=true;
            }
                       
        }else{
            uyari[4].innerHTML="Belirlediğiniz Tarih Doğum Gününüz Olamaz";
            inputDogumTarihiUygun=false; 
        }
    }
    else{
        uyari[4].innerHTML="";
        inputDogumTarihiUygun=true;
    }
}

function a(){ 
    inputIsimUygun=false;
     inputSoyadUygun=false;
     inputEmailUygun =false;
     inputTelNoUygun=false;
     inputDogumTarihiUygun=false;
    }

function funSehir()
{
    var inputSehir = document.getElementById("sehir");
    
    
    if(inputSehir.value == "")
    {      
        uyari[5].innerHTML="Bu alan boş bırakılamaz";
        inputSehirUygun=false;
    }else{
        inputSehirUygun = true;
         uyari[5].innerHTML="";
    } 
}

function funCinsiyet()
{
    var inputCinsiyetE = document.getElementById("erkek");
    var inputCinsiyetK = document.getElementById("kadin");

    if(inputCinsiyetE.value != "" || inputCinsiyetK.value !="")
    {      
        inputCinsiyetUygun = true;
         uyari[6].innerHTML="";
    }
    
}

function funEgitimDuzeyi()
{
    var inputEgitimDuzeyi = document.getElementById("egitimDuzeyi");



    if(inputEgitimDuzeyi.value == "")
    {      
        uyari[9].innerHTML="Bu alan boş bırakılamaz";
        inputEgitimDuzeyiUygun=false;
    }else{
        
        inputEgitimDuzeyiUygun = true;
        uyari[9].innerHTML="";
   } 
}

function funBilinenDiller()
{
    var inputBilinenDiller = document.getElementById("bilinenDiller");
    
    if(inputBilinenDiller.value == "")
    {      
        
        uyari[10].innerHTML="Bu alan boş bırakılamaz";
        inputBilinenDillerUygun=false;
    }else if(Number(inputBilinenDiller.value) < 0)
    {
        uyari[10].innerHTML="Bu alana 0'dan küçük rakamlar girilemez.";
        inputBilinenDillerUygun=false;
    }
    else{
        inputBilinenDillerUygun = true;
        uyari[10].innerHTML="";
    }

}

var intervall = window.setInterval(
    function()
{
    
   var butonGonder = document.getElementById("butonGonder");
   //alert(inputDogumTarihiUygun)
    if(inputIsimUygun && inputSoyadUygun && inputEmailUygun && inputTelNoUygun && 
        inputDogumTarihiUygun && inputSehirUygun && inputCinsiyetUygun &&
         inputEgitimDuzeyiUygun && inputBilinenDillerUygun)
    {        
        butonGonder.disabled=false;
        
    }else{
        butonGonder.disabled=true; 
    }
}
    ,700)
