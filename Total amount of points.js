function points(games) {
    var i = 0;
    var points = 0;
    for (i = 0; i < games.length; i++) {
        var x = games[i].split(":");
        if (x[0] > x[1]) {
           points += 3;
       }
       if (x[0] < x[1]){
            points += 0;
        }
       if (x[0] == x[1]) {
            points += 1;
        }
        }
    return points;
}
