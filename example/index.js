// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import LiveEdit, { withLiveEditScope } from "../dist";

setAddon(LiveEdit);

const Test = () => {
  return <h1>pasha test</h1>;
};

storiesOf("Example", module)
  .addDecorator(withLiveEditScope({ React, scopeTest: "Passed!", Test }))
  .addLiveSource(
    "Demo",
    `<Test />`
  )
  .addLiveSource(
    "Demo 2",
    `<div style={{ padding: '10px', border: '3px solid blue', margin: 10 }}>{scopeTest}</div>`,
    {
      localScopeTest: "Passed as well!",
      Test: ({ text }) => (
        <b style={{ fontSize: "xx-large", color: "orange" }}>{text}</b>
      )
    }
  )
  .add("Static source", () => <h1>Pavel</h1>);
