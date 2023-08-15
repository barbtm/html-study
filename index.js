console.log('Hello!')
let favoriteMusic = 'Last Friday Night by Katy Perry'
document.getElementById ('display_fname').innerHTML = favoriteMusic


const idadeBruno = 10
const idadeBarb = 7
const idadeLara = 5
const idadeCriancas = [10, 7, 5, 15, 27] 
debugger
soma (idadeCriancas)

function soma (idadeCriancas){
    var total = 0
    for (var posicao in idadeCriancas){
        total = total + idadeCriancas[posicao];
    } 

    console.log(total)
}

let bookTitle = 'Por Lugares Incriveis'
 let bookAutor = 'Jennifer Niven'
 let bookPages = 326
 
 const book = {
     bookTitle: 'Por Lugares Incriveis',
     bookAutor: 'Jennifer Niven',
     bookPages: 326,
     bookCaps: {
        Cap1: 'Finch',
        Cap2: 'Violet',
        Cap3: 'Finch',

     },
     printBook: function(){
        console.log('Printing...')
     },
     
}

book.printBook()



function CreateBook (title, author, pages){
   
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages
}
const book1 = new CreateBook ('Me Before You', 'Jojo Moyes', 441);
book1.color = 'Red and white'
console.log(book1)
