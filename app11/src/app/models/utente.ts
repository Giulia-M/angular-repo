export interface Utente {
  firstName?: string;
  lastName?: string;
  user: string;
  pass: string;
  autenticato: boolean;
  amministratore?: boolean;
}
