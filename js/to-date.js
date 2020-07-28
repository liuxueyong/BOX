// 主页-日期显示
        var date = new Date()
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate(); 
        document.getElementById("ymd").innerHTML = "# "+y+" / "+m+" / "+d;