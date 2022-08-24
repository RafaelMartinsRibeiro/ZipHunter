export type Cep = {
  status: number;
  ok: boolean;
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  statusText: string;
  message?: string;
};
