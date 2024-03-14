let ut = "";
$("#kjopBillett").click(function () {
    let feilmeldinger = ["Må skrive noe i fornavnet", "Må skrive noe i etternavnet",
        "Må skrive noe inn i telefonnr", "Må skrive noe inn i epost", "Må skrive noe i antall"];
    let listesjekk = ["fNavn", "eNavn", "tlfnr", "epost"];
    let film = $("#film");
    let fNavn = $("#fNavn").val();
    let eNavn = $("#eNavn").val();
    let tlfnr = $("#tlfnr").val();
    let epost = $("#epost").val();
    let antall = parseInt($("#antall").val());
    let valgtFilm = $("#film").val();



    let harSkrevet = true;
    let billett = {
        antall: antall,
        fNavn: fNavn,
        eNavn: eNavn,
        tlfnr: tlfnr,
        epost: epost,
        valgtFilm: valgtFilm
    };

    if (valgtFilm !== "default") {
        $("#velgFilm").html("");
        if (antall > 0) {
            $("#velgFilm").html("");
            for (let i = 0; i < listesjekk.length;i++) {
                if (billett[listesjekk[i]] === "") {
                    $("#skrivAntall").html("");
                    $("#output" + i).html(feilmeldinger[i]);
                    harSkrevet = false;
                } else {
                    $("#output" + i).html("");
                }
            }
            if (harSkrevet) {
                $.post("/opprett", billett, function(){
                    hentAlle();
                });
            }
        }
        else {
            $("#skrivAntall").css("color", "red").html("Må skrive noe i antall!");

        }
    }
    else {
        $("#velgFilm").css("color", "red").html("Du må velge film!");

    }



});

function hentAlle() {
    $.get( "/hentListe", function( data ) {
        formaterData(data);
    });
}

function formaterData(billetter){
    ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetter) {
        console.log(b);

        ut += "<tr>" +
            "<td>" + b.valgtFilm + "</td>" +
            "<td>" + b.antall + "</td>" +
            "<td>" + b.fNavn + "</td>" +
            "<td>" + b.eNavn + "</td>" +
            "<td>" + b.tlfnr + "</td>" +
            "<td>" + b.epost + "</td>" +
            "</tr>";
    }
    ut+="</table>";
    $("#alleBilletter").html(ut);
}
$ ("#slettInfo").click(function (){
    $.get("/slett", function(){
        hentAlle();
    });
});

