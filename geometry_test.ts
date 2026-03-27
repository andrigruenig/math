import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";

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
