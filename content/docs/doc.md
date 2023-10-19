Logge dich in dem Backend (Strapi) ein. Hier kannst du den gesamten Inhalt der Seite gestalten. In der Regel findest du alles unter _Content Manager_, wenn du das **Premium Paket** nimmst siehst du auch nichts anderes und es ist schon alles vorher eingestellt.

Für die self-hosting müssen ggf. noch ein paar Sachen eingestellt werden - sofern nicht die Init DB genommen wird. Dies Punkte zum ggf. einstellen für self-hosting sind entsprechend bei den Überschriften gekennzeichnet, Cloud User können dies überspringen.

**Wichtig:** Dies ist nicht der gleiche Code/Login wie auf der WeddIn-Seite selbst auf dem du dann die Infos siehst oder sich die Gäste einloggen. Das Backend siehst nur du und ist ein separater Login.

<img src="images/docs/strapi_start.png" width="750" />

Im folgenden gehen wir Schritt für Schritt die Inhalte durch, die du Einstellen kannst um deine persönliche WeddIn Seite zu erstellen.

---

- Internationalization - Mehrsprachigkeit
- Strapi Users (_nur für Self-hosting_)
- User Roles and permissions (_nur für Self-hosting_)
- Content Manager

---

#### Internationalization - Mehrsprachigkeit

WeddIn erlaubt es den Inhalt in unterschiedlichen Sprachen darzustellen. Dies ist besonders praktisch bei einer internationalen Hochzeit. So wird dann jedem Gast die Informationen in seiner Sprache angezeigt.

<img src="images/docs/internationalization.png" width="750" />

Hierzu können ja nach Wunsch die gewünschten Sprachen hinzugefügt werden und die Default-Sprache eingestellt werden. (_Bei Cloud Usern schon vorkonfiguriert._)

Besucht ein Gast die WebSeite, wird anhand der Browser-Sprache vom Browser versucht die Inhalte in seiner Sprache zu laden. Ist diese Sprache nicht im Backend endhalten, werden automatisch die Inhalte in der Default-Sprache geladen. Der Gast kann nach dem Login noch selbst seine gewünschte Sprache einstellen - hier sieht er alle möglichen Sprachen die im Backend eingestellt wurden.

<img src="images/docs/language.png" />

Wenn mehr als eine Sprache eingestellt wurde. Muss beim pflegen von dem Inhalt auch darauf geachtet werden, dass dieser in allen Sprachen vorhanden ist. Welche Inhalt in anderen Sprachen übersetzt werden kann erkannt man an der Oberfläche immer ein 🌐 icon.

<img src="images/docs/world_icon.png" />

Beim eingeben solcher Daten findest du dann immer eine Dropdown zur Einstellung der Sprache und entsprechend zum Wechsel um die Daten dann für diese Sprache anzulegen. **TIPP:** Erst den gesamten Inhalt in der Default Sprache füllen und dann mit _Fill from another locale_ in die anderen Sprachen kopieren und anpassen.

<img src="images/docs/locales_content.png" width="750"/>

---

#### Strapi Users (_nur für Self-hosting_)

---

#### User Roles and permissions (_nur für Self-hosting_)

---

#### Content Manager

An dieser Stelle pflegen wir den gesamten Inhalt der Seite, legen das Design fest und bestimmten Regeln.

<img src="images/docs/content_manager.png" width="750"/>

- Appearance _--> globales Aussehen/Farben definieren_
- Footer _--> Letztes Element auf der Seite_
- General _--> allgemeine Einstellungen wie Hochzeitstag_
- GuestFeedback _--> Regeln fürs Rückmelden der Gäste_
- Header _--> Aufbau vom Header beim Besuch der Seite_
- Menu _--> Essensmenü und Getränkeliste_
- Sign In _--> Anmeldemöglichkeiten_
- Invitations & Guests _--> Anlegen der Gäste und Einladungen(Codes) zuweisen für den Login_
- GuestPreferences & Items _--> Umfrage was jeder Gast bei der Zusage mit Angeben kann, z.B. Essens o. Getränkewunsch_
- Sections _--> Aufbau der Seite und Inhalt_

##### Appearance - Aussehen

| Einstellung           | Default     | Man. | Lng. | Hinweis                                                                                           |
| --------------------- | ----------- | ---- | ---- | ------------------------------------------------------------------------------------------------- |
| **primaryColor**      | _#FF847C_   | ✔️   |      | HEX-Value für Erstfarbe - für Buttons, Inputs und Überschriften                                   |
| **secondaryColor**    | _#7871C2_   | ✔️   |      | HEX-Value für Zweitfarbe - für Buttons, Inputs und Überschriften                                  |
| **accentColor**       | _#C1C1C1_   | ✔️   |      | HEX-Value für Accent Farbe (für Trenner und ähnliches), in der Regel passt hier der Wert          |
| **accentColorDarken** | _#999999_   | ✔️   |      | HEX-Value für dunklere Accent Farbe (für Trenner und ähnliches), in der Regel passt hier der Wert |
| **titleColor**        | _secondary_ | ✔️   |      | Farbe für die Überschriften (je Section )                                                         |
| **dividerTitleColor** | _primary_   | ✔️   |      | Farbe für den Trennstrich unter den Überschriften                                                 |

##### Footer

| Einstellung | Default                  | Man. | Lng. | Hinweis                        |
| ----------- | ------------------------ | ---- | ---- | ------------------------------ |
| **text**    | Wir freuen uns auf euch! |      | ✔️   | Text ganz am Ende der Webseite |

##### General

| Einstellung       | Default         | Man. | Lng. | Hinweis                                                                                              |
| ----------------- | --------------- | ---- | ---- | ---------------------------------------------------------------------------------------------------- |
| **coupleName**    | Sandra & Martin | ✔️   |      | Name vom Brautpaar/ Event name, wird im Header und Login angezeigt                                   |
| **weddingDate**   | 4/24/2024       | ✔️   |      | Datum für die Hochzeit/ Event                                                                        |
| **confirmLatest** | 12/31/2023      | ✔️   |      | Datum bis wann die Gäste spätestens Rückmeldung geben sollen                                         |
| **countdown**     | 4/24/2024 13:00 | ✔️   |      | Genauer Zeitpunkt an dem das Event startet, für den Countdown auf im Header auf der Startseite       |
| **logo**          |                 |      |      | Bild welches auf der Login-Seite gezeigt wird, Optimalfall Quadratisch und transparenter Hintergrund |

##### GuestFeedback

| Einstellung                   | Default | Man. | Lng. | Hinweis                                                                                                            |
| ----------------------------- | ------- | ---- | ---- | ------------------------------------------------------------------------------------------------------------------ |
| **plusOneForSinglePerson**    | true    | ✔️   |      | Ob ein Gast (Single, nur ein Erwachsener) noch eine weitere Person +1 eintragen kann beim zusagen auf der Webseite |
| **canEditAfterConfirmLatest** | false   | ✔️   |      | Ob ein Gast nach dem Datum der spätestens Rückmeldung noch Daten ändern kann                                       |

##### Header

| Einstellung              | Default            | Man. | Lng. | Hinweis                                                                                     |
| ------------------------ | ------------------ | ---- | ---- | ------------------------------------------------------------------------------------------- |
| **image**                |                    |      |      | Bild beim Header als Hintergrund                                                            |
| **title**                | Kirchliche Trauung | ✔️   | ✔️   | Title auf dem Header                                                                        |
| **showCoupleName**       | true               | ✔️   |      | Zeigt Namen im Header                                                                       |
| **showDate**             | true               | ✔️   |      | Zeigt Datum im Header                                                                       |
| **showGuestName**        | true               | ✔️   |      | Zeigt Gäste Namen im Header                                                                 |
| **showInvitationButton** | true               | ✔️   |      | Zeigt Einladungsbutton im Header                                                            |
| **brightText**           | true               | ✔️   |      | bei true --> weiße Schrift, sonst schwarze Schrift                                          |
| **headerOverlayColor**   | #7871c2            |      |      | HEX Farbe über dem Bild                                                                     |
| **opacityOverlayColor**  | 0.25               |      |      | Durchsichtigkeit der Overlay Farbe, bei 1 komplett durchsichtig bei 0 nur die overlay Farbe |
| **showCountdown**        | true               | ✔️   |      | Anzeige vom Countdown - bei kleinen Geräten sowieso nicht hidden                            |

##### Menu

Inhalt zum Anzeigen einer Getränke oder Essenskarte.

**Hinweis**: Die URL kann neben dem Icon im Header auf direkt aufgerufen werden - ohne Login. Die Url ist immer http://[meine-url]/#/menu (z.B. [https://demo.weddin.site/#/menu](https://demo.weddin.site/#/menu)). Somit kann auch ein Barcode dafür erstellt werden und bei der Hochzeit ausgelegt werden.

<img src="images/docs/menu_button.png"/>

<p></p>

| Einstellung      | Default  | Man. | Lng. | Hinweis                                                                                                                                                                                            |
| ---------------- | -------- | ---- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **showInHeader** | true     | ✔️   |      | Ob das Icon oben im Header angezeigt werden soll                                                                                                                                                   |
| **visibleFrom**  | 1/1/2021 |      |      | Datum ab wann das Icon zu sehen ist , z.B. um die Getränkekarte erst 1 Woche vor der Party den Gästen zugänglich zu machen                                                                         |
| **content**      |          |      | ✔️   | Dynamische Widgets vom Typ Title/GroupTitle/Item, hier können beliebig viele Widgets von dem Typ hinzugefügt werden und entsprechend Sortiert werden, bestimmt was auf der Menu Seite zu sehen ist |

<p></p>

<img src="images/docs/menu_widgets.png"/>

<p></p>

###### Widget - Title

| Einstellung  | Default  | Man. | Hinweis |
| ------------ | -------- | ---- | ------- |
| **Title**    | Getränke | ✔️   |         |
| **Subtitle** |          |      |         |

###### Widget - GroupTitle

| Einstellung  | Default       | Man. | Hinweis |
| ------------ | ------------- | ---- | ------- |
| **Title**    | Bier vom Fass | ✔️   |         |
| **Subtitle** |               |      |         |

###### Widget - Item

| Einstellung | Default                | Man. | Hinweis |
| ----------- | ---------------------- | ---- | ------- |
| **Item**    | Pilsner Urquell        | ✔️   |         |
| **Remark**  | - for the czech guy ;) |      |         |

##### SignIn

| Einstellung        | Default                                     | Man. | Lng. | Hinweis                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------- | ---- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **signInRequired** | true                                        | ✔️   |      | Ob zum Aufruf der Daten ein Code benötigt wird, oder man direkt auf der Seite kommt um alles zu sehen. **Achtung**: Es auf false zu stellen ist nicht Empfohlen --> die Seite dient dann nur noch als Informationsplattform, eine direkte Rückmeldung von Gästen ist dann nicht mehr möglich |
| **title**          | Hallo lieber Hochzeitsgast                  |      | ✔️   | Title auf der Login Seite                                                                                                                                                                                                                                                                    |
| **subtitle**       | Bitte Code von der Einladungskarte eingeben |      | ✔️   | Subtitle auf der Login Seite                                                                                                                                                                                                                                                                 |

##### Invitations & Guests

Die Gäste sind das Herzstück jeder Hochzeit und auch das Herzstück von WeddIn. Dabei gibt es Einladungen (Invitations) so wie in physischer/herkömmlichen Form auch. Und jeder Einladung sind die Gäste (Guests) zugeordnet. Die Einladung kann klassischer Weise als der Benutzer (User) angesehen werden. Der ein Code bekommt und sich dann auf WeddIn anmelden kann um schließlich seinen zugeordneten Gästen für die Hochzeit zuzusagen oder abzusagen.

###### Invitations

| Einstellung               | Default               | Man. | Lng. | Hinweis                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | --------------------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **username**              | [CODE]                | ✔️   |      | Der Code mit dem sich der Gast anmelden kann, jeder Gast muss hier seinen eigenen persönlichen Code erhalten. Es bietet sich an den Spitznamen, ein besonderes Ereignis, Hobby oder ähnliches zum nehmen.                                                                                                                          |
| **password**              | [CODE]                | ✔️   |      | muss das gleiche wie der _username_ sein                                                                                                                                                                                                                                                                                           |
| **invitationname**        | Sophie & Max          | ✔️   |      | Namen von den Gästen für die Einladung - sehen die Gäste auf der Seite                                                                                                                                                                                                                                                             |
| **email**                 | code@demo.weddin.site | ✔️   |      | E-Mail, ist Pflicht aber kann irgendeine eingetragen werden, hier passiert noch keine Logik hinter                                                                                                                                                                                                                                 |
| **remark**                | Freunde von Sandra    |      |      | Kommentar zu der Einladung, kann von den Gästen nicht gesehen werden, dient nur dem Brautpaar in der Übersicht                                                                                                                                                                                                                     |
| **subscribed_newsletter** | false                 | ✔️   |      | kann Erstmal ignoriert werden --> Idee für später: je Einladung kann durch das Brautpaar und dem Gast später die Email eingestellt werden. Der Gast soll dann die Möglichkeit zu haben sich in einem Newsletter anzumelden um bei Änderungen oder ähnliches auf dem neusten Stand zu bleiben.                                      |
| **role**                  | Authenticated         | ✔️   |      | Das Brautpaar die Rolle _Admin_, der Rest _Authenticated_. Mit Admin Rechte kann das Dashboard angesehen werden und die zusagen und absagen aller Gäste geschaut werden.                                                                                                                                                           |
| **guests**                | [Sophie, Max]         | ✔️   |      | 1:n Beziehung zu den Gästen. Jeder Einladung muss dann noch die Gäste zugeordnet werden.                                                                                                                                                                                                                                           |
| **isGroupInvitation**     | false                 | ✔️   |      | (BETA-Feature) Für eine Gruppeneinladung gelten spezielle Regeln (z.B. keine Möglichkeit der Zu-/Absage) und braucht als einziges keine Gästezuordnung. Dies ist eher gedacht Informationen einer Gruppe bereitzustellen (z.B. seinen Fußball-Kollegen), bei denen es nicht auf eine Zu-/Absage ankommt und auch nicht die Anzahl. |
| **invitation_type**       |                       |      |      | Es könnten mehrere Einladungstypen (InvitationTypes) angelegt werden, z.B. Abends. Gäste mit diesen InvitationType könnte dann später beim Inhalt bestimmtes verborgen blieben, bzw. eine andere Beginn Zeit.                                                                                                                      |

###### Guests

| Einstellung     | Default | Man. | Lng. | Hinweis                                                                                                                                                                                                                                                                        |
| --------------- | ------- | ---- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **name**        | Max     |      |      | Name vom Gast                                                                                                                                                                                                                                                                  |
| **fixed**       | true    |      |      | beim Anlegen immer auf **true** lassen. Dieser Gast kann dann nicht durch dem User gelöscht werden bzw. der Name verändert werden. Dient eher dem Kenner wenn einer Gast durch +1 einen weiteren hinzugefügt hat den Namen eintragen kann und dann ggf. wieder löschen möchte. |
| **stageOfLife** | adult   | ✔️   |      | Erwachsener \| Kind \| Baby - dient rein zu Einordnung auf dem Dashboard                                                                                                                                                                                                       |
| **attend**      | unknown | ✔️   |      | Speicherung von Zu/Absage pro Gast - wenn **unknown** dann noch keine Rückmeldung --> immer bei neuer Anlage ausgewählt sein                                                                                                                                                   |
| **invitation**  | [CODE]  | ✔️   |      | Zuordnung zu einer Einladung zu dem Gast                                                                                                                                                                                                                                       |

###### InvitationsFeedback

**HIER MUSS AN DEN DATEN NICHTS GEÄNDERT WERDEN.** Hier werden die Rückmeldungen wie Hotel/Shuttle gespeichert - Sofern diese Widgets auf der Seite hinzugefügt wurden.

###### InvitationsTypes

| Einstellung    | Default | Man. | Lng. | Hinweis                                                                                              |
| -------------- | ------- | ---- | ---- | ---------------------------------------------------------------------------------------------------- |
| **type**       | main    | ✔️   |      | beliebiger Name für den Einladungstyp                                                                |
| **default**    | false   | ✔️   |      | Ob dies der Standard Einladungstyp ist, wird gezogen wenn bei der Einladung kein Typ angegeben wird. |
| **canConfirm** | true    | ✔️   |      | Ob die Einladung die Zu/Absagen Sektion auf sehen kann.                                              |

##### GuestPreferences & Items

Nebem dem Zu/Absagen von Gästen kann dazu noch Umfrage-Mäßig weitere Daten erfasst werden. Hier müssen die _GuestPreferences_ (Topic der Daten die man erfassen möchte) und _GuestPreferenceItems_ die Auswahlmöglichkeiten die der Gast auswählen kann, hinterlegt werden.

Ein klassisches Beispiel ist die Erfassung der Getränke-Wünsche um so die Organisation für Bier/Wein/Cocktails oder Sonstiges einfacher zu gestalten. Der Getränkewunsch wäre an dieser Stelle, dann eine Zeile in _GuestPreferences_ und die Auswahl sind Zeilen in _GuestPreferenceItems_ die dem korrekten _GuestPreference_ zugeordnet sind. Auch kann dies so eingestellt werden, dass bestimmte Altersgruppen eine andere Auswahl haben oder gar nichts auswählen können.

<img src="images/docs/guest_preferences.png"/>

###### GuestPreferences

| Einstellung                | Default                  | Man. | Lng. | Hinweis                                                                                          |
| -------------------------- | ------------------------ | ---- | ---- | ------------------------------------------------------------------------------------------------ |
| **key**                    | drink                    | ✔️   |      | beliebiger eineindeutiger Key, für jedes Preferences muss ein anderer Key genommen werden        |
| **label**                  | Getränkewunsch           | ✔️   | ✔️   | Auf der Seite für den Nutzer angezeigtes Label                                                   |
| **sort**                   | 0                        | ✔️   |      | Sortierung der Abfrage der einzelnen Preferences unter sich, kleinste Zahl wird zuerst angezeigt |
| **active**                 | true                     | ✔️   |      | Ob die Abfrage aktiv ist und angezeigt wird                                                      |
| **canAdultChoose**         | true                     | ✔️   |      | Ob die Abfrage für Erwachsene angezeigt wird                                                     |
| **canChildChoose**         | true                     | ✔️   |      | Ob die Abfrage für Kinder angezeigt wird                                                         |
| **canBabyChoose**          | true                     | ✔️   |      | Ob die Abfrage für Babys angezeigt wird                                                          |
| **canChooseMultiple**      | false                    | ✔️   |      | Ob eine Mehrfachauswahl möglich ist, also nur Bier oder auch Bier und Wein.                      |
| **isOneSelectionRequired** | false                    | ✔️   |      | Ob eine Abfrage vor dem Zusagen auch befüllt sein muss, sonst kann nicht zugesagt werden         |
| **defaultSelection**       | beer                     |      |      | **Value** von dem GuestPreferenceItem, dass per Default ausgefüllt sein soll bei der Abfrage     |
| **canFillOther**           | false                    | ✔️   |      | Ob das Input Feld "other" angezeigt werden soll für eine beliebige Texteingabe                   |
| **otherHint**              | Allergien oder sonstiges |      | ✔️   | Hinweis zum füllen der freien Eingabe, was ihr hier erwartet                                     |
| **guest_prefrence_items**  | [beer, vine, cocktails]  |      | ✔️   | 1:N Beziehung zu _GuestPreferenceItems_ die bei der Abfrage angezeigt werden sollen              |

###### GuestPreferenceItems

| Einstellung         | Default | Man. | Lng. | Hinweis                                                                              |
| ------------------- | ------- | ---- | ---- | ------------------------------------------------------------------------------------ |
| **value**           | beer    | ✔️   |      | beliebiger eineindeutiger Wert, für jedes Item muss ein anderer Wert genommen werden |
| **label**           | Bier    | ✔️   | ✔️   | Auf der Seite für den Nutzer angezeigtes Label                                       |
| **sort**            | 0       | ✔️   |      | Sortierung der Auswahlmöglichkeit, kleinste Zahl wird zuerst angezeigt               |
| **forAdult**        | true    | ✔️   |      | Ob die Auswahlmöglichkeit für Erwachsene möglich ist                                 |
| **forChild**        | true    | ✔️   |      | Ob die Auswahlmöglichkeit für Kinder möglich ist                                     |
| **forBaby**         | true    | ✔️   |      | Ob die Auswahlmöglichkeit für Babys möglich ist                                      |
| **guest_prefrence** | drink   |      | ✔️   | 1:1 Beziehung zu _GuestPreferences_                                                  |

##### Sections

Hier bestimmt ihr spielend leicht den Inhalt eurer Seite. Es ist bewusst sehr stringent und Bewusste hier nur wenige Spielraum vom Styling her gegeben. Dadurch ist man zum einen nicht komplett Überfordert und nimmt die Komplexität zum anderen können wir so sicherstellen, dass die Seite vom Theming her passt, eine gewisse User Experience hat und die Standard an der Usability einhält. Nicht desto habt ihr den kompletten Inhalt in eurer Hand und mit Hilfe von vorgebauten **Componenten** könnt ihr diesen auch schön darstellen.

Im folgenden wird zuerst die Sections vorgestellt und dann die **Componenten**, gut ist dies ganze in der Live Demo zu sehen.

| Einstellung          | Default | Man. | Lng. | Hinweis                                                                                                                                                         |
| -------------------- | ------- | ---- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **sort**             | 0       | ✔️   |      | Sortierung der Sektionen, kleinste Zahl wird zuerst angezeigt auf der Seite                                                                                     |
| **showInMenu**       | true    | ✔️   |      | ob die Sektion im Menu mit angezeigt wird                                                                                                                       |
| **title**            | Hotels  | ✔️   | ✔️   | Die Überschrift der Sektion                                                                                                                                     |
| **subtitle**         | true    | ✔️   | ✔️   | Text unter der Überschrift - Markdown Input. Hier sollten aber nicht viele so Zeichen verwendet werden.                                                         |
| **content**          |         |      | ✔️   | Hier kann eine Liste verschiedener Komponenten/Widgets hinzugefügt werden. Um so jede Sektion mit Inhalt zu füllen. Hier am besten bei der Live-Demo anschauen. |
| **invitation_types** |         |      |      | Hier kann ein bestimmter InvitationType hinterlegt werden, ist die Gefüllt dann bekommen Gäste die Sektion nur zu sehen die den InvitationType hinterlegt haben |

###### TimelineEntry

Aufbau von einem Zeitstrahl, mehrere Einträge hintereinander werden zu einem Zeitstrahl verknüpft.

<img src="images/docs/timeline.png" />

| Einstellung  | Default            | Man. | Lng. | Hinweis                                                                                                                                                                                                                                        |
| ------------ | ------------------ | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title**    | Kirchliche Trauung |      |      |                                                                                                                                                                                                                                                |
| **subtitle** | 13:00 Uhr          |      |      |                                                                                                                                                                                                                                                |
| **icon**     | fas fa-church      |      |      | FontAwesome v5 Icon - [https://fontawesome.com/v5/search?o=r&m=free](https://fontawesome.com/v5/search?o=r&m=free) - hier kann ein beliebiges Icons ausgewählt werden, entsprechend dein Eintrag aus `<i class="fas fa-church"></i>` eintragen |
| **text**     |                    |      |      | Freie Texteingabe in Markdown                                                                                                                                                                                                                  |

###### FreeText

Freie Texteingabe in Markdown. So können begrenztes Styling vorgenommen werden, z.B. URL , Schrift dick o. kursiv u.v.m

<img src="images/docs/free_text.png" />

| Einstellung | Default | Man. | Lng. | Hinweis                       |
| ----------- | ------- | ---- | ---- | ----------------------------- |
| **text**    |         | ✔️   |      | Freie Texteingabe in Markdown |

###### Hotel

Optische Card zum anzeigen von den Hotels für Übernachtungen. Kann aber auch genutzt werden um andere Information in diesem Style anzuzeigen.

<img src="images/docs/hotel_card.png" />

| Einstellung  | Default                                                                        | Man. | Lng. | Hinweis                                                                               |
| ------------ | ------------------------------------------------------------------------------ | ---- | ---- | ------------------------------------------------------------------------------------- |
| **title**    | Hotel 1912                                                                     | ✔️   |      |                                                                                       |
| **image**    |                                                                                |      |      | Bild, Optimalfall die Dimensionen 4:3. Die Größe ist Egal, min: 300x300 px            |
| **text**     | 12 vorreservierte Zimmer...                                                    |      |      | Freie Texteingabe in Markdown                                                         |
| **address1** | Bahnhofspl. 3                                                                  |      |      | Anzeigen von Adresszeile 1                                                            |
| **address2** | 16278 Angermünde                                                               |      |      | Anzeigen von Adresszeile 2                                                            |
| **mapsURL**  | [https://goo.gl/maps/Tkrryr2aYitifAR97](https://goo.gl/maps/Tkrryr2aYitifAR97) |      |      | Link für Kartendienst zum dem Ort - zeigt dann ein Icon zum klicken an (wenn gefüllt) |
| **phone**    | 033312980270                                                                   |      |      | Zeigt Telefon Icon wenn gefüllt - mit nativen Link direkt zum telefonieren            |
| **email**    | info@hotel1912.de                                                              |      |      | Zeigt Email Icon wenn gefüllt - mit nativen Link direkt zum schreiben der E-Mail      |
| **url**      | [https://hotel1912.de/](https://hotel1912.de/)                                 |      |      | Zeigt World Icon wenn gefüllt                                                         |

###### ImageSlider

Hintereinanderliegende Einträge vom Typ Imageslider werden in einem Widget zusammengefasst.

<img src="images/docs/image_slider.png" />

| Einstellung | Default               | Man. | Lng. | Hinweis                                                                    |
| ----------- | --------------------- | ---- | ---- | -------------------------------------------------------------------------- |
| **title**   | Bettdecken und Kissen | ✔️   |      |                                                                            |
| **image**   |                       |      |      | Bild, Optimalfall die Dimensionen 4:4. Die Größe ist egal, min: 250x250 px |

###### ContactCouple

Fast ähnliches Widget wie Contact, nur etwas größer und es können Kontaktdaten von 2 Personen gepflegt werden.

<img src="images/docs/contact_couple.png"  />

| Einstellung     | Default                    | Man. | Lng. | Hinweis                                                                    |
| --------------- | -------------------------- | ---- | ---- | -------------------------------------------------------------------------- |
| **name**        | Sandra & Martin            | ✔️   |      |                                                                            |
| **description** | Brautpaar                  |      |      |                                                                            |
| **phone1**      | +49 174 1234567            |      |      |                                                                            |
| **email1**      | martinweber.9393@gmail.com |      |      |                                                                            |
| **phone2**      |                            |      |      |                                                                            |
| **email2**      |                            |      |      |                                                                            |
| **image**       |                            |      |      | Bild, Optimalfall die Dimensionen 4:4. Die Größe ist egal, min: 200x200 px |

###### Contact

<img src="images/docs/contact.png" />

| Einstellung     | Default         | Man. | Lng. | Hinweis                                                                    |
| --------------- | --------------- | ---- | ---- | -------------------------------------------------------------------------- |
| **name**        | Natascha        | ✔️   |      |                                                                            |
| **description** | Braut-Mutter    |      |      |                                                                            |
| **phone**       | +49 174 1234567 |      |      |                                                                            |
| **email**       |                 |      |      |                                                                            |
| **image**       |                 |      |      | Bild, Optimalfall die Dimensionen 4:4. Die Größe ist egal, min: 150x150 px |

###### Confirm

<img src="images/docs/confirm.png" />

| Einstellung | Default | Man. | Lng. | Hinweis |
| ----------- | ------- | ---- | ---- | ------- |

Hier gibt es erstmal nichts weiter einzustellen. Dies wird automtisch gezogen von den Tabellen Invitations, Guest.

###### WhenAndWhere

Optische Card zum anzeigen Wann & Wo die Hochzeit stattfindet. Kann aber auch genutzt werden um andere Information in diesem Style anzuzeigen.

<img src="images/docs/when_and_where.png" />

| Einstellung       | Default                               | Man. | Lng. | Hinweis                                                                               |
| ----------------- | ------------------------------------- | ---- | ---- | ------------------------------------------------------------------------------------- |
| **title**         | Kirchliche Trauung                    | ✔️   |      |                                                                                       |
| **time**          | 13:00                                 | ✔️   |      |                                                                                       |
| **whereTitle**    | St.-Nikolai-Kirche Briest             |      |      |                                                                                       |
| **whereAddress1** | Hauptstraße 36                        |      |      |                                                                                       |
| **whereAddress2** | 16306 Passow OT Briest                |      |      | Bild, Optimalfall die Dimensionen 4:4. Die Größe ist egal, min: 150x150 px            |
| **googleMapsURL** | https://goo.gl/maps/WV59aydrVJHQxFua9 |      |      | Link für Kartendienst zum dem Ort - zeigt dann ein Icon zum klicken an (wenn gefüllt) |

###### NeedHotelInput

Componente um zu Erfassen ob Gäste ein Hotel brauchen.
Dies kann dann auf der Dashboard Seite ausgewertet werden.

Wenn eingestellt ist, dass ab einem Tag X keine Änderung mehr vorgenommen werden darf, dann kann diese Checkbox auch nicht mehr bearbeitet werden.

<img src="images/docs/need_hotel.png" />

| Einstellung | Default                                   | Man. | Lng. | Hinweis                       |
| ----------- | ----------------------------------------- | ---- | ---- | ----------------------------- |
| **label**   | Ich/Wir benötige(n) einen Shuttle-service | ✔️   |      | Anzeige Text bei der Checkbox |

###### NeedShuttleInput

Componente um zu Erfassen ob Gäste ein Schuttle Service brauchen.
Dies kann dann auf der Dashboard Seite ausgewertet werden.

Wenn eingestellt ist, dass ab einem Tag X keine Änderung mehr vorgenommen werden darf, dann kann diese Checkbox auch nicht mehr bearbeitet werden.

<img src="images/docs/need_shuttle.png" />

| Einstellung | Default                                   | Man. | Lng. | Hinweis                       |
| ----------- | ----------------------------------------- | ---- | ---- | ----------------------------- |
| **label**   | Ich/Wir benötige(n) einen Shuttle-service | ✔️   |      | Anzeige Text bei der Checkbox |

###### SectionDivider

Trenner von Inhalten

<img src="images/docs/section_divider.png" />

| Einstellung | Default                                              | Man. | Lng. | Hinweis                              |
| ----------- | ---------------------------------------------------- | ---- | ---- | ------------------------------------ |
| **text**    | Zusammen gekommen sind Sandra & Martin am 28.04.2013 |      |      | Beliebiger Text, kann auch leer sein |

###### GoogleMapDivider

Map als Trenner mit Markern.

Mehrere Marker hintereinander werden auf einer Karte angezeigt.

<img src="images/docs/map_divider.png" />

| Einstellung      | Default                                 | Man. | Lng. | Hinweis                                                                                                                                               |
| ---------------- | --------------------------------------- | ---- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title**        | St.-Nikolai-Kirche Briest               |      |      | Title in Popup, bei Auswahl vom PIN                                                                                                                   |
| **addressLine1** | Hauptstraße 36                          |      |      | 1. Adresszeile in Popup, bei Auswahl vom PIN                                                                                                          |
| **addressLine2** | 16306 Passow OT Briest                  |      |      | 2. Adresszeile in Popup, bei Auswahl vom PIN                                                                                                          |
| **pin**          |                                         |      |      | Bild zur Verwendung als Pin                                                                                                                           |
| **latitude**     | 53.152697                               | ✔️   |      | Breitengrad in Dezimalgrad (DG)                                                                                                                       |
| **lengthening**  | 14.058462                               | ✔️   |      | Längengrad in Dezimalgrad (DG)                                                                                                                        |
| **API_KEY**      | AIzaSyBDdw9CIV50W_rdZRSUNTgPVVi1bIJtlSQ | ✔️   |      | Google API Key - default kann nur für die Domain weddin.site und eventin.site verwendet werden. Bei Self-hosting muss ein eigener Key erstellt werden |

###### Spacer

Einfacher Platzhalter zwischen Inhalten

| Einstellung | Default | Man. | Lng. | Hinweis                       |
| ----------- | ------- | ---- | ---- | ----------------------------- |
| **height**  | 1       | ✔️   |      | Höhe/Abstand in ganzen Zahlen |
