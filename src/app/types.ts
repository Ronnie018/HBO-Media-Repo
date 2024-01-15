export type Device = {
  name: string;
  brand: string;
  kind: string;
  model: string;
  os: string;
  slug: string;
  id: number;
};

export type NavLink = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  to: string;
  width: string;
  height: string;
};