var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        persons: [
            {name: "huhx", love: "code"},
            {name: "chenhui", love: "book"}
        ],
        methods: {
            changeContent: function (element) {
                this.message = "I love " + element;
            }
        }
    }
})

