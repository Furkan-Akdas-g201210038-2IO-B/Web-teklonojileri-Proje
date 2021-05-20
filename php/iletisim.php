<?php
 $isim = $_GET["isim"];
 $soyad = $_GET["soyad"];
 $Email= $_GET["Email"];
 $telNo= $_GET["telNo"];
 $dogumTarihi = $_GET["dogumTarihi"];
 $yasadigiSehir = $_GET["sehir"];
 $cinsiyet = $_GET["cinsiyet"];
 $hobiler = $_GET["hobi"];
 $profilResmi = $_GET["profilResmi"];
 $egitimDuzeyi = $_GET["egitimDuzeyi"];
 $bilinenDilSayisi = $_GET["bilinenDiller"];
 $renk = $_GET["renk"];
 $deger = $_GET["deger"];
 $ekBilgi = $_GET["ekBilgi"];

  echo "isim: ".$isim."<br><br>";
  echo "soyad: ".$soyad."<br><br>";
  echo "Email: ".$Email."<br><br>";
  echo "telNo: ".$telNo."<br><br>";
  echo "dogumTarihi: ".$dogumTarihi."<br><br>";
  echo "Yasadigi Sehir: ".$yasadigiSehir."<br><br>";
  echo "cinsiyet: ".$cinsiyet."<br><br>";
  echo "Hobiler: ";
  for($i=0;$i <count($hobiler);$i++ )
  {
      echo $hobiler[$i]." , ";
  }
  echo "<br><br>";
  echo "profilResmi: ".$profilResmi."<br><br>";
  echo "egitimDuzeyi: ".$egitimDuzeyi."<br><br>";
  echo "bilinenDilSayisi: ".$bilinenDilSayisi."<br><br>";
  echo "renk: ".$renk."<br><br>";
  echo "deger: ".$deger."<br><br>";
  echo "ekBilgi: ".$ekBilgi."<br><br>";
?>

