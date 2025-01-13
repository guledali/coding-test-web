interface ColorSettings {
  brandColor: string;
}

interface Event {
  reportUrl: string;
  pdfUrl: string | null;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number | null;
  fiscalPeriod: string;
  fiscalYear: string;
  audioUrl?: string | null;
}

export interface Company {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: string | null;
  description: string;
  reportingCurrency: string;
  colorSettings: ColorSettings;
  events: Event[];
  isins: string[];
}

export interface CompaniesResponse {
  data: Company[];
}
