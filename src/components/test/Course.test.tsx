import { render, screen } from "@testing-library/react";
import Course from "../Course/Course";
import "@testing-library/jest-dom";
import "intersection-observer";

test("deve exibir o título principal 'Cursos'", () => {
  render(<Course />);
  const title = screen.getByRole("heading", { name: /cursos/i });
  expect(title).toBeInTheDocument();
});

test("deve renderizar 9 cards no total", () => {
  const { container } = render(<Course />); // Destructurando container aqui
  const cards = container.querySelectorAll(".card-title");
  expect(cards).toHaveLength(9);
});

test("deve renderizar os textos dos cursos", () => {
  render(<Course />);

  const courseTexts = [
    "Formação Carreira QA",
    "Git e GitHub",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "Angular",
    "React",
    "Mysql | Power Bi",
  ];

  courseTexts.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

test("deve renderizar o componente Course sem falhas", () => {
  render(<Course />);
  expect(screen.getByText(/formação/i)).toBeInTheDocument();
});
