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
