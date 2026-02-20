import { Status } from "../utils/constants";

export type Budget = {
  id: string;
  client: string;
  title: string;
  items?: Service[];
  discountPct?: string;
  status: Status;
  createdAt: Date;
  updatedAt?: Date;
}

export type Service = {
  id: string;
  title: string;
  description: string;
  qty: string;
  price: string;
}