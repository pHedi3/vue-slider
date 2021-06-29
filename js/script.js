new Vue({
    el: '#app',
    data: {
        img: [
            'img/1.jpg',
            'img/463135-new-girl-new-girl.jpg',
            'img/0477956dd0d298457a284be0e68cfd6f110f1f08fa43796b59a869f677aa39bc._RI_V_TTW_.jpg',
            'img/la-casa-di-carta-4-netflix_70447f24.jpg',
            'img/Tenebre-e-Ossa.jpg'
        ],
        imgCunter: 0,
        timerSet: null,
    },
    created() {
        this.timer()
    },
    methods: {
        timer: function () {
            this.timerSet = setInterval(() => {
                this.next()
            }, 3000)
        },
        next: function() {
            if (this.imgCunter === this.img.length - 1) {
               this.imgCunter = 0
            } else {
                this.imgCunter++
            }
            clearInterval(this.timerSet)
            this.timer()
        },
        befor: function() {
            if (this.imgCunter === 0) {
                this.imgCunter = this.img.length - 1
            } else {
                this.imgCunter--
            }
            clearInterval(this.timerSet)
            this.timer()
        },
        pointer: function(index) {
            if( index === this.imgCunter) {
                return 'pointer' + index
            }
        },
        goTo: function(index) {
            this.imgCunter = index
            clearInterval(this.timerSet)
            this.timer()
        }
    }
    })