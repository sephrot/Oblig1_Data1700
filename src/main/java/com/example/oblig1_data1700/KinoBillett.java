package com.example.oblig1_data1700;

public class KinoBillett {
    private String valgtFilm;
    private int antall;
    private String fNavn;
    private String eNavn;
    private String tlfnr;
    private String epost;

    public KinoBillett(String valgtFilm, int antall, String fNavn, String eNavn, String tlfnr, String epost) {
        this.valgtFilm = valgtFilm;
        this.antall = antall;
        this.fNavn = fNavn;
        this.eNavn = eNavn;
        this.tlfnr = tlfnr;
        this.epost = epost;
    }

    public String getValgtFilm() {
        return valgtFilm;
    }

    public int getAntall() {
        return antall;
    }

    public String getfNavn() {
        return fNavn;
    }

    public String geteNavn() {
        return eNavn;
    }

    public String getTlfnr() {
        return tlfnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setValgtFilm(String valgtFilm) {
        this.valgtFilm = valgtFilm;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public void setfNavn(String fNavn) {
        this.fNavn = fNavn;
    }

    public void seteNavn(String eNavn) {
        this.eNavn = eNavn;
    }

    public void setTlfnr(String tlfnr) {
        this.tlfnr = tlfnr;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
