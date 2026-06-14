import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-am-ring";

const campingAmRing: CampsiteConfig = {
  name: "Camping TÜRKIS Mayer-Baumessner",
  shortName: "TÜRKIS",
  slug: "camping-am-ring",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping am Red Bull Ring",
  regionLong: "Spielberg · Murtal · Steiermark",

  // KEIN theme-Feld (Original-Template-Palette). Hero immer mittig.
  heroVariant: "center",

  claim: "Mittendrin statt nur dabei — Camping am Red Bull Ring",
  claimEmphasis: "am Red Bull Ring",
  emailDetail: "eure Lage nur ein paar Gehminuten vom Red Bull Ring",
  intro:
    "Ob Formel 1, MotoGP oder Airpower — bei uns campst du nur zehn bis fünfzehn Gehminuten von der Strecke, mit vollem Komfort, persönlichem Service und echter Atmosphäre statt Massenabfertigung.",

  logo: { src: `${IMG}/logo-8d2128d1f1.png`, alt: "Camping TÜRKIS Mayer-Baumessner Logo" },

  statement: {
    text: "Bei uns stehst du keine fünfzehn Gehminuten von der Strecke — und blickst vom Stellplatz weit über das grüne Murtal.",
    emphasis: "keine fünfzehn Gehminuten",
  },

  pillars: [
    {
      title: "Direkt an der Strecke",
      text: "Zur Strecke sind es nur 10–15 Gehminuten, dazu kurze Wege zu den Haupteingängen — du bist mittendrin statt nur dabei.",
      image: { src: `${IMG}/gallery-fbb4fd8243.webp`, alt: "Stellplätze des Camping TÜRKIS mit Blick auf die Tribüne am Red Bull Ring" },
    },
    {
      title: "Persönlich geführt",
      text: "Familie Mayer-Baumessner führt den Platz selbst — persönlicher Service rund um die Uhr statt anonymer Abfertigung.",
      image: { src: `${IMG}/gallery-060046534b.webp`, alt: "Familie Mayer-Baumessner vom Camping TÜRKIS" },
    },
    {
      title: "Echte Atmosphäre",
      text: "Gewachsener Hofcharakter mit Blumenschmuck und altem Gerät statt Massencamping — hier hat das Wochenende noch ein Gesicht.",
      image: { src: `${IMG}/gallery-6dfd5339a0.webp`, alt: "Camping TÜRKIS auf der grünen Anhöhe mit Bauernhof und Stellplätzen über dem Murtal" },
    },
  ],

  usps: [
    "Zur Strecke in 10–15 Min",
    "Kurze Wege am Platz",
    "Ebene Stellplätze",
    "Gespanne bis 9 Meter",
    "Frühstück & Gebäck",
    "Persönlicher Service",
  ],

  trust: {
    heading: "Warum dein Rennwochenende hier entspannter läuft",
    headingEmphasis: "entspannter",
    intro:
      "Kurze Wege am Platz, nur Minuten zur Strecke und ein Team, das jeden Gast kennt: Hier bleibt mehr Zeit fürs Erlebnis — und weniger fürs Anstehen und Suchen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-2e0a1f7143.webp`, alt: "Camping TÜRKIS auf der grünen Anhöhe am Red Bull Ring mit Blick ins Murtal" },
  },

  camping: {
    heading: "Mehr als nur ein Stellplatz",
    intro:
      "Voller Komfort, gute Infrastruktur und Genuss gehören bei uns dazu — vom ersten Kaffee am Morgen bis zum letzten Drink an der Bar.",
    features: [
      {
        title: "Voller Komfort am Platz",
        text: "Tolle Infrastruktur, ebene Stellplätze und kurze Wege von nur 1–3 Minuten — alles, was du fürs Wochenende brauchst, ist direkt vor Ort.",
        image: { src: `${IMG}/gallery-718ca76826.webp`, alt: "Rustikale Hausfront des Baumessner-Hofs mit Blumenschmuck und altem Gerät" },
      },
      {
        title: "Gastronomie & Verpflegung",
        text: "Frühstück mit frischem Gebäck, warme Speisen und regionale Spezialitäten — und abends lässt du den Tag gemütlich an der Bar ausklingen.",
        image: { src: `${IMG}/gallery-08203e36c2.webp`, alt: "Verpflegung am Camping TÜRKIS — Gäste am Imbiss- und Barstand" },
      },
      {
        title: "Weitblick übers Murtal",
        text: "Die grüne Anhöhe öffnet den Blick weit über das Murtal bis zu den Bergen — am schönsten, wenn der Abend über dem Platz liegt.",
        image: { src: `${IMG}/gallery-49ce027e42.webp`, alt: "Abendstimmung über dem Camping TÜRKIS mit Blick ins Murtal" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Ring",
    modes: [
      { title: "Mit dem Auto", text: "Über die Murtal-Schnellstraße S36 bis Spielberg, dann der Beschilderung zum Red Bull Ring folgen — der Platz liegt direkt dort." },
      { title: "Mit der Bahn", text: "Die Bahnhöfe Knittelfeld und Zeltweg liegen wenige Fahrminuten entfernt — die letzte Etappe per Taxi oder Transfer." },
      { title: "Zu Fuß zur Strecke", text: "Vom Stellplatz sind es nur 10–15 Gehminuten zu den Haupteingängen — einmal parken, den Rest gehst du bequem." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Ein paar Eindrücke vom Camping TÜRKIS am Red Bull Ring.",
    tag: "Camping am Red Bull Ring",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ring",
    headingEmphasis: "am Ring",
    intro:
      "Sag uns Zeitraum und Personen — Familie Mayer meldet sich persönlich mit der Verfügbarkeit für dein Wochenende.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Event-Preise laufen über den Ticketshop; Ortstaxe zzgl.",
    highlight: { title: "Zur Strecke zu Fuß", text: "Vom Platz sind es nur 10–15 Gehminuten zum Red Bull Ring." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Zelt / Wohnwagen)", perNight: 39, perExtraGuest: 9 },
      { id: "gespann", label: "Wohnmobil / Gespann bis 9 m", perNight: 45, perExtraGuest: 9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.228202, lng: 14.768789 },
    tel: "+43 (0) 664 4120799",
    telHref: "tel:+436644120799",
    mail: "mayer-baumessner@aon.at",
    adresse: "Höhenstraße 9 · 8724 Spielberg · Steiermark",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Komfort & Lage", href: "#camping" },
      { label: "Gastronomie", href: "#camping" },
    ]},
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingAmRing;
