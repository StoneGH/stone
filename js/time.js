/**
 * Created by shitao on 2017/9/21.
 */
(function () {
    var options = {"formart": "yyyy-MM-dd"};
    var date = new Date();
    setTimeout(function () {
        date = new Date();
    }, 1000);
    var time = {
        formart: function (opt) {
            options.formart = opt;
            return this;
        },
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        getTime: function () {
            switch (options.formart) {
                case "yyyy-MM-dd":
                    return this.year + "-" + this.month + "-" + this.day;
                case "yyyy-MM-dd HH:mm":
                    return this.year + "-" + this.month + "-" + this.day + " :";
                case "yyyy-MM-dd HH:mm:ss":
                    return this.year + "-" + this.month + "-" + this.day + " ::";
                default:
                    return this.month + "-" + this.day;

            }
        },
        bind: function (dom) {
            setInterval(function () {
                document.querySelector(dom).innerHTML = this.Stone_Time.getTime();
            }, 1000);
            return;
        }
    };
    this.Stone_Time = time;
})();