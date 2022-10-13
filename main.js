  
  
  let elList = document.querySelector('.js-list');
  let elSel1 = document.querySelector('.js-sel1');
  let elSel2 = document.querySelector('.js-sel2'); 
  let elSel3 = document.querySelector('.js-sel3'); 
  let elSel4 = document.querySelector('.js-sel4');

  
   
  

   function domChiqar (){ 


    books.forEach(function (el){ 

        elItem = document.createElement('li'); 
        elSpan = document.createElement('span');
        elTitle = document.createElement('h3'); 
        elImg = document.createElement('img');
        elStrong = document.createElement('strong');
        elText = document.createElement('p');
        
       
       elSpan.textContent = el.language;
       elTitle.textContent = el.author;
       elImg.src = `./books/${el.imageLink}`;
       elStrong.textContent = el.pages;
       elText.textContent = el.year; 
 
 
       elItem.appendChild(elSpan); 
       elItem.appendChild(elTitle); 
       elItem.appendChild(elImg); 
       elItem.appendChild(elStrong); 
       elItem.appendChild(elText); 
       elList.appendChild(elItem);
     });
   }  
   domChiqar()
   

    
   //===============================================================language ================================================================

   
   elSel1.addEventListener('change', function(){ 
      
   let boshArr = [];

   elList.innerHTML = '';

   if(elSel1.value == 'Aa-Zz'){ 

  var Aa = books.sort((a, b) => { 

    var elA = a.language.toUpperCase().charCodeAt(0);
    var elB = b.language.toUpperCase().charCodeAt(0); 

    if(elA < elB){ 

        return -1;
      }else if(elA > elB){ 
    
        return 1;
      }else{ 
    
        return 0;
      }   
  }); 


         boshArr = Aa;
   } 


   if(elSel1.value == 'Zz-Aa'){ 
    
    var Zz = books.sort((a, b) => { 

        var elT = a.language.toUpperCase().charCodeAt(0);
        var elX = b.language.toUpperCase().charCodeAt(0); 
        
        if(elT > elX){ 

            return -1;
        }else if(elT < elX){ 

            return 1;
        } else{ 

            return 0;
        }
    }) 


 boshArr = Zz;
   }

   domChiqar() 

   }); 

   //============================================================== author================================================================

   elSel2.addEventListener('change', function(){ 
      
    let boshArr = [];
 
    elList.innerHTML = '';
 
    if(elSel2.value == 'Aa-Zz'){ 
 
   var Aa = books.sort((a, b) => { 
 
     var elA = a.author.toUpperCase().charCodeAt(0);
     var elB = b.author.toUpperCase().charCodeAt(0); 
 
     if(elA < elB){ 
 
         return -1;
       }else if(elA > elB){ 
     
         return 1;
       }else{ 
     
         return 0;
       }   
   }); 
 
 
          boshArr = Aa;
    } 
 
 
    if(elSel2.value == 'Zz-Aa'){ 
     
     var Zz = books.sort((a, b) => { 
 
         var elT = a.author.toUpperCase().charCodeAt(0);
         var elX = b.author.toUpperCase().charCodeAt(0); 
         
         if(elT > elX){ 
 
             return -1;
         }else if(elT < elX){ 
 
             return 1;
         } else{ 
 
             return 0;
         }
     }) 
 
 
  boshArr = Zz;
    }
 
    domChiqar() 
 
    }); 
      
    //========================================================== pages=================================================================
 
      elSel3.addEventListener('change', function(evt){ 

        evt.preventDefault();

        var elSelVal = elSel3.value;
        var elArr = [];
        elList.innerHTML = ''; 

        if(elSelVal == '1'){ 

            elArr = books.sort((a, b) => a.pages - b.pages);
        } 
        if(elSelVal == '2500'){ 

            elArr = books.sort((a, b) => b.pages - a.pages);
        }
 
        window.localStorage.setItem('list', JSON.stringify(elArr));
        
        domChiqar();
      })


    //========================================================== Year================================================================

     elSel4.addEventListener('change', function(evt){ 
        evt.preventDefault()
        
       var elSelval = elSel4.value;
        elList.innerHTML = '';  
        
        var elArray = [];

        if(elSelval == '1750'){ 

            elArray = books.sort((a, b) => a.year - b.year);
        } 
        if(elSelval == '2021'){ 

            elArray = books.sort((a, b) => b.year - a.year);
        }
        window.localStorage.setItem('list', JSON.stringify(elArray));
        
        domChiqar();
     })
    
 

     //=================================================================dar layk=====================================================


     let elBut = document.querySelector('.js-butten');

     var elTex = false;

     elBut.addEventListener('click', function(){ 

      elTex = !elTex;

      var elNew = elTex ? 'dark' : 'light';

      window.localStorage.setItem('elTex', elNew);
       
      domChiqarish();
     });

     function domChiqarish (){ 

        if(window.localStorage.getItem('elTex') == 'dark'){ 

            document.body.classList.add('dark')
        } 
        else{ 
            document.body.classList.remove('dark');
        }
     } 
     domChiqarish();




  