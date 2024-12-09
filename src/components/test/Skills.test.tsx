import { render, screen } from "@testing-library/react";
import Skills from "../Skills/Skills";

// Carregar o mock antes de rodar os testes

test("should render all skills percentages", async () => {
  render(<Skills />);

  expect(screen.getByText("98%")).toBeInTheDocument();
  expect(screen.getByText("96%")).toBeInTheDocument();
  expect(screen.getByText("89%")).toBeInTheDocument();
  expect(screen.getByText("100%")).toBeInTheDocument();
});

test("should handle skills rendering logic manually", async () => {
  render(<Skills />);

  // Manipule diretamente o estado ou dispare a lógica manualmente
  const skillsRef = screen.getByTestId("skills-container");
  expect(skillsRef).toBeVisible(); // Verifique se a área está visível

  expect(screen.getByText("98%")).toBeInTheDocument();
});
