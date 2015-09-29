// client

$(document).ready(function() {

    var dArray = [];
    var rArray = [];

    $.ajax({
        url: "/D.json"
    }).done(function(D_data) {

        var i = 0;
        while (i < D_data.length) {
            dArray.push((D_data[i].FIELD1 + " " + D_data[i].FIELD2));
            i++;
        }

        $.ajax({
            url: "/R.json"
        }).done(function(R_data) {

            var i = 0;
            while (i < R_data.length) {
                rArray.push((R_data[i].FIELD1 + " " + R_data[i].FIELD2));
                i++;
            }

            var masterArray = dArray.concat(rArray);

            $("#peopleButton").click(function() {
                var j = 0;
                while (j < masterArray.length) {
                    $("#peopleUL").append("<li>" + masterArray[j] + "</li>");
                    j++;
                }
                $("#winnerButton").show().click(function() {
                    $("#winnerLI").show().text("Winner: " + masterArray[getRandomInt(0, (masterArray.length - 1))]);
                });

            });

        });

    });

    function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

});