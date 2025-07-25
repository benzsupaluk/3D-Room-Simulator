import { PlacedFurniture } from "@/types/interactive";
import { Coordinate } from "@/types/common";
import { getBoundingBox } from "./model";

export const isFurnitureValidPosition = (
  newPosition: Coordinate,
  furniture: PlacedFurniture,
  furnitureList: PlacedFurniture[]
): boolean => {
  // get bounding box of current box with new position
  const currentBox = getBoundingBox(
    newPosition,
    furniture.dimensions,
    furniture.scale,
    furniture.rotation?.[1] ?? 0
  );

  // check if any other box is overlapping with current box
  for (const otherFurniture of furnitureList) {
    const otherBox = getBoundingBox(
      otherFurniture.position,
      otherFurniture.dimensions,
      otherFurniture.scale,
      otherFurniture.rotation?.[1] ?? 0
    );
    if (
      currentBox.minX < otherBox.maxX &&
      currentBox.maxX > otherBox.minX &&
      currentBox.minY < otherBox.maxY &&
      currentBox.maxY > otherBox.minY &&
      currentBox.minZ < otherBox.maxZ &&
      currentBox.maxZ > otherBox.minZ
    ) {
      return false;
    }
  }

  // check room boundaries
  const roomBoundary = {
    minX: -5,
    maxX: 5,
    minZ: -4.8,
    maxZ: 4.8,
  };
  if (
    currentBox.minX < roomBoundary.minX ||
    currentBox.maxX > roomBoundary.maxX ||
    currentBox.minZ < roomBoundary.minZ ||
    currentBox.maxZ > roomBoundary.maxZ
  ) {
    return false;
  }

  return true;
};
