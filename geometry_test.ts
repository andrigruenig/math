import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("cardinal points of circle at (5,5) with radius 5", () => {
  const circle = new Circle(new Point2D(5, 5), 5);

  assertEquals(circle.north(), new Point2D(5, 10));
  assertEquals(circle.east(), new Point2D(10, 5));
  assertEquals(circle.south(), new Point2D(5, 0));
  assertEquals(circle.west(), new Point2D(0, 5));
});

Deno.test("point M is between W and E on x-axis", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const m = new Point2D(5, 5);

  assertEquals(m.isBetweenX(circle.west(), circle.east()), true);
});

Deno.test("point M is between N and S on y-axis", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const m = new Point2D(5, 5);

  assertEquals(m.isBetweenY(circle.north(), circle.south()), true);
});

Deno.test("point W is not between W and E on x-axis", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const w = circle.west();

  assertEquals(w.isBetweenX(circle.west(), circle.east()), false);
});

Deno.test("point N is not between N and S on y-axis", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const n = circle.north();

  assertEquals(n.isBetweenY(circle.north(), circle.south()), false);
});

Deno.test("rectangle encompasses circle when M, N, E, S, W are inside", () => {
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(10, 10));
  const circle = new Circle(new Point2D(5, 5), 4);

  assertEquals(rectangle.encompasses(circle), true);
});

Deno.test("rectangle does not encompass circle when radius reaches outside", () => {
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(10, 10));
  const circle = new Circle(new Point2D(8, 5), 3);

  assertEquals(rectangle.encompasses(circle), false);
});

Deno.test("rectangle does not encompass circle when center is outside", () => {
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(10, 10));
  const circle = new Circle(new Point2D(11, 5), 1);

  assertEquals(rectangle.encompasses(circle), false);
});

Deno.test("circle encompasses rectangle when A, B, C, D are inside", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const rectangle = new Rectangle(new Point2D(3, 3), new Point2D(7, 7));

  assertEquals(circle.encompasses(rectangle), true);
});

Deno.test("circle does not encompass rectangle when one corner is outside", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const rectangle = new Rectangle(new Point2D(1, 1), new Point2D(9, 9));

  assertEquals(circle.encompasses(rectangle), false);
});

Deno.test("circle does not encompass rectangle when corner lies on boundary", () => {
  const circle = new Circle(new Point2D(5, 5), 5);
  const rectangle = new Rectangle(new Point2D(5, 5), new Point2D(10, 5));

  assertEquals(circle.encompasses(rectangle), false);
});
