package com.example.oblig1_data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
@RestController
public class KinoController {
    private ArrayList<KinoBillett> kinobilletter = new ArrayList<KinoBillett>();
    @PostMapping("/opprett")
    public void opprettListe(KinoBillett kinoBillett) {
        kinobilletter.add(kinoBillett);
    }

    @GetMapping("/hentListe")
    public ArrayList<KinoBillett> hentListe() {
        return kinobilletter;
    }

    @GetMapping("/slett")
    public void slett() {
        kinobilletter.clear();
    }
}
