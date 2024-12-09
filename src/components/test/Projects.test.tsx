import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "../Projects/Projects";
import "@testing-library/jest-dom";

test("deve renderizar todos os cards de projetos na tela", () => {
  render(<Projects />);
  screen.debug(); // Mostra o estado do DOM após a renderização
});

test("deve renderizar apenas os projetos válidos com dados", () => {
  render(<Projects />);

  const invalidProjects = screen.queryAllByText(/em breve.../i);
  expect(invalidProjects).toHaveLength(3); // Três projetos com essa descrição
});

test("deve renderizar apenas os projetos válidos com dados", () => {
  render(<Projects />);

  const invalidProjects = screen.queryAllByText(/em breve.../i);
  expect(invalidProjects).toHaveLength(3); // Três projetos com essa descrição
});

it("deve exibir o link do GitHub no modal", () => {
  render(<Projects />);

  const projectCard = screen.getByText("Spiderman").closest(".project-card");
  fireEvent.click(projectCard!);

  expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
});

it("deve exibir o link do projeto no modal", () => {
  render(<Projects />);

  const projectCard = screen.getByText("Spiderman").closest(".project-card");
  fireEvent.click(projectCard!);

  expect(screen.getByRole("link", { name: /link/i })).toBeInTheDocument();
});
