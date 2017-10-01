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


// $.securityEncode("RDpbLfCPsJZ7fiv",
//     a, "yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW")
// }


function orgAuthPwd(a) {
    return this.securityEncode(a, "RDpbLfCPsJZ7fiv", "yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW")
};

function securityEncode(a, c, b) {
    var d = "", e, f, g, h, k = 187, m = 187;
    f = a.length;
    g = c.length;
    h = b.length;
    e = f > g ? f : g;
    for (var l = 0; l < e; l++)m = k = 187, l >= f ? m = c.charCodeAt(l) :
        l >= g ? k = a.charCodeAt(l) : (k = a.charCodeAt(l), m = c.charCodeAt(l)), d += b.charAt((k ^ m) % h);
    return d
};


console.log(orgAuthPwd('123'));