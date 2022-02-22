Vue.createApp({
    data() {
        return { 
            leNombre : 0,
            result : 0,
        };
    },
    computed: {
        afficherResult() {
            if(this.leNombre === 7) {
                return this.leNombre;
            } else if(this.leNombre < 7) {
                return "Essaie encore !";
            } else {
                return "Tu as dépassé le nombre mystère";
            }
        }
    },
    methods : {
        leNombrePlus1(){
            this.leNombre = this.leNombre + 1;
        },
        leNombrePlus5(){
            this.leNombre = this.leNombre + 5;
        },
    },
    watch: {
        leNombre(value) {
            console.log('le watcher en action...');
            setTimeout(() => {
            this.leNombre = 0;
            }, 5000);
        },
    },
}).mount('#monApp');