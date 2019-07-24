// const TypeWriter = function(txtElement, words, wait = 3000){
//    this.txtElement = txtElement; 
//    this.words = words;
//    this.txt = '';
//    this.wordIndex = 0;
//    this.wait = parseInt(wait,10);
//    this.type();
//    this.isDeleting = false;
// }

// //type Method 
// TypeWriter.prototype.type = function(){

//     //current index of word 
//     const current = this.wordIndex % this.words.length;
//     //get full text of current word
//     const fullTxt = this.words[current] 
    
//     //check if deleting
//     if(this.isDeleting){
//         //remove char
//         this.txt = fullTxt.substring(0,this.txt.length - 1);
//     }else{
//         //add char
//         this.txt = fullTxt.substring(0,this.txt.length + 1);
//     }
//     //insert txt into element 
//     this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`
//     //initial type speed 
//     let typeSpeed = 150;

//     if(this.typeSpeed){
//         typeSpeed /= 2;
//     }

//     //if word is complete
//     if(!this.isDeleting && this.txt === fullTxt){
//         //make pause at the end 
//         typeSpeed = this.wait;
//         //set isdelete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         //move to the next word 
//         this.wordIndex++;
//         //pause before start typing 
//         typeSpeed = 500;
//     }
    
//     setTimeout(() => this.type() , typeSpeed);
// }

// document.addEventListener('DOMContentLoaded',init);

// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');

//     //init TypeWriter
//     new TypeWriter(txtElement, words, wait);
// }


// ES6 Class

class TypeWriter{
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement; 
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }

    //type Method 
    type(){

        //current index of word 
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current] 
        
        //check if deleting
        if(this.isDeleting){
            //remove char
            this.txt = fullTxt.substring(0,this.txt.length - 1);
        }else{
            //add char
            this.txt = fullTxt.substring(0,this.txt.length + 1);
        }
        //insert txt into element 
        this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`
        //initial type speed 
        let typeSpeed = 150;

        if(this.typeSpeed){
            typeSpeed /= 2;
        }

        //if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            //make pause at the end 
            typeSpeed = this.wait;
            //set isdelete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to the next word 
            this.wordIndex++;
            //pause before start typing 
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type() , typeSpeed);
}
} 

document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init TypeWriter
    new TypeWriter(txtElement, words, wait);
}