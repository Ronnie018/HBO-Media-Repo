export type Device = {
  name: string;
  brand: string;
  model: string;
  os: string;
  id: string;
};

export type NavLink = {
  y: number;
  x: number;
  to: string;
  name: string | null;
  id: string;
  width: number;
  height: number;
};

export type Rect = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string | null;
  to: string | null;
};