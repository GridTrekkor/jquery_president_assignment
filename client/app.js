// client

$(document).ready(function() {

    var dArray = [], rArray = [];

    $.ajax({
        url: "/D.json"
    }).done(function(D_data) {

        var i = 0;
        while (i < D_data.length) {
            dArray.push("<span style='color:#00F'>" + D_data[i].FIELD1 + " " + D_data[i].FIELD2 + "</span>");
            i++;
        }

        $.ajax({
            url: "/R.json"
        }).done(function(R_data) {

            i = 0;
            while (i < R_data.length) {
                rArray.push("<span style='color:#F00'>" + R_data[i].FIELD1 + " " + R_data[i].FIELD2 + "</span>");
                i++;
            }

            var masterArray = dArray.concat(rArray);

            $("#peopleButton").click(function() {
                $("#peopleUL").empty();
                var j = 0;
                while (j < masterArray.length) {
                    $("#peopleUL").append("<li>" + masterArray[j] + "</li>");
                    j++;
                }
                $("#peopleUL").fadeIn(200);
                $("#winnerButton").show().click(function() {
                    $("#winnerLI").fadeIn(200).html("Winner: " + masterArray[getRandomInt(0, (masterArray.length - 1))]);
                });
                $("#peopleButton").hide();

            });

        });

    });

    function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

});