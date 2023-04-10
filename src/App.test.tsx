import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("App", () => {
  it("should show the pages listing", async () => {
    render(
      <>
        <App></App>
      </>
    );

    const [firstPageInput, lastPageInput] = await screen.findAllByRole(
      "textbox"
    );

    act(() => {
      userEvent.type(firstPageInput, "1");
      userEvent.type(lastPageInput, "10");

      userEvent.click(screen.getByText(/listar páginas/i));
    });

    expect(await screen.findByText("Ímpares")).toBeInTheDocument();
    expect(await screen.findByText("1, 3, 5, 7, 9")).toBeInTheDocument();

    expect(await screen.findByText("Pares")).toBeInTheDocument();
    expect(await screen.findByText("2, 4, 6, 8, 10")).toBeInTheDocument();
  });

  it("should clear the pages listing", async () => {
    render(
      <>
        <App></App>
      </>
    );

    const [firstPageInput, lastPageInput] = await screen.findAllByRole(
      "textbox"
    );

    await act(async () => {
      userEvent.type(firstPageInput, "1");
      userEvent.type(lastPageInput, "10");

      userEvent.click(screen.getByText(/listar páginas/i));
    });

    await act(async () => {
      userEvent.click(await screen.findByText("Limpar"));
    });

    expect(screen.queryByText("Ímpares")).not.toBeInTheDocument();
    expect(screen.queryByText("1, 3, 5, 7, 9")).not.toBeInTheDocument();

    expect(screen.queryByText("Pares")).not.toBeInTheDocument();
    expect(screen.queryByText("2, 4, 6, 8, 10")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(firstPageInput).toHaveValue("");
    });

    await waitFor(() => expect(lastPageInput).toHaveValue(""));
  });
});
