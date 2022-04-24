   
 let searchicon = document.querySelector(".search_icon")
 let inputbox = document.querySelector("#input_box")
 let menuslide = document.querySelector(".menu_div")
 let slidebtn =document.querySelector(".menu_button")
 function openNcloseNav(){
 if (menuslide.hasAttribute("offscreen") === true){
   menuslide.removeAttribute("offscreen")
   navigator.vibrate(50)
 }else if(menuslide.hasAttribute("offscreen") === !true){
    menuslide.setAttribute("offscreen", "")
 }
  if(inputbox.hasAttribute("offscreeninp") === !true){
   inputbox.setAttribute("offscreeninp","")
 }
 }
 slidebtn.addEventListener("click", openNcloseNav)
 
 function OpenNcloseinp(){
   if(inputbox.hasAttribute("offscreeninp") === true){
     inputbox.removeAttribute("offscreeninp")
     navigator.vibrate(50)
   }else if(inputbox.hasAttribute("offscreeninp") === !true){
     inputbox.setAttribute("offscreeninp", "")
   }
   if(menuslide.hasAttribute("offscreen") === !true){
       menuslide.setAttribute("offscreen", "")
       
   }
 }
 searchicon.addEventListener("click",  OpenNcloseinp)
  //audio images
  let allmusicImg = ["https://assets.audiomack.com/fireboydml/5015030297548a9875ec71fc509dc1218c0f9ad65902b8ac916a22c0bd62ef6d.jpeg?width=250&height=250&max=true",
  "https://assets.audiomack.com/skiibiimayana/a8f2452884eb812be01b397845ec455c56e3032401fb30f07c04ecd6ec1686c8.png?width=250&height=250&max=true",
   "https://assets.audiomack.com/feranbanks/31c381cb49e8e9755db1382dff0fe148222288d68a1c5dc2f39180974924ffea.jpeg?width=250&height=250&max=true",
    "https://assets.audiomack.com/bayliz-records/b3bb56b981f49ab981b47de2d2aaa1c662c6efc9f6a55ed01770e12b58db28da.png?width=250&height=250&max=true",
    "https://assets.audiomack.com/adekunlegold/eb9197fe0c9f92896f297fb5832328a332b192abf8455941656c2e7fba9af1ae.png?width=165&height=165&max=true",
     "https://assets.audiomack.com/bnxn/ab5a72fc3bcac07afadaa8f442926e8965c56e295f6e0e79dd1167fcf56c9ef3.jpeg?width=250&height=250&max=true",
      "https://assets.audiomack.com/asakemusic/687b1a3f1d6047efebafc9fb2460a2202d1fdb7a6a40bd98c20f46bbd2d6e23d.jpeg?width=250&height=250&max=true",
      "https://assets.audiomack.com/joeboy/c1666d524fdf0bd9816acc9f3de606125e811bab7006c625e01a0eb0f4c06814.jpeg?width=250&height=250&max=true"]       
 //audio images
 $(".topSongs_imgone").attr("src", allmusicImg[0])
 $(".topSongs_imgtwo").attr("src", allmusicImg[1])
 $(".topSongs_imgthree").attr("src", allmusicImg[2])
 $(".topSongs_imgfour").attr("src", allmusicImg[3])
 $(".topSongs_imgfive").attr("src", allmusicImg[4])
 $(".topSongs_imgsix").attr("src", allmusicImg[5])
 $(".topSongs_imgseven").attr("src", allmusicImg[6])
 $(".topSongs_imgeight").attr("src", allmusicImg[7])
 //audio img styles
 $(".topSongs_imgone").css({"width" : "200px"})
 $(".topSongs_imgtwo").css({"width" : "200px"})
 $(".topSongs_imgthree").css({"width" : "200px"})
 $(".topSongs_imgfour").css({"width" : "200px"})
 $(".topSongs_imgfive").css({"width" : "200px"})
 $(".topSongs_imgsix").css({"width" : "200px"})
 $(".topSongs_imgseven").css({"width" : "200px"})
 $(".topSongs_imgeight").css({"width" : "200px"})
 //----------------------------------------------------------------------
 //play icons for layer one
 let playiconImage = "https://img.icons8.com/material-two-tone/2x/play-button-circled--v4.gif"
 let layerone_iconboxOne = document.querySelector(".layerone_playicon_one")
 let layerone_iconboxtwo  = document.querySelector(".layerone_playicon_two")
 let layerone_iconboxthree  = document.querySelector(".layerone_playicon_three")
 let layerone_iconboxfour  = document.querySelector(".layerone_playicon_four")
 let layerone_iconboxfive  = document.querySelector(".layerone_playicon_five")
 let layerone_iconboxsix  = document.querySelector(".layerone_playicon_six")
 let layerone_iconboxseven  = document.querySelector(".layerone_playicon_seven")
 let layerone_iconboxeight  = document.querySelector(".layerone_playicon_eight")
 let layerone_allIcon =[layerone_iconboxOne, layerone_iconboxtwo,layerone_iconboxthree, layerone_iconboxfour, layerone_iconboxfive, layerone_iconboxsix, layerone_iconboxseven, layerone_iconboxeight]
 layerone_allIcon.forEach((element)=>{
   let baseimg = playiconImage;
   let newimg = document.createElement("img")
   newimg.style.width="50px"
   newimg.style.borderRadius="30px"
   newimg.src= baseimg;
   element.append(newimg)
   element.classList.add("arrange")
 })
 //-------------------------------------------------------------------------
 let allaudios_layertwo = ["https://www.dropbox.com/s/bgo28djflnsf004/Teni_Ft_Davido_For_You_9jaflaver.com_-2.mp3?dl=1",
                           "https://www.dropbox.com/s/slnkf4an9w4bhr4/TI-Blaze-Try-%28TrendyBeatz.com%29.mp3?dl=1",
                            "https://www.dropbox.com/s/r8j6phfz1hb2prk/Skiibii_Trenches_9jaflaver.com_.mp3?dl=1",
                            "https://www.dropbox.com/s/natps9hyajkw1yz/Kizz_Daniel_-_Eh_God_Barnabas_.mp3?dl=1",
                            "https://www.dropbox.com/s/zjba2cj32bge95m/Teni-Billionaire-%5BTrendyBeatz.com%5D.mp3?dl=1",
                            "https://www.dropbox.com/s/5xu73ezjgf86bju/Justin_Bieber_-_Intentions_ft_Quavo_talkglitz.tv.mp3?dl=1",
                            "https://www.dropbox.com/s/82x2acee970gaus/marioo-mi-amor-acoustic-version.mp3?dl=1",
                            "https://www.dropbox.com/s/1k458qvrsran40y/Jupitar-ft-Kuami-Eugene-%E2%80%93-Eternity-Prod-by-MOG-Beatz.mp3?dl=1"]
                            let audo1 = new Audio(allaudios_layertwo[0])
                            let audo2 = new Audio(allaudios_layertwo[1])
                            let audo3 = new Audio(allaudios_layertwo[2])
                            let audo4 = new Audio(allaudios_layertwo[3])
                            let audo5 = new Audio(allaudios_layertwo[4])
                            let audo6 = new Audio(allaudios_layertwo[5])
                            let audo7 = new Audio(allaudios_layertwo[6])
                            let audo8 = new Audio(allaudios_layertwo[7])  
                              
                            let musicone = audo1
                            let musictwo = audo2
                            let musicthree = audo3
                            let musicfour = audo4
                            let musicfive = audo5
                            let musicsix =  audo6
                            let musicseven = audo7
                            let musiceight = audo8                            
 let allaudios_layerone = ["https://www.dropbox.com/s/cvwwrqy3m9e4l2k/Fireboy_DML_-_Playboy.mp3?dl=1",
                           "https://www.dropbox.com/s/r8j6phfz1hb2prk/Skiibii_Trenches_9jaflaver.com_.mp3?raw=1",
                            "https://www.dropbox.com/s/tsalp1qnswxxzqz/Feranbanks-Energy-Feat-Zinoleesky-%28TrendyBeatz.com%29.mp3?dl=1",
                            "https://www.dropbox.com/s/51l5lh9elytgaxr/TI_Blaze_-_Sometimes_Netxclusive.com.mp3?dl=1",
                            "https://www.dropbox.com/s/opyfa87m9dxgtw9/Adekunle-Gold-Ft-Davido-High-%28TrendyBeatz.com%29.mp3?dl=1",
                            "https://www.dropbox.com/s/4csgwzgdhajhn2o/BNXN-For-Days.mp3?dl=1",
                            "https://www.dropbox.com/s/bva2uheug8uvjwg/Asake%20ft.%20Olamide%20%E2%80%93%20Omo%20Ope_%28Naijaflavour.com%29.mp3?dl=1",
                            "https://www.dropbox.com/s/er5h1vnh1aaxsyw/Joeboy_-_Cubana.mp3?dl=1"]
                            let layerone_audo1 = new Audio(allaudios_layerone[0])
                            let layerone_audo2 = new Audio(allaudios_layerone[1])
                            let layerone_audo3 = new Audio(allaudios_layerone[2])
                            let layerone_audo4 = new Audio(allaudios_layerone[3])
                            let layerone_audo5 = new Audio(allaudios_layerone[4])
                            let layerone_audo6 = new Audio(allaudios_layerone[5])
                            let layerone_audo7 = new Audio(allaudios_layerone[6])
                            let layerone_audo8 = new Audio(allaudios_layerone[7])
                           let totalmusic_layerone = [layerone_iconboxOne, layerone_iconboxtwo, layerone_iconboxthree, layerone_iconboxfour, layerone_iconboxfive, layerone_iconboxsix, layerone_iconboxseven, layerone_iconboxeight]
  
  
   totalmusic_layerone[0].onclick = function(){
     if( layerone_audo1.paused === true){
       layerone_audo1.play()
       layerone_audo2.pause(),layerone_audo3.pause()
       layerone_audo4.pause(),layerone_audo5.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
      //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo1.paused === false){
       layerone_audo1.pause();
     }
   }
 
   totalmusic_layerone[1].onclick = function(){
     if( layerone_audo2.paused === true){
       layerone_audo2.play()
       layerone_audo1.pause(),layerone_audo3.pause()
       layerone_audo4.pause(),layerone_audo5.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo2.paused === false){
       layerone_audo2.pause();
     }
   }
 
   totalmusic_layerone[2].onclick = function(){
     if( layerone_audo3.paused === true){
       layerone_audo3.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo4.pause(),layerone_audo5.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo3.paused === false){
       layerone_audo3.pause();
     }
   }
 
   totalmusic_layerone[3].onclick = function(){
     if( layerone_audo4.paused === true){
       layerone_audo4.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo3.pause(),layerone_audo5.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo4.paused === false){
       layerone_audo4.pause();
     }
   }
 
   totalmusic_layerone[4].onclick = function(){
     if( layerone_audo5.paused === true){
       layerone_audo5.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo4.pause(),layerone_audo3.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo5.paused === false){
       layerone_audo5.pause();
     }
   }
 
   totalmusic_layerone[5].onclick = function(){
     if( layerone_audo6.paused === true){
       layerone_audo6.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo4.pause(),layerone_audo3.pause()
       layerone_audo5.pause(),layerone_audo7.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo6.paused === false){
       layerone_audo6.pause();
     }
   }
 
   totalmusic_layerone[6].onclick = function(){
     if( layerone_audo7.paused === true){
       layerone_audo7.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo4.pause(),layerone_audo3.pause()
       layerone_audo6.pause(),layerone_audo5.pause()
       layerone_audo8.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo7.paused === false){
       layerone_audo7.pause();
     }
   }
   totalmusic_layerone[7].onclick = function(){
     if( layerone_audo8.paused === true){
       layerone_audo8.play()
       layerone_audo1.pause(),layerone_audo2.pause()
       layerone_audo4.pause(),layerone_audo3.pause()
       layerone_audo6.pause(),layerone_audo5.pause()
       layerone_audo7.pause() //ignore...
       //sending pause for music layer two
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause(),musicone.pause()
     }else if(layerone_audo8.paused === false){
       layerone_audo8.pause();
     }
   }
 //-------------------------------
 //  music end for first layer
 let allmusicImg_layer2 = ["https://assets.audiomack.com/tenientertainer/2db8911385fbaa8b5d7dff2125513b2eac26fa7c13199f890aaf6577ac2175f9.png?width=165&height=165&max=true",
          "https://assets.audiomack.com/ti-blaze/4d29992446297391c39c3dbd7bed27345fec50f2ca21730670d4a5bbb6f2c3df.png?width=250&height=250&max=true",
           "https://assets.audiomack.com/skiibiimayana/42be1860432352a16ff965cc7753cff59de53540b5f3b4a6f1afee3ffe6063e1.png?width=250&height=250&max=true",
           "https://assets.audiomack.com/kizzdaniel/2de1edef5250fff7f54422c29b44f3ab761f60295688789190792804f85bad77.jpeg?width=250&height=250&max=true",
            "https://trendybeatz.com/images/Teni-Billionaire.jpg",
            "https://assets.audiomack.com/def-jam-recordings/1437b47178590776ff279933553585fb7290a358cc17c5672abc4d5907f7b306.jpeg?width=165&height=165&max=true",
             "https://trendybeatz.com/images/Marioo-Mi-Amor-ft-Jovial-art.jpg",
              "https://assets.audiomack.com/jupitardegeneral/fffbaee422724e59bb5d31611b49773ca40e19dbe410c35b70c9193b470b7a56.jpeg?width=165&height=165&max=true"]
 //audio images layer 2
 $(".topAlbums_imgone").attr("src", allmusicImg_layer2[0])
 $(".topAlbums_imgtwo").attr("src", allmusicImg_layer2[1])
 $(".topAlbums_imgthree").attr("src", allmusicImg_layer2[2])
 $(".topAlbums_imgfour").attr("src", allmusicImg_layer2[3])
 $(".topAlbums_imgfive").attr("src", allmusicImg_layer2[4])
 $(".topAlbums_imgsix").attr("src", allmusicImg_layer2[5])
 $(".topAlbums_imgseven").attr("src", allmusicImg_layer2[6])
 $(".topAlbums_imgeight").attr("src", allmusicImg_layer2[7])
 //audio img styles layer2
 $(".topAlbums_imgone").css({"width" : "200px"})
 $(".topAlbums_imgtwo").css({"width" : "200px"})
 $(".topAlbums_imgthree").css({"width" : "200px"})
 $(".topAlbums_imgfour").css({"width" : "200px"})
 $(".topAlbums_imgfive").css({"width" : "200px"})
 $(".topAlbums_imgsix").css({"width" : "200px"})
 $(".topAlbums_imgseven").css({"width" : "200px"})
 $(".topAlbums_imgeight").css({"width" : "200px"})
 //all play icons for layer two
 let iconbox_one = document.querySelector(".playicon_one")
 let iconbox_two = document.querySelector(".playicon_two")
 let iconbox_three = document.querySelector(".playicon_three")
 let iconbox_four = document.querySelector(".playicon_four")
 let iconbox_five = document.querySelector(".playicon_five")
 let iconbox_six = document.querySelector(".playicon_six")
 let iconbox_seven = document.querySelector(".playicon_seven")
 let iconbox_eight = document.querySelector(".playicon_eight")
 let allIcon = [iconbox_one,iconbox_two, iconbox_three, iconbox_four, iconbox_five, iconbox_six, iconbox_seven, iconbox_eight]
 allIcon.forEach((element)=>{
   let baseimg = playiconImage;
   let newimg = document.createElement("img")
   newimg.style.width="50px"
   newimg.style.borderRadius="30px"
   newimg.src= baseimg;
   element.append(newimg)
   element.classList.add("arrange")
 })
                       
 let audioone = document.querySelector(".playicon_one")
 let audiotwo = document.querySelector(".playicon_two")
 let audiothree = document.querySelector(".playicon_three")
 let audiofour = document.querySelector(".playicon_four")
 let audiofive = document.querySelector(".playicon_five")
 let audiosix = document.querySelector(".playicon_six")
 let audioseven = document.querySelector(".playicon_seven")
 let audioeight = document.querySelector(".playicon_eight")
 
 let allmusic = [audo1,audo2,audo3,audo4,audo5,audo6,audo7,audo8]
 let totalaudio_icon = [audioone, audiotwo, audiothree, audiofour,audiofive, audiosix,audioseven,audioeight]
   totalaudio_icon[0].onclick = function(){
     if( musicone.paused === true){
     musicone.play()
      musictwo.pause(),musicthree.pause()
      musicfour.pause(),musicfive.pause()
      musicsix.pause(),musicseven.pause()
      musiceight.pause() //ignore...
     //sending pause for all music layer one
       layerone_audo2.pause(),layerone_audo3.pause()
       layerone_audo4.pause(),layerone_audo5.pause()
       layerone_audo6.pause(),layerone_audo7.pause()
       layerone_audo8.pause(),layerone_audo1.pause()
     }else if(musicone.paused === false){
     musicone.pause();
     }
   }
 totalaudio_icon[1].onclick = function(){
     if( musictwo.paused === true){
     musictwo.play()
     musicone.pause(),musicthree.pause()
     musicfour.pause(),musicfive.pause()
     musicsix.pause(),musicseven.pause()
     musiceight.pause() //ignore...
      //sending pause for all music layer one
      layerone_audo2.pause(),layerone_audo3.pause()
      layerone_audo4.pause(),layerone_audo5.pause()
      layerone_audo6.pause(),layerone_audo7.pause()
      layerone_audo8.pause(),layerone_audo1.pause()
     }else if(musictwo.paused === false){
     musictwo.pause();
     }
 }
 totalaudio_icon[2].onclick = function(){
   if( musicthree.paused === true){
   musicthree.play()
   musictwo.pause(),musicone.pause()
   musicfour.pause(),musicfive.pause()
   musicsix.pause(),musicseven.pause()
   musiceight.pause() //ignore...
    //sending pause for all music layer one
    layerone_audo2.pause(),layerone_audo3.pause()
    layerone_audo4.pause(),layerone_audo5.pause()
    layerone_audo6.pause(),layerone_audo7.pause()
    layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musicthree.paused === false){
   musicthree.pause();
   }
 }
 
 totalaudio_icon[3].onclick = function(){
   if( musicfour.paused === true){
   musicfour.play()
   musictwo.pause(),musicthree.pause()
   musicone.pause(),musicfive.pause()
   musicsix.pause(),musicseven.pause()
   musiceight.pause() //ignore...
    //sending pause for all music layer one
    layerone_audo2.pause(),layerone_audo3.pause()
    layerone_audo4.pause(),layerone_audo5.pause()
    layerone_audo6.pause(),layerone_audo7.pause()
    layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musicfour.paused === false){
   musicfour.pause();
   }
 }
 totalaudio_icon[4].onclick = function(){
   if( musicfive.paused === true){
   musicfive.play()
   musictwo.pause(),musicthree.pause()
   musicone.pause(),musicfour.pause()
   musicsix.pause(),musicseven.pause()
   musiceight.pause() //ignore...
    //sending pause for all music layer one
    layerone_audo2.pause(),layerone_audo3.pause()
    layerone_audo4.pause(),layerone_audo5.pause()
    layerone_audo6.pause(),layerone_audo7.pause()
    layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musicfive.paused === false){
   musicfive.pause();
   }
 }
 totalaudio_icon[5].onclick = function(){
   if( musicsix.paused === true){
   musicsix.play()
   musictwo.pause(),musicthree.pause()
   musicone.pause(),musicfour.pause()
   musicfive.pause(),musicseven.pause()
   musiceight.pause() //ignore...
    //sending pause for all music layer one
    layerone_audo2.pause(),layerone_audo3.pause()
    layerone_audo4.pause(),layerone_audo5.pause()
    layerone_audo6.pause(),layerone_audo7.pause()
    layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musicsix.paused === false){
   musicsix.pause();
   }
 }
 totalaudio_icon[6].onclick = function(){
   if( musicseven.paused === true){
   musicseven.play()
   musictwo.pause(),musicthree.pause()
   musicone.pause(),musicfour.pause()
   musicfive.pause(),musicsix.pause()
   musiceight.pause() //ignore...
    //sending pause for all music layer one
    layerone_audo2.pause(),layerone_audo3.pause()
    layerone_audo4.pause(),layerone_audo5.pause()
    layerone_audo6.pause(),layerone_audo7.pause()
    layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musicseven.paused === false){
   musicseven.pause();
   }
 }
 totalaudio_icon[7].onclick = function(){
   if( musiceight.paused === true){
   musiceight.play()
   musictwo.pause(),musicthree.pause()
   musicone.pause(),musicfour.pause()
   musicfive.pause(),musicsix.pause()
   musicseven.pause() //ignore...
    //sending pause for all music layer one
   layerone_audo2.pause(),layerone_audo3.pause()
   layerone_audo4.pause(),layerone_audo5.pause()
   layerone_audo6.pause(),layerone_audo7.pause()
   layerone_audo8.pause(),layerone_audo1.pause()
   }else if(musiceight.paused === false){
   musiceight.pause();
   }
 }
      let entranceLoader = document.querySelector(".entranceLoader")
     let entrancePage = document.querySelector(".mainpage")
     setTimeout(()=>{
       entranceLoader.style.display="none"
       setTimeout(()=>{
           entrancePage.style.display="block"
       }, 1000)
     }, 15000)  