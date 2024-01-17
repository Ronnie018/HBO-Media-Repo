import { v4 as uuid } from "uuid";

const rectClassNames = ["out", "absolute", "navlink-rect"];

export const createNewRect = () => {
  const rect = document.createElement("div");
  rectClassNames.forEach((className) => rect.classList.add(className));
  rect.id = uuid();
  return rect;
};

export const isInvalidRect = (rect: HTMLElement) =>
  !rect ||
  !rect.style.width.replace("px", "") ||
  !rect.style.height.replace("px", "");

export function convertToPercentage(n: number, containerMS: number) {
  return (n / containerMS) * 100;
}
