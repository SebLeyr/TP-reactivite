Vue.createApp({
    data() {
        return { 
            leNombre : 0,
            result : 0,
            afficherResult : "",
            time : 0
        };
    },
    methods : {
        reset(){
            this.leNombre = 0;
            this.afficherResult = "Temps écoulé !";
        },
        timeOut(){
            this.time = setTimeout(this.reset(), 5000);
        },
        leNombrePlus1(){
            this.leNombre = this.leNombre + 1;
            clearTimeout(this.time);
            this.timeOut();
        },
        leNombrePlus5(){
            this.leNombre = this.leNombre + 5;
            clearTimeout(this.time);
            this.timeOut();
        },
    },
    watch: {
        leNombre(value) {
            if(value == 7) {
                this.result = this.leNombre;
            } else if(value < 7) {
                this.afficherResult = "Essaie encore !";
            } else if(value > 7) {
                this.afficherResult = "Tu as dépassé le nombre mystère"
            }
        }
    }
}).mount('#monApp');