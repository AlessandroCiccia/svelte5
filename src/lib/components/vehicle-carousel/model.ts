export interface VehicleCarouselProps {
  /** 
   * Gruppo di veicoli nuovi, che contiene informazioni sul numero di veicoli 
   * e una lista dei veicoli stessi.
   */
  newVehicles: VehicleGroup;

  /** 
   * Gruppo di veicoli usati, che contiene informazioni sul numero di veicoli 
   * e una lista dei veicoli stessi.
   */
  usedVehicles: VehicleGroup;
}

export interface VehicleGroup {
  /** 
   * Numero totale di veicoli nel gruppo. 
   */
  nbVehicles: number;

  /** 
   * Lista di veicoli inclusi nel gruppo.
   */
  vehicles: Vehicle[];
}

export interface Vehicle {
  /** Identificatore univoco dell'oggetto, generalmente utilizzato per indicizzazione e ricerca */
  objectID: string;

  /** Identificatore numerico interno del veicolo */
  id: number;

  /** Marca del veicolo con etichetta e slug associati */
  brand: LabelSlug;

  /** Modello specifico del veicolo */
  model: Model;

  /** Finitura o allestimento del veicolo con etichetta e slug */
  finish: LabelSlug;

  /** Indica se il veicolo ha immagini disponibili */
  hasPhotos: boolean;

  /** Segnala se il veicolo è attualmente in promozione */
  hasPromo: boolean;

  /** Codice numerico che rappresenta la tipologia del veicolo */
  typeInteger: number;

  /** Fascia di prezzo in cui ricade il veicolo */
  priceBracket: number;

  /** Indica se è disponibile una visualizzazione a 360 gradi del veicolo */
  has360: boolean;

  /** Stato di disponibilità del veicolo */
  available: boolean;

  /** Emissioni di anidride carbonica (CO2) */
  co2: number;

  /** Colore esterno del veicolo */
  color: Color;

  /** Paese di provenienza o registrazione del veicolo */
  country: string;

  /** Nomi dei gruppi di concessionari che hanno in vendita il veicolo */
  dealerGroupNames: string[];

  /** Nomi dei gruppi di concessionari con etichetta e slug */
  dealerGroupNamesv2: LabelSlug;

  /** Nome specifico del concessionario */
  dealerName: string;

  /** Disponibilità per vendite Business-to-Lease */
  disponibilityB2L: boolean;

  /** Numero di porte del veicolo */
  doorNb: number;

  /** Flag che indica esclusione dalla vendita web */
  excluWeb: boolean;

  /** Dettagli del finanziamento con rata regolare (importo totale incluso IVA) */
  financement_regularPaymentTTC: FinancementDetails<number>;

  /** Intervallo di rate per il finanziamento */
  financement_regularPaymentTTC_range: FinancementDetails<number>;

  /** Descrizione della finitura o allestimento */
  finition: string;

  /** Tipo di carburante del veicolo */
  fuel: FuelOrGear;

  /** Tipo di trasmissione */
  gear: FuelOrGear;

  /** Livello di zona verde (efficienza ambientale) */
  greenZoneLevel: string;

  /** Chilometraggio del veicolo */
  mileage: number;

  /** Intervallo di potenza fisica del veicolo */
  physicalPowerRange: string;

  /** Prezzo attuale del veicolo */
  price: number;

  /** Promozioni attive in Francia */
  promos_fr: string[];

  /** Dettagli delle promozioni in Francia */
  promosv2_fr: Promo[];

  /** Numero di posti */
  seatNb: string;

  /** Anno di vendita */
  sellYear: number;

  /** Silhouette o tipo di carrozzeria con etichetta e slug */
  silhouette: LabelSlug;

  /** Tipologia del veicolo */
  type: string;

  /** Prezzo di listino */
  priceCatalog: number | null;

  /** Prezzo iniziale */
  initialPrice: number;

  /** Prezzo iniziale formattato come valuta */
  initialPriceFormatCurrency: string;

  /** Differenza di prezzo */
  priceDifference: number;

  /** Differenza di prezzo formattata come valuta */
  priceDifferenceFormatCurrency: string;

  /** Percentuale di variazione del prezzo */
  priceDifferencePercentage: number;

  /** Identificatore del concessionario */
  dealerId: number;

  /** Data della prima registrazione (anno e mese) */
  firstRegistrationYearMonth: string;

  /** URL-friendly identificatore del veicolo */
  slug: string;

  /** Consumo medio */
  averageConsumption: number;

  /** Numero di identificazione del veicolo (Vehicle Identification Number) */
  vin: string;

  /** Indica se il veicolo è considerato vecchio */
  isOld: boolean;

  /** Stato di prenotazione del veicolo */
  isBooked: boolean;

  /** Latitudine della concessionaria */
  dealerLat: number;

  /** Longitudine della concessionaria */
  dealerLng: number;

  /** Prezzo con finanziamento */
  priceWithFinancing: number | null;

  /** Prezzo con finanziamento formattato come valuta */
  priceWithFinancingFormatCurrency: string | null;

  /** Utilizzo precedente del veicolo */
  previousUse: string;

  /** Consumo misto WLTP */
  mixedWltp: number | null;

  /** Consumo a bassa velocità */
  lowSpeed: number | null;

  /** Consumo a velocità media */
  mediumSpeed: number | null;

  /** Consumo ad alta velocità */
  highSpeed: number | null;

  /** Consumo ad altissima velocità */
  extraHighSpeed: number | null;

  /** Consumo di energia */
  powerConsumption: number | null;

  /** Autonomia del veicolo */
  autonomy: number | null;

  /** Ordine casuale (per scopi di randomizzazione) */
  randomOrder: number;

  /** Autonomia in ambiente urbano */
  autonomyCity: number | null;

  /** Emissioni CO2 WLTP per veicoli a motore termico */
  co2WltpMt: number | null;

  /** Forma del veicolo con etichetta e slug */
  shape: LabelSlug;

  /** Tipo di veicolo con etichetta e slug */
  kind: LabelSlug;

  /** Tipo di contratto */
  contract: string;

  /** Marcatura temporale */
  stamp: string;

  /** Durata del contratto */
  contractDuration: number;

  /** URL della prima foto */
  firstPhoto: string;

  /** Array di URL delle foto del veicolo */
  photos: string[];

  /** Tipo di importazione */
  typeImport: string;

  /** Data dell'ultimo aggiornamento */
  updated: string;

  /** Data di creazione del record */
  created: string;

  /** Indica se è disponibile un'opzione di finanziamento */
  hasFinancement: boolean;

  /** Testo principale per il finanziamento */
  financement_primaryText: FinancementDetails<string>;

  /** Testo del call-to-action per i dettagli di finanziamento */
  financement_ctaDetailText: FinancementDetails<string | null>;

  /** Flag per la visualizzazione dei dettagli di finanziamento */
  financement_displayDetail: FinancementDetails<boolean>;

  /** Nota legale per il finanziamento */
  financement_legalNotice: FinancementDetails<string>;
}

export interface LabelSlug {
  /** 
   * Etichetta del label (ad esempio "SUV", "Benzina").
   */
  label: string;

  /** 
   * Slug associato al label, utilizzato per generare URL o identificatori univoci.
   */
  slug: string;
}

export interface Model extends LabelSlug {
  /** 
   * Etichetta del gruppo a cui appartiene il modello (es. "sedan", "coupé").
   */
  groupLabel: string;

  /** 
   * Slug del gruppo a cui appartiene il modello.
   */
  groupSlug: string;

  /** 
   * Etichetta del modello unita ad altre informazioni (es. "Corolla 2020").
   */
  mergedLabel: string;

  /** 
   * Slug unito del modello.
   */
  mergedSlug: string;

  /** 
   * Codice identificativo del modello, se disponibile.
   */
  code: string | null;
}

export interface Color extends Model {
  /** 
   * Codice colore specifico.
   */
  code: string;
}

export interface FuelOrGear extends Model {
  /** 
   * Codice relativo al carburante o al tipo di cambio, se disponibile.
   */
  code: string | null;
}

export interface Promo {
  /** 
   * Etichetta promozionale (ad esempio "Sconto del 10%").
   */
  label: string;

  /** 
   * Slug identificativo della promozione.
   */
  slug: string;
}

export interface FinancementDetails<T> {
  /** 
   * Dettaglio del finanziamento per il veicolo (ad esempio il testo relativo al piano di pagamento).
   */
  fr: T;
}
