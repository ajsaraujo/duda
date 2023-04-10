import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should show the pages listing", () => {
    render(
      <>
        <App></App>
      </>
    );

    const [firstPageInput, lastPageInput] = screen.getAllByRole("textbox");

    userEvent.type(firstPageInput, "1");
    userEvent.type(lastPageInput, "10");

    userEvent.click(screen.getByText(/listar páginas/i));

    expect(screen.getByText("Ímpares")).toBeInTheDocument();
    expect(screen.getByText("1, 3, 5, 7, 9")).toBeInTheDocument();

    expect(screen.getByText("Pares")).toBeInTheDocument();
    expect(screen.getByText("2, 4, 6, 8, 10")).toBeInTheDocument();
  });
});
