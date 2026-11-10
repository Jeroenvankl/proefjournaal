# Wijnacademie Proefjournaal

Een app voor de wijnproefavonden: blind proeven met de WSET-proefkaart, een raadspel, scores en favorieten, een wijnkaart met regiokaartjes, een druivenlexicon, een quiz per avond, slim herhalen (Leren), voorbereiding en terugblik per avond, aroma-oefeningen en emblemen. Alles wordt **op het toestel van de gebruiker** bewaard. Er is geen server en geen account.

## Online zetten met GitHub Pages

1. Maak op GitHub een nieuwe repository, bijvoorbeeld `proefjournaal`. Kies **Public**: GitHub Pages werkt bij een gratis account alleen met een publieke repository.
2. Kies **Add file → Upload files** en sleep de **inhoud** van deze map erin, inclusief de mappen `data`, `fonts` en `beheer`. Klik **Commit changes**.
   `.nojekyll` is een verborgen bestand. Zie je het niet, sla het dan over: de app werkt ook zonder.
3. Ga naar **Settings → Pages**. Kies bij *Source* **Deploy from a branch**, branch **main**, map **/ (root)**, en klik **Save**.
4. Na een minuut of twee staat de app op `https://<jouw-gebruikersnaam>.github.io/proefjournaal/`. Die link deel je met je vrienden.

## Installeren op de telefoon

- **iPhone (Safari):** open de link, tik op de Deel-knop en kies **Zet op beginscherm**. Doe dit echt: in gewone Safari kan de iPhone de gegevens wissen als de pagina zeven dagen niet geopend is.
- **Android (Chrome):** open de link en kies **App installeren** of **Toevoegen aan startscherm**.

De app werkt daarna ook zonder internet. De lettertypen staan in de map `fonts`, dus er wordt niets bij Google opgehaald.

## Waar staan de gegevens?

- Elke gebruiker heeft zijn eigen notities, alleen in de browser van zijn eigen toestel. Ze gaan niet naar GitHub, niet naar de organisator en niet naar elkaar.
- **Back-up** (via het startscherm) maakt één bestand met alle notities, quizscores en onthullingen. Op een ander toestel zet je dat terug; bij dezelfde wijn wint de nieuwste notitie.

## Bijwerken

- Upload de gewijzigde bestanden opnieuw naar GitHub. Gebruikers krijgen de nieuwe versie de volgende keer dat ze de app met internet openen; is de app op dat moment open, dan verschijnt een knop **Vernieuwen**.
- **Wijnen aanpassen:** open `https://<jouw-gebruikersnaam>.github.io/proefjournaal/beheer/wijnen.html`, laad de huidige lijst, pas aan, maak een nieuwe `wijnen.js` en upload die naar `data/`. Houd de sleutels (zoals `"03-B"`) gelijk, dan blijven notities gekoppeld.
- **Regio’s, druiven en quizvragen** staan leesbaar in `data/kennis.js`.

## Blind proeven

Iedereen onthult zelf, per avond, met **Onthul de wijnen** (twee keer tikken). De wijnen staan licht versleuteld in `data/wijnen.js`: spieken kan dus niet met één klik, maar wel voor wie er echt moeite voor doet.

## Leren en herhalen

Onder **Leren** staan ruim 750 kaarten: de quizvragen plus vragen die de app maakt uit de regiokaartjes en het druivenlexicon. Goed beantwoord schuift een kaart een vakje op en komt later terug (na 1, 3, 7, 14 en 30 dagen); fout komt morgen terug. Rijpe kaarten wachten tot je tijd hebt. Meldingen over fouten (knop “Klopt dit niet?”) gaan via het deelmenu naar de organisator, bijvoorbeeld via WhatsApp.

## Over de quiz en de profielen

De quizvragen zijn eigen vragen in de stijl van WSET Level 1 tot 3, geen officiële examenvragen. De profielen bij “Wat je kon vinden” beschrijven wat typisch is voor de stijl van een wijn; een individuele fles kan afwijken.
