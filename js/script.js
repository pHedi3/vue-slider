new Vue(
    {
        el: '#app',
        data: {
            img: [
                'img/1.jpg',
                'img/463135-new-girl-new-girl.jpg',
                'img/0477956dd0d298457a284be0e68cfd6f110f1f08fa43796b59a869f677aa39bc._RI_V_TTW_.jpg',
                'img/la-casa-di-carta-4-netflix_70447f24.jpg',
                'img/Tenebre-e-Ossa.jpg'
            ],
            imgCunter: 0
        },
        methods: {
            next: function() {
                if (this.imgCunter === this.img.length - 1) {
                   this.imgCunter = 0
                } else {
                    this.imgCunter++
                }
            },
            befor: function() {
                if (this.imgCunter === 0) {
                    this.imgCunter = this.img.length - 1
                } else {
                    this.imgCunter--
                }
            },
            pointer: function(index) {
                if( index === this.imgCunter) {
                    return 'pointer' + index
                }
            }

        },
        created() {
            setInterval(() => {
                this.next()
            }, 2000)
        }

    }
)