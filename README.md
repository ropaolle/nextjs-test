# Next.js Test

## Todo

- [ ] ?
- [ ] ?
- [ ] ?
- [ ] ?

## Info

- [Persistent Layout Patterns in Next.js](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)
- [Styled JSX](https://nextjs.org/blog/styling-next-with-styled-jsx)
- [Dropdown](https://reactjsexample.com/a-nice-react-dropdown-component/)


## Setup

### TypeScript and Eslint

```bash
# Add TypeScript
npm i -D typescript @types/react @types/node

# Add Eslint
npx eslint --init
```

### Prettier

- Add Prettier with `npm i -D eslint-config-prettier eslint-plugin-prettier prettier`.
- Add below to `.eslintrc.js`.

  ```js
  module.exports = {
    extends: ['prettier', 'plugin:prettier/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  ```

- Add a `.prettierrc` file

  ```json
  {
    "singleQuote": true,
    "printWidth": 120,
    "trailingComma": "es5"
  }
  ```
