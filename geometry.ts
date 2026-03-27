export interface Shape {
  circumference(): number;
  area(): number;
  encompasses(other: Shape): boolean;
}

export class Point2D {
  constructor(
    public x: number,
    public y: number,
  ) {}

  isBetweenX(p: Point2D, q: Point2D): boolean {
    const minX = Math.min(p.x, q.x);
    const maxX = Math.max(p.x, q.x);
    return minX < this.x && this.x < maxX;
  }

  isBetweenY(p: Point2D, q: Point2D): boolean {
    const minY = Math.min(p.y, q.y);
    const maxY = Math.max(p.y, q.y);
    return minY < this.y && this.y < maxY;
  }

  distanceTo(other: Point2D): number {
    return Math.sqrt(
      Math.abs(this.x - other.x) ** 2 + Math.abs(this.y - other.y) ** 2,
    );
  }
}

export class Circle implements Shape {
  constructor(
    private center: Point2D,
    private radius: number,
  ) {}

  north(): Point2D {
    return new Point2D(this.center.x, this.center.y + this.radius);
  }

  centerPoint(): Point2D {
    return new Point2D(this.center.x, this.center.y);
  }

  east(): Point2D {
    return new Point2D(this.center.x + this.radius, this.center.y);
  }

  south(): Point2D {
    return new Point2D(this.center.x, this.center.y - this.radius);
  }

  west(): Point2D {
    return new Point2D(this.center.x - this.radius, this.center.y);
  }

  circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  encompasses(other: Shape): boolean {
    if (other instanceof Rectangle) {
      for (const corner of other.corners()) {
        if (!(this.center.distanceTo(corner) < this.radius)) {
          return false;
        }
      }
      return true;
    }

    return false;
  }

  diameter(): number {
    return 2 * this.radius;
  }
}

export class Rectangle implements Shape {
  constructor(
    private bottomLeft: Point2D,
    private topRight: Point2D,
  ) {}

  circumference(): number {
    return 2 * (this.width() + 2 * this.height());
  }

  area(): number {
    return this.width() * this.height();
  }

  encompasses(other: Shape): boolean {
    if (other instanceof Circle) {
      const pointsToCheck = [
        other.centerPoint(),
        other.north(),
        other.east(),
        other.south(),
        other.west(),
      ];

      for (const point of pointsToCheck) {
        const insideX = point.isBetweenX(this.bottomLeft, this.topRight);
        const insideY = point.isBetweenY(this.bottomLeft, this.topRight);
        if (!insideX || !insideY) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  corners(): Point2D[] {
    const a = new Point2D(this.bottomLeft.x, this.bottomLeft.y);
    const b = new Point2D(this.topRight.x, this.bottomLeft.y);
    const c = new Point2D(this.topRight.x, this.topRight.y);
    const d = new Point2D(this.bottomLeft.x, this.topRight.y);
    return [a, b, c, d];
  }

  diagonal(): number {
    return this.bottomLeft.distanceTo(this.topRight);
  }

  private width(): number {
    return this.topRight.x - this.bottomLeft.x;
  }

  private height(): number {
    return this.topRight.y - this.bottomLeft.y;
  }
}
