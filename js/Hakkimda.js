
var metin = document.getElementById("tanismaMetinId");
var link = document.getElementById("resimLink");
var resim = document.getElementById("resim"); 
var zaman1,zaman2,zaman3,zaman4,zaman5,zaman6,sayac;
function a(secmeKutusu)
{
   sayac=0;

    if(secmeKutusu[1].selected)
    {       
        metin.innerHTML="25 EYLÜL 1998 tarihinde İngiltere'nin Leeds şehrinde doğdum.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
         "'Leeds' hakkında bilgi edinebilirsiniz</span>"   ;
        resim.src="img/leedsn.JPG";
        link.href="https://tr.wikipedia.org/wiki/Leeds";

        zaman1=setInterval(function(){
            sayac++;
            if(sayac%3==0)resim.src="img/leedsn.JPG";
            else if(sayac%3==1) resim.src="img/leeds01.JPG";
            else resim.src="img/leeds (1).JPG"
           },1900)
    }

    else if(secmeKutusu[2].selected)
    {       
        metin.innerHTML="Sakarya Üniversitesinde Bilgisayar Mühendisi Öğrencisiyim. ";
        resim.src="img/meslekn.JPG";
    }
    else if(secmeKutusu[3].selected)
    {     
        metin.innerHTML="Hobilerim sinemaya gitmek,kitap okumak ve arkadaşlarımla vakit geçirmek. ";
        resim.src="img/s.JPG";  
              
        zaman2=setInterval(function(){
        sayac++;
        if(sayac%3==0)resim.src="img/s.JPG";
        else if(sayac%3==1) resim.src="img/okuman.JPG";
        else resim.src="img/arkadas.JPG"
       },1800)
               
    }
    else if(secmeKutusu[4].selected)
    {       
        metin.innerHTML="Isparta'da yaşıyorum.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
        "'Isparta' hakkında bilgi edinebilirsiniz</span>";
        resim.src="img/isparta.JPG";
        link.href="https://tr.wikipedia.org/wiki/Isparta";

        zaman3=setInterval(function(){
            sayac++;
            if(sayac%3==0)resim.src="img/isparta.JPG";
            else if(sayac%3==1) resim.src="img/isparta(2).jpg";
            else resim.src="img/isparta(4).jpg"
           },1900)
    }
    else if(secmeKutusu[5].selected)
    {       
        metin.innerHTML="En Sevdiğim Kitap Anthony Robbins'in Yazdığı ,"+
        " Türü Kişisel Gelişim Olan 'Sınırsız Güç' Adlı Kitaptır.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
         "'Sınırsız Güç' kitabı hakkında bilgi edinebilirsiniz</span>"   ;
        resim.src="img/kitap4n.jpg";
        link.href="https://books.google.com.tr/books/about/Sinirsiz"+
         "_G%C3%BCc.html?id=E43UtAEACAAJ&source=kp_book_description&redir_esc=y";
    }
    else if(secmeKutusu[6].selected)
    {       
        metin.innerHTML="En Sevdiğim Film Wolfgang Petersen'ın Yönettiği Brad Pitt'in Başrol"+
        " Olduğu 'Troy' Filmidir.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
         "'Troy' filmi hakkında bilgi edinebilirsiniz</span>"   ;
        resim.src="img/troyn.jpg";
        link.href="https://tr.wikipedia.org/wiki/Truva_(film)";
    }
    else if(secmeKutusu[7].selected)
    {       
        metin.innerHTML="En Sevdiğim Dizi Steve DeKnight'ın Yönettiği Andy Whitfield'in Başrol"+
        " Olduğu 'Spartacus' Dizisidir.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
         "'Spartacus' dizisi hakkında bilgi edinebilirsiniz</span>"   ;
        resim.src="img/spartacusn.jpg";
        link.href="https://tr.wikipedia.org/wiki/Spartak%C3%BCs_(dizi)";
    }
    else if(secmeKutusu[8].selected)
    {       
        metin.innerHTML="İlgilendiğim Spor Dalı Futbol.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
        "'Futbol' hakkında bilgi edinebilirsiniz</span>";
        resim.src="img/top2.JPG";
        link.href="https://tr.wikipedia.org/wiki/Futbol";

        zaman4=setInterval(function(){
            sayac++;
            if(sayac%3==0)resim.src="img/top2.JPG";
            else if(sayac%3==1) resim.src="img/top4.jpg";
            else resim.src="img/top3.jpg"
           },1900)
    }
    else if(secmeKutusu[9].selected)
    {       
        metin.innerHTML="Tuttuğum Takım FenerBahçe.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
        "'FenerBahçe' hakkında bilgi edinebilirsiniz</span>";
        resim.src="img/fb1.JPG";
        link.href="https://tr.wikipedia.org/wiki/Fenerbah%C3%A7e_(futbol_tak%C4%B1m%C4%B1)";

        zaman5=setInterval(function(){
            sayac++;
            if(sayac%3==0)resim.src="img/fb1.JPG";
            else if(sayac%3==1) resim.src="img/fb2.jpg";
            else resim.src="img/fbn.jpg"
           },1900)
    }
    else if(secmeKutusu[10].selected)
    {       
        metin.innerHTML="En Sevdiğim Tablo 'Son Akşam Yemeği' Tablosudur.<br><br> " +
        "<span style=\"color:rgb(172, 37, 88);font-size:13px\">Yukarıdaki resme tıklayarak " +
        "'Son Akşam Yemeği' tablosu hakkında bilgi edinebilirsiniz</span>";
        resim.src="img/resimn.JPG";
        link.href="https://tr.wikipedia.org/wiki/Son_Ak%C5%9Fam_Yeme%C4%9Fi_(tablo)";

        zaman6=setInterval(function(){
            sayac++;
            if(sayac%3==0)resim.src="img/resimn.JPG";
            else if(sayac%3==1) resim.src="img/tablo2.jpg";
            else resim.src="img/tablo5.jpg";
           },1900)
    }


    if(!secmeKutusu[1].selected){clearInterval(zaman1)}
    if(!secmeKutusu[3].selected){clearInterval(zaman2)}
    if(!secmeKutusu[4].selected){clearInterval(zaman3)}
    if(!secmeKutusu[8].selected){clearInterval(zaman4)}
    if(!secmeKutusu[9].selected){clearInterval(zaman5)}
    if(!secmeKutusu[10].selected){clearInterval(zaman6)}
}





/*var sayac=0;      
    var zaman=setInterval(function(){
        sayac++;
        if(sayac%2==0)resim.src="img/s.JPG";
        else resim.src="img/okuman.JPG";
       },2000)
    if(!secmeKutusu[3].selected){clearInterval(zaman)}*/