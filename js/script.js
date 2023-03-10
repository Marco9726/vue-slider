const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            autoplay : null,
            activeImage: 0,
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

        }
    },
    created() {
        // richiamo la funzione dell'autoplay nel creeted per farlo partire al caricamento della pagina 
        this.startAutoplay()
    },
    methods: {
        //metodo per cliccare una thumb e renderla attiva
        chooseThumb(index){
            this.activeImage = index;
        },
        //metodo per passare all'immagine successiva
        nextImage(){
            //incremento il contatore di 1
            this.activeImage++;
            //se il valore del contatore diventa maggiore della lunghezza dell'array -1, visualizza l'ultima immagine
            if(this.activeImage > this.slides.length - 1){
                this.activeImage = 0;
            }
        },
        //metodo per passare all'immagine precedente
        prevImage(){
            //decremento il contatore di 1
            this.activeImage--;
            //se il valore del contatore diventa mine della di 0, visualizza la prima immagine
            if(this.activeImage < 0){
                this.activeImage = this.slides.length -1;
            }
        },
        //metodo per far partire l'autoplay
        startAutoplay(){
            this.autoplay = setInterval(() => {
                this.nextImage()
            }, 3000)
        },
        //metodo per stoppare l'autoplay
        stopAutoplay(){
            clearInterval(this.autoplay);
            this.autoplay = null;
        }
        
    }
}).mount('#app')
