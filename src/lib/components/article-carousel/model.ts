import type { AssetImageRendition, AssetVideoRendition, Link } from "$lib/models/common";

export type CarouselArticleCard = {
  /** Percorso o URL dell'immagine o video associato all'articolo. */
  asset: AssetImageRendition | AssetVideoRendition;

  /** Categoria a cui l'articolo appartiene (ad esempio "Tecnologia", "Veicoli", "Notizie"). */
  category: string;

  /** Titolo dell'articolo, che viene visualizzato nel carosello. */
  title: string;

  /** Descrizione dell'articolo, che fornisce un'anteprima o un riassunto del contenuto. */
  description: string;

  /** URL del pulsante Call to Action, che indirizza l'utente alla pagina dell'articolo o a ulteriori informazioni. */
  cta: Link;
};

export type ArticleCarouselProps = {
  /** Titolo del carosello che contiene gli articoli (es. "I nostri articoli", "Novità recenti"). */
  title: string;

  /** Array di oggetti **CarouselArticleCard**, che rappresentano ciascun articolo nel carosello. */
  articles: CarouselArticleCard[];

  /** Lista di link per le categorie degli articoli, permettendo la navigazione tra diverse categorie. */
  categories: Link[];

  /** Lista di link per i pulsanti Call to Action per il carosello, che possono essere usati per navigare verso diverse sezioni o azioni. */
  ctas: Link[];
};
