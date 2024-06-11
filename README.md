# Lightning UI ⚡️

A comprehensive and customisable React UI library.

## Installation

```
#Using npm
npm install @luke-dcz/lightning-ui

#Using yarn
yarn add @luke-dcz/lightning-ui

#Using pnpm
pnpm add @luke-dcz/lightning-ui
```

## Import

Each component can be imported individually, so that you only bundle what you use.

```
// import { ComponentName } from "@luke-dcz/lightning-ui";
import { Button } from "@luke-dcz/lightning-ui";
import '@luke-dcz/lightning-ui/dist/style.css';

export default function MyPage() {
  return (
    <main>
      <Button>Click Me</Button>
    </main>
  );
}
```

## Components

### Button

Props:

- className: `string` - add custom styles or override current styles (optional)
- children: `ReactNode` - render text inside the button
- isDisabled: `boolean` - disable the button (optional)
- size: `sm`, `md`, `lg`, `xl` - change the size of the button (optional)
- radius: `none`, `sm`, `base`, `md`, `lg`, `xl`, `full` - change the border radius of the button (optional)
- variant: `solid`, `bordered`, `ghost` - change the style of the button (optional)
- default HTML props

### Input

Props:

- className: `string` - add custom styles or override current styles (optional)
- isDisabled: `boolean` - disable the input (optional)
- isRequired: `boolean` - makes the input required (optional)
- label: `string` - add a label for the button (option)
- labelPlacement: `left`, `top` - change the placement of the button (optional)
- name: `string` - add the HTML name prop to uniquely identify the input
- placeholder: `string` - add a placeholder to the input (optional)
- radius: `none`, `sm`, `base`, `md`, `lg`, `xl`, `full` - change the border radius of the input (optional)
- variant: `solid`, `bordered`, `underlined` - change the style of the input (optional)

### Chip

Props:

- className: `string` - add custom styles or override current styles (optional)
- children: `ReactNode` - render text inside the chip
- radius: `none`, `sm`, `base`, `md`, `lg`, `xl`, `full` - change the border radius of the chip (optional)
- size: `sm`, `md`, `lg`, `xl` - change the size of the chip (optional)
- variant: `solid`, `bordered` - change the style of the chip (optional)

### Select

Props:

- options: `{
  value: string;
  label: string;
}[]` - add the various options to select from

## Storybook

// To do
