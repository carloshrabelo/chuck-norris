/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { render } from "@testing-library/react";
import Page from ".";

describe("<Page/>", () => {
  it("Should render a Component", async () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });
});
