export type Breadcrumb = {
  /** Etichetta del breadcrumb che viene mostrata all'utente. Rappresenta la parte visibile del percorso. */
  label: string;

  /** Il percorso completo (URL) associato al breadcrumb, che può essere utilizzato per la navigazione. */
  path: string;

  /** L'ID del genitore del breadcrumb, che rappresenta il livello superiore nel percorso di navigazione. */
  parentId: string;

  /** L'ID univoco del breadcrumb, che lo distingue dagli altri nel sistema. */
  id: string;
}

export type BreadcrumbsProps = {
  /** Array di oggetti `Breadcrumb` che rappresentano ogni livello del percorso di navigazione. */
  items: Breadcrumb[];
}
