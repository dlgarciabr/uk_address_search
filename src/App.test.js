import React from "react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

import { render, screen, waitFor } from "./utils/test-utils";
import App from "./App";
import mockAxios from "axios";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Customer address searching", () => {
  test("Search with an invalid address", async () => {
    //arrange
    const invalidPostCode = "AAABBBCCC";

    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          data: {
            status: 404,
            error: "Invalid postcode",
          },
        },
      })
    );

    render(<App />);

    await new Promise((r) => setTimeout(r, 1000));

    //act
    userEvent.type(
      screen.getByRole("textbox", { name: "Customer Postcode" }),
      invalidPostCode
    );

    userEvent.click(screen.getByRole("button", { name: "Search" }));

    //assert
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    await waitFor(() =>
      expect(screen.getByText("Invalid postcode")).toBeInTheDocument()
    );
  });

  test("Search with a valid address", async () => {
    //arrange
    const invalidPostCode = "N76RS";
    const city = "Islington";

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          result: {
            postcode: "N7 6RS",
            longitude: -0.116805,
            latitude: 51.560414,
            region: "London",
            parliamentary_constituency: "Islington North",
            admin_district: city,
          },
        },
      })
    );

    render(<App />);

    await new Promise((r) => setTimeout(r, 1000));

    //act
    userEvent.type(
      screen.getByRole("textbox", { name: "Customer Postcode" }),
      invalidPostCode
    );

    userEvent.click(screen.getByRole("button", { name: "Search" }));

    //assert
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: `City: ${city}` })
      ).toBeInTheDocument()
    );
  });
});
