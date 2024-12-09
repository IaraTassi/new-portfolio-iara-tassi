import { render, screen } from "@testing-library/react";
import About from "../About/About";
import "@testing-library/jest-dom";

describe("Componente About", () => {
  it("Verifica se o título principal é renderizado", () => {
    render(<About />);
    // Verifica se o título principal é renderizado
    expect(screen.getByText("Estudante de Front-End")).toBeInTheDocument();
    // Verifica se a imagem está sendo carregada
    expect(screen.getByAltText("Imagem Iara Tassi")).toBeInTheDocument();
    // Verifica se o texto de boas-vindas está sendo exibido
    expect(screen.getByText("Olá!")).toBeInTheDocument();
  });
});

test("deve ter classes CSS corretas", () => {
  const { container } = render(<About />);

  // Verifique se a classe 'main-title-about' está presente no título
  const title = container.querySelector(".main-title-about");
  expect(title).toHaveClass("main-title-about");

  // Verifique se a imagem tem as classes corretas
  const img = container.querySelector("img");
  expect(img).toHaveClass("img-fluid", "rounded", "shadow");
});

test("não deve exibir texto inesperado", () => {
  const { queryByText } = render(<About />);

  // Verifique se um texto inesperado não aparece
  expect(queryByText(/Texto inesperado/i)).toBeNull();
});
