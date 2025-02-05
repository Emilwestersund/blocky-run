# Blocky Run

## Beskrivelse

**Blocky Run** er et nettleserbasert spill hvor spilleren styrer en rød figur som må hoppe over en blå blokk for å overleve og tjene poeng. Spillet bruker Firebase Firestore for å lagre høyeste poengsummer. Opprinnelig var målet å lage et "clicker-spill" med en økonomi der spilleren kunne tjene penger, men på grunn av problemer med Firebase ble prosjektet til **Blocky Run**, hvor fokus nå er på å lagre og vise de høyeste poengene.

### Teknologier Brukt:
- **HTML** for struktur.
- **CSS** for styling.
- **JavaScript** for spilllogikk og interaksjon.
- **Firebase Firestore** for å lagre og hente høyeste poengsummer.

## Funksjoner
- Spilleren kan klikke for å få figuren til å hoppe og unngå hindringer.
- De 5 høyeste poengsummene lagres i Firebase Firestore.
- Poengene vises og oppdateres ettersom spilleren overlever lengre.
- Enkel og morsom spillopplevelse inspirert av det populære Dino Run-spillet.

## Utviklingslogg

### Uke 1: Initial Oppsett og Grunnleggende Spillmekanikk
- **Hva ble gjort:**
    - Bestemte prosjektidé og fikk godkjenning fra lærer.
    - Lagde HTML-strukturen for spillområdet, figuren og blokkene.
    - Lagde en enkel hopp-animasjon for figuren med CSS.
    - Implementerte grunnleggende spillmekanikk i JavaScript, som å få figuren til å hoppe og avslutte spillet når den kolliderte med blokken.
    - Satt opp Firebase-prosjektet og integrerte Firestore for å lagre poeng.
    - Klarte å vise de lagrede poengene i spillet.

- **Problemer og løsninger:**
    - Ingen store problemer, men det var litt tid brukt på å forstå hvordan Firestore fungerer for lagring og henting av data.

### Uke 2: Firebase Autentisering og Problemer med Spillerdata (Clicker Spill)
- **Hva ble gjort:**
    - La til Firebase Authentication for å tillate brukere å logge inn og lagre poengene sine.
    - I et forsøk på å lage et "clicker-spill" inkluderte vi en funksjon for å lagre spillerens penger i tillegg til poengene. Spilleren skulle kunne tjene penger ved å klikke på objekter i spillet, men dette skapte problemer med strukturen i Firestore.
    - Brukte tid på å implementere funksjonen for å lagre og hente spillerdata (penger og poeng) fra Firestore.

- **Problemer og løsninger:**
    - Vi støtte på problemer med å lagre flere felter (som penger) i Firestore for hver spiller. Firebase håndterte ikke den strukturerte dataen godt nok, og vi bestemte oss for å forenkle prosjektet.
    - Fjernet funksjonene for spillerdata (penger) og fokuserte på å lagre og vise kun poeng.

### Uke 3: Prosjektomlegging til Blocky Run (Dino Run Klon)
- **Hva ble gjort:**
    - Etter å ha støtt på flere problemer med Firebase og spillerdata, bestemte vi oss for å endre prosjektet til en enklere versjon inspirert av Dino Run, og dermed ble det omdøpt til **Blocky Run**.
    - Endret designet til figuren og blokken for å matche en enklere stil (Blocky Run).
    - Fjernet Firebase Authentication og spillerdata, og fokuserte på å lagre og vise kun poengene.
    - Fullførte spillmekanikken og sørget for at poengene ble lagret og hentet fra Firebase Firestore.
    - Publiserte prosjektet på GitHub.

- **Problemer og løsninger:**
    - Vi måtte endre prosjektets retning, men det førte til en mer stabil og enklere løsning. Fokuserte kun på poengsystemet og implementerte det på en stabil måte.

---

## Utfordringer og Løsninger
- **Firebase Problemer:** I starten prøvde vi å lage et "clicker-spill" der spillerdata som penger og poeng skulle lagres, men dette skapte problemer i Firestore med komplekse datastrukturer. Etterhvert bestemte vi oss for å forenkle prosjektet til et enklere format, og fokusere på poenglagring, som løste problemene med integrasjonen.
  
- **Spilllogikk:** Kollisjonssjekkene mellom figuren og blokken var utfordrende å få til, og vi brukte tid på å sørge for at dette var nøyaktig. Feilsøking og testing var viktig for å få det riktig.

---

## Evaluering

### Hva Vi Har Lært:
- Hvordan håndtere spilllogikk og animasjoner med JavaScript.

### Utfordringer:
- Å jobbe med Firebase Firestore og møte problemer med komplekse datastrukturer.
- Omleggingen fra et mer komplekst spill til et enklere spill var vanskelig, men førte til et funksjonelt og morsomt spill.

---

### Fremtidige Forbedringer:
- Legge til flere nivåer eller forskjellige typer hindringer.
- Implementere spillerrelaterte data med Firebase på nytt, og sørge for riktig struktur og henting.
- Høyere fart etter menge score

---
