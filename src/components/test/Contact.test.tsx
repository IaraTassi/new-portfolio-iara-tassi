import { render, screen } from "@testing-library/react";
import Contact from "../Contact/Contact";
import "@testing-library/jest-dom";

describe("Componente Contact", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('deve exibir o título "Contato"', () => {
    // Verifica se o título "Contato" é exibido
    const titleElement = screen.getByRole("heading", { name: /contato/i });
    expect(titleElement).toBeInTheDocument();
  });

  test("deve conter o link do LinkedIn com os atributos corretos", () => {
    // Verifica o link do LinkedIn
    const linkedinLink = screen.getByLabelText(/LinkedIn/);
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/iara-tassi-b1879182/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("deve conter o link do GitHub com os atributos corretos", () => {
    // Verifica o link do GitHub
    const githubLink = screen.getByLabelText(/GitHub/);
    expect(githubLink).toHaveAttribute("href", "https://github.com/IaraTassi");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("deve conter o link do e-mail com os atributos corretos", () => {
    // Verifica o link do e-mail
    const emailLink = screen.getByLabelText(/E-mail/);
    expect(emailLink).toHaveAttribute("href", "mailto:iaratassi@hotmail.com");
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
