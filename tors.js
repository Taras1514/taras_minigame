let balans =document.querySelector(".balans")


let but1 =document.querySelector(".but1")
let but2 =document.querySelector(".but2")
let but3 =document.querySelector(".but3")


let day =document.querySelector(".day")
day.addEventListener("click",dayp)
function dayp () {
    clicks +=1000000
    balans.innerHTML = `Баланс: ${clicks}$`
}


let but1tp =document.querySelector(".but1tp")
let but1tplev =10


let maximum ="Maximum"


let dobav1tap = document.querySelector(".dobav1tap")
let dobav1taplev =1
dobav1tap.innerHTML=`тапаня +${dobav1taplev}`


let tap =document.querySelector(".tap")
let clicks = 0
let dobav = 1
let button1_level = 1


but1.style.background= 'rgb(50, 250, 0)'
but1.style.border= '2px solid rgb(50, 200, 0)'


anime ({ 
    targets:'',
    rotate: 360,
    easing:'linear',
    duration:1000,
    keyframes:[
        {translateX:"200px",translateY:"-170px"},
        {scale:1.2},
    ]
})


//but1.addEventListener("click",but1vib)//


function but1vib() {
anime ({
    targets:'.but1',
    easing:'linear',
    duration:150,
    keyframes:[
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"0px"}
    ]
})
}
function but2vib() {
anime ({
    targets:'.but2',
    easing:'linear',
    duration:150,
    keyframes:[
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"0px"}
    ]
})
}
function but3vib() {
anime ({
    targets:'.but3',
    easing:'linear',
    duration:150,
    keyframes:[
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"3px"},
        {translateX:"-3px"},
        {translateX:"0px"}
    ]
})
}


function but1abg() {
anime ({
    targets:'.but1',
    easing:'linear',
    duration:150,
    keyframes:[
        {scale:1.05},
        {scale:1},
    ]
})
}


function but2abg() {
anime ({
    targets:'.but2',
    easing:'linear',
    duration:150,
    keyframes:[
        {scale:1.05},
        {scale:1},
    ]
})
}


function but3abg() {
anime ({
    targets:'.but3',
    easing:'linear',
    duration:150,
    keyframes:[
        {scale:1.05},
        {scale:1},
    ]
})
}


//mouseenter mouseleave mouseover//


function but1navod () {
anime ({
    targets:'.but1',
    easing:'linear',
    duration:100,
    keyframes:[
        {scale:1.04},
    ]
})
}
but1.addEventListener("mouseenter",but1navod)


function but1navod2 () {
anime ({
    targets:'.but1',
    easing:'linear',
    duration:105,
    keyframes:[
        {scale:1},
    ]
})
}
but1.addEventListener("mouseleave",but1navod2)


function but2navod () {
anime ({
    targets:'.but2',
    easing:'linear',
    duration:100,
    keyframes:[
        {scale:1.04},
    ]
})
}
but2.addEventListener("mouseenter",but2navod)


function but2navod2 () {
anime ({
    targets:'.but2',
    easing:'linear',
    duration:105,
    keyframes:[
        {scale:1},
    ]
})
}
but2.addEventListener("mouseleave",but2navod2)


function but3navod () {
anime ({
    targets:'.but3',
    easing:'linear',
    duration:100,
    keyframes:[
        {scale:1.04},
    ]
})
}
but3.addEventListener("mouseenter",but3navod)


function but3navod2 () {
anime ({
    targets:'.but3',
    easing:'linear',
    duration:105,
    keyframes:[
        {scale:1},
    ]
})
}
but3.addEventListener("mouseleave",but3navod2)


function vibr() {
anime ({
    targets:'.tap',
    easing:'linear',
    duration:150,
    keyframes:[
        {scale:1.04},
        {scale:1},
    ]
})
}
tap.addEventListener("click",vibr)


let maxtap = 0


function plus () {
    clicks += dobav
    maxtap +=1
    balans.innerHTML = `Баланс: ${clicks}$`
    if (maxtap >= 10 ) {
    clicks -=10000
    balans.innerHTML = `Баланс: ${clicks}$`
}
}
tap.addEventListener("click",plus)


setInterval(function(){
    maxtap =0
},1000)


let buttutr=document.querySelector('.buttutr')
let divtutr=document.querySelector('.divtutr')
let buttutrlev=1






let hj1=document.querySelector('.hj1')
let hj2=document.querySelector('.hj2')
let hj3=document.querySelector('.hj3')


function abgr1 () {
    //console.log(button1_level)


    if (clicks < but1tplev) {
        setTimeout(but1vib,1)
    }


    if (clicks >= but1tplev && button1_level == 1){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=10
        button1_level += 1
        hj1.innerHTML ='за клік 2$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        but1.style.background='rgb(90, 250, 50)'
        but1.style.border='2px solid rgb(90, 200, 50)'
        setTimeout(but1abg,1)
     
    }
    else if (clicks >= but1tplev && button1_level == 2){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=15
        button1_level += 1
        hj1.innerHTML ='за клік 3$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=1
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(130, 250, 50)'
        but1.style.border=' 2px solid rgb(130, 200, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 3){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=15
        button1_level += 1
        hj1.innerHTML ='за клік 5$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=1
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(170, 250, 50)'
        but1.style.border=' 2px solid rgb(170, 200, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 4){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=50
        button1_level += 1
        hj1.innerHTML ='за клік 8$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=2
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        console.log(dobav1taplev)
        but1.style.background='rgb(210, 250, 50)'
        but1.style.border=' 2px solid rgb(210, 200, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 5){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=80
        button1_level += 1
        hj1.innerHTML ='за клік 13$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=2
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(250, 235, 50)'
        but1.style.border=' 2px solid rgb(250, 185, 50)'
        setTimeout(but1abg,1)
     
    }
    else if (clicks >= but1tplev && button1_level == 6){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=120
        button1_level += 1
        hj1.innerHTML ='за клік 20$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=1
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        console.log(dobav1taplev)
        but1.style.background='rgb(250, 210, 50)'
        but1.style.border=' 2px solid rgb(200, 210, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 7){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=200
        button1_level += 1
        hj1.innerHTML ='за клік 28$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=2
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(250, 170, 50)'
        but1.style.border=' 2px solid rgb(200, 170, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 8){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=300
        button1_level += 1
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=2
        hj1.innerHTML ='за клік 38$'
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(250, 130, 50)'
        but1.style.border=' 2px solid rgb(200, 130, 50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 9){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev +=700
        button1_level += 1
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `${but1tplev}$`
        dobav1taplev +=3
        hj1.innerHTML ='за клік 50$'
        dobav1tap.innerHTML=`тапання +${dobav1taplev}`
        but1.style.background='rgb(250, 90, 50)'
        but1.style.border=' 2px solid rgb(200, 90,50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 10){
        clicks -= but1tplev
        dobav +=dobav1taplev
        but1tplev = "Maximum"
        dobav1taplev= "Maximum"
        hj1.innerHTML ='за клік 65$'
        //but1tplev.innerHTML=`${maximum}`
        button1_level += 1
        balans.innerHTML = `Баланс: ${clicks}$`
        but1tp.innerHTML = `     `
        dobav1taplev.innerHTML=` `
        dobav1tap.innerHTML=`Maximum`
        console.log("max")
        but1.style.background='rgb(250, 50, 50)'
        but1.style.border=' 2px solid rgb(200, 50,50)'
        setTimeout(but1abg,1)
       
    }
    else if (clicks >= but1tplev && button1_level == 11){
       
    }
}
but1.addEventListener("click",abgr1)




let povaut =1
let povauttime =3000


function ndf (){
setInterval(function(){
    clicks += povaut
    balans.innerHTML = `Баланс: ${clicks}$`
    console.log(povauttime)
},povauttime)
}
let button2_level =1
let but2tplev =100
let but3doz =1




but2.style.background= 'rgb(50, 250, 0)'
but2.style.border= '2px solid rgb(50, 200, 0)'
dobav2tap =document.querySelector(".dobav2tap")
dobav2taplev=1
let but2tp=document.querySelector(".but2tp")


function abgr2 () {
    if (clicks < but2tplev) {
        setTimeout(but2vib,1)
    }
    if (clicks >= but2tplev && button2_level == 1){
        clicks -= but2tplev
        setTimeout(ndf,1)
        but2tplev +=100
        button2_level += 1
        hj3.innerHTML ='затримка 3с.'
        hj2.innerHTML = 'автоматично +1$'
        but3doz +=1
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(90, 250, 50)'
        but2.style.border=' 2px solid rgb(90, 200, 50)'
        setTimeout(but2abg,1)
    }
    else if (clicks >= but2tplev && button2_level == 2){
        clicks -= but2tplev
        but2tplev +=100
        povaut+=1
        button2_level += 1
        dobav2taplev+=1
        hj2.innerHTML = 'автоматично +2$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(130, 250, 50)'
        but2.style.border=' 2px solid rgb(130, 200, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 3){
        clicks -= but2tplev
        but2tplev +=200
        povaut+=2
        button2_level += 1
        dobav2taplev-=1
        hj2.innerHTML = 'автоматично +4$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(170, 250, 50)'
        but2.style.border=' 2px solid rgb(170, 200, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 4){
        clicks -= but2tplev
        but2tplev +=200
        povaut+=1
        button2_level += 1
        dobav2taplev+=1
        balans.innerHTML = `Баланс: ${clicks}$`
        hj2.innerHTML = 'автоматично +5$'
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(210, 250, 50)'
        but2.style.border=' 2px solid rgb(210, 200, 50)'
        setTimeout(but2abg,1)
     
    }
    else if (clicks >= but2tplev && button2_level == 5){
        clicks -= but2tplev
        but2tplev +=300
        povaut+=2
        button2_level += 1
        dobav2taplev-=0
        hj2.innerHTML = 'автоматично +7$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(250, 235, 50)'
        but2.style.border=' 2px solid rgb(250, 185, 50)'
        setTimeout(but2abg,1)
     
    }
    else if (clicks >= but2tplev && button2_level == 6){
        clicks -= but2tplev
        but2tplev +=500
        povaut+=2
        button2_level += 1
        dobav2taplev+=1
        hj2.innerHTML = 'автоматично +9$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(250, 210, 50)'
        but2.style.border=' 2px solid rgb(200, 210, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 7){
        clicks -= but2tplev
        but2tplev +=1000
        povaut+=3
        button2_level += 1
        dobav2taplev-=0
        balans.innerHTML = `Баланс: ${clicks}$`
        hj2.innerHTML = 'автоматично +12$'
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(250, 170, 50)'
        but2.style.border=' 2px solid rgb(200, 170, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 8){
        clicks -= but2tplev
        but2tplev +=1500
        povaut+=3
        button2_level += 1
        hj2.innerHTML = 'автоматично +15$'
        dobav2taplev+=1
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(250, 130, 50)'
        but2.style.border=' 2px solid rgb(200, 130, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 9){
        clicks -= but2tplev
        but2tplev +=2500
        povaut+=4
        button2_level += 1
        dobav2taplev+=1
        hj2.innerHTML = 'автоматично +19$'
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = `${but2tplev}$`
        dobav2tap.innerHTML=`автоматично +${dobav2taplev}`
        but2.style.background='rgb(250, 90, 50)'
        but2.style.border=' 2px solid rgb(200, 90, 50)'
        setTimeout(but2abg,1)
       
    }
    else if (clicks >= but2tplev && button2_level == 10){
        clicks -= but2tplev
        but2tplev ="Maximum"
        povaut+=5
        hj2.innerHTML = 'автоматично +24$'
        button2_level += 1
        dobav2taplev="Maximum"
        balans.innerHTML = `Баланс: ${clicks}$`
        but2tp.innerHTML = ``
        dobav2tap.innerHTML=`Maximum`
        but2.style.background='rgb(250, 50, 50)'
        but2.style.border=' 2px solid rgb(200,50, 50)'
        setTimeout(but2abg,1)
       
    }
   
}
but2.addEventListener("click",abgr2)




let button3_level =1
let but3tplev =250
//let but3doz =1


but3.style.background= 'rgb(50, 250, 0)'
but3.style.border= '2px solid rgb(50, 200, 0)'
dobav3tap =document.querySelector(".dobav3tap")
dobav3taplev= '2.7с.'
let but3tp=document.querySelector(".but3tp")
hj3.innerHTML ='затримка 0с.'


function abgr3 () {
    if (but3doz ==1) {
        setTimeout(but3vib,1)
    }
    if (clicks < but3tplev) {
        setTimeout(but3vib,1)
    }
    if (clicks >= but3tplev && button3_level == 1 && but3doz ==2
    ){
        clicks -= but3tplev
        but3tplev +=250
        button3_level += 1
        povauttime =2750
        dobav3taplev= '2.5с.'
        hj3.innerHTML ='затримка 2.7с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(90, 250, 50)'
        but3.style.border=' 2px solid rgb(90, 200, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 2){
        clicks -= but3tplev
        but3tplev +=500
        povauttime =2500
        button3_level += 1
        hj3.innerHTML ='затримка 2.5с.'
        dobav3taplev= '2с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(130, 250, 50)'
        but3.style.border=' 2px solid rgb(130, 200, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 3){
        clicks -= but3tplev
        but3tplev +=500
        povauttime =2000
        button3_level += 1
        dobav3taplev= '1.2с.'
        hj3.innerHTML ='затримка 2с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(170, 250, 50)'
        but3.style.border=' 2px solid rgb(170, 200, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 4){
        clicks -= but3tplev
        but3tplev +=1000
        povauttime =1200
        button3_level += 1
        hj3.innerHTML ='затримка 1.2с.'
        dobav3taplev= '1с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(210, 250, 50)'
        but3.style.border=' 2px solid rgb(210, 200, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 5){
        clicks -= but3tplev
        but3tplev +=1500
        povauttime =1000
        button3_level += 1
        dobav3taplev= '0.8с.'
        hj3.innerHTML ='затримка 1с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(250, 235, 50)'
        but3.style.border=' 2px solid rgb(250, 185, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 6){
        clicks -= but3tplev
        but3tplev +=1000
        povauttime =800
        button3_level += 1
        hj3.innerHTML ='затримка 0.8с.'
        dobav3taplev= '0.5с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(250, 210, 50)'
        but3.style.border=' 2px solid rgb(200, 210, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 7){
        clicks -= but3tplev
        but3tplev +=2500
        povauttime =500
        button3_level += 1
        hj3.innerHTML ='затримка 0.5с.'
        dobav3taplev= '0.3с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(250, 170, 50)'
        but3.style.border=' 2px solid rgb(200, 170, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 8){
        clicks -= but3tplev
        but3tplev +=2500
        povauttime =300
        hj3.innerHTML ='затримка 0.3с.'
        button3_level += 1
        dobav3taplev= '0.2с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(250, 130, 50)'
        but3.style.border=' 2px solid rgb(200, 130, 50)'
        setTimeout(but3abg,1)
    }
    else if (clicks >= but3tplev && button3_level == 9){
        clicks -= but3tplev
        but3tplev +=5000
        povauttime =200
        hj3.innerHTML ='затримка 0.2с.'
        button3_level += 1
        dobav3taplev= '0.05с.'
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = `${but3tplev}$`
        dobav3tap.innerHTML=`зменшити затримку до ${dobav3taplev}`
        but3.style.background='rgb(250, 90, 50)'
        but3.style.border=' 2px solid rgb(200, 90, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 10){
        clicks -= but3tplev
        but3tplev ="Maximum"
        povauttime =50
        hj3.innerHTML ='затримка 0.05с.'
        button3_level += 1
        dobav3taplev="Maximum"
        balans.innerHTML = `Баланс: ${clicks}$`
        but3tp.innerHTML = ``
        dobav3tap.innerHTML=`Maximum`
        but3.style.background='rgb(250, 50, 50)'
        but3.style.border=' 2px solid rgb(200,50, 50)'
        setTimeout(but3abg,1)
        ndf()
    }
    else if (clicks >= but3tplev && button3_level == 11){
       
    }
}
but3.addEventListener("click",abgr3)
