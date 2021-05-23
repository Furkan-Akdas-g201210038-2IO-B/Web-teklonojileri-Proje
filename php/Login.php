<?php
ob_start();
$kullaniciAdi="g201210038@sakarya.edu.tr";
$sifre="g201210038";



$userName = $_GET["kullaniciAdi"];
$password = $_GET["sifre"];

if($userName==$kullaniciAdi && $password==$sifre)
{
    echo "<b><font size='5' color='blue'>GİRİŞ BAŞARILI</font><b/>"."<br>";
    echo "Kullanıcı adı: $userName"."<br>";
    echo "Şifre: $password";
}else {

    header("login.html");
    }

?>

<script>alert("HOŞGELDİN G201210038")</script>