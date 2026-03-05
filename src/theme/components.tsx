import { Button, Paper, PasswordInput, TextInput } from "@mantine/core"
import classes from "./Theme.module.css"

export const components = {
  Button: Button.extend({
    defaultProps: {
      fw: 500,
    },
  }),
  Paper: Paper.extend({
    defaultProps: {
      bg: "var(--bg-white)",
      shadow: "md",
      withBorder: true,
    },
  }),
  TextInput: TextInput.extend({
    classNames: {
      root: classes.root,
      label: classes.label,
      input: classes.input,
    },
    defaultProps: {
      size: "sm",
    },
  }),
  PasswordInput: PasswordInput.extend({
    classNames: {
      root: classes.root,
      label: classes.label,
      input: classes.input,
      innerInput: classes.innerInput,
    },
    defaultProps: {
      size: "sm",
    },
  }),
}
