export interface AssetRendition {
    /**
     * Tipo di asset (immagine, video o 360°).
     */
    type: "image" | "video" | "360";

    /**
     * Percorso o URL dell'asset. Può essere una stringa o un oggetto responsive.
     */
    src: string | ResponsiveSrc;

    /**
     * Testo alternativo per l'accessibilità (opzionale).
     */
    alt?: string;

    /**
     * Titolo dell'asset, visibile al passaggio del mouse (opzionale).
     */
    title?: string;

    /**
     * Larghezza dell'asset (opzionale).
     */
    width?: number;

    /**
     * Altezza dell'asset (opzionale).
     */
    height?: number;

    /**
     * Comportamento del caricamento ("eager" o "lazy").
     */
    loading?: "eager" | "lazy";
}

export interface AssetVideoRendition extends AssetRendition {
    /**
     * Immagine di anteprima per il video (opzionale).
     */
    poster?: string;

    /**
     * Avvio automatico del video (opzionale).
     */
    autoplay?: boolean;

    /**
     * Mostrare i controlli del video (opzionale).
     */
    controls?: boolean;

    /**
     * Ripetizione automatica del video (opzionale).
     */
    loop?: boolean;

    /**
     * Se il video è silenziato (opzionale).
     */
    muted?: boolean;

    /**
     * Riproduzione inline, utile per dispositivi mobili (opzionale).
     */
    playsInline?: boolean;

    /**
     * Comportamento del preload ("auto", "metadata" o "none").
     */
    preload?: "auto" | "metadata" | "none";
}

export interface AssetImageRendition extends AssetRendition {
    /**
     * Percorsi delle immagini per il caricamento responsive (opzionale).
     */
    srcSet?: string;

    /**
     * Attributo sizes per immagini responsive (opzionale).
     */
    sizes?: string;

    /**
     * Politica CORS per il caricamento delle immagini ("anonymous" o "use-credentials", opzionale).
     */
    crossOrigin?: "anonymous" | "use-credentials";

    /**
     * Politica del referrer per il caricamento delle immagini (opzionale).
     */
    referrerPolicy?: string;
}

export type ResponsiveSrc = {
    /**
     * Rendition specifica per dispositivi desktop (opzionale).
     */
    desktop?: AssetRendition;

    /**
     * Rendition specifica per dispositivi mobili (opzionale).
     */
    mobile?: AssetRendition;

    /**
     * Rendition specifica per tablet (opzionale).
     */
    tablet?: AssetRendition;
};

export interface Link {
    /**
     * Etichetta del link (opzionale, può essere null).
     */
    label?: string | null;

    /**
     * Indica se il link si apre in una nuova scheda.
     */
    blank: boolean;

    /**
     * Tag Adobe associato al link (opzionale).
     */
    tagAdobe: string | null;

    /**
     * Asset associato al link, come immagine o video (opzionale).
     */
    asset?: AssetImageRendition | AssetVideoRendition;

    /**
     * Azione associata al link (opzionale).
     */
    action?: ViewAction;

    /**
     * Indica se il link è separato da un divisore (opzionale).
     */
    divider?: boolean;
}

export interface MenuLink extends Link {
    /**
     * Sottoelementi del menu (array di link).
     */
    subItems: MenuLink[];
}

export type ViewAction =
    | {
          /**
           * Tipo di azione: navigazione interna.
           */
          type: "view";

          /**
           * Percorso per la navigazione interna (es. "/home", "/search").
           */
          path: string;
      }
    | {
          /**
           * Tipo di azione: URL esterno.
           */
          type: "externalUrl";

          /**
           * URL esterno.
           */
          url: string;
      };