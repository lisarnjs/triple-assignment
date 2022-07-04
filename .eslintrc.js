const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { overrides, ...rest } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname,
  enableTypeCheck: false,
})
