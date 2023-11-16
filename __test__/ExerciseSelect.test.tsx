import { render, screen } from "@testing-library/react";
import ExerciseFields from "@/app/_components/ui/(form)/(controls)/ExerciseFields";

it("should have text", () => {
  render(<ExerciseFields />); //ARRANGE

  const myEl = screen.getByText(/select/i); // ACT

  expect(myEl).toBeInTheDocument();
});
