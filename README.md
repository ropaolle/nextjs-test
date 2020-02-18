# Next.js Test

## Todo

- [ ] https://nextjs.org/blog/styling-next-with-styled-jsx
- [ ] ?
- [ ] ?
- [ ] https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Stockholm
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

- [ ] Azure auto shutdown

## Specification

### Next.js

- Home page
- Login page
- Websockets

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
