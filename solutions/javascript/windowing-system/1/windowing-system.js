export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {

  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {

    const minWidth = 1;
    const minHeight = 1;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(minWidth, Math.min(maxWidth, newSize.width));
    const newHeight = Math.max(minHeight, Math.min(maxHeight, newSize.height));

    this.size.width = newWidth;
    this.size.height = newHeight;
  }

  move(newPosition) {

    const minX = this.position.x;
    const minY = this.position.y;

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(minX, Math.min(maxX, newPosition.x));
    const newY = Math.max(minY, Math.min(maxY, newPosition.y));

    this.position.x = newX;
    this.position.y = newY;
  }
}

export function changeWindow(NewProgramWindow) {

  NewProgramWindow.size.width = 400;
  NewProgramWindow.size.height = 300;
  NewProgramWindow.position.x = 100;
  NewProgramWindow.position.y = 150;
  return NewProgramWindow;
}