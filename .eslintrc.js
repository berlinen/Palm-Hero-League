module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended",  'eslint-config-alloy/typescript'],
  plugins: ["@typescript-eslint", "react"],
  rules: {
        'indent': [
          2,
          4,
          {
              "SwitchCase": 2
          }
        ],
        "semi": [
            2,
            "always",
            {
                "omitLastInOneLineBlock": true
            }
        ],
         // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
         'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
  },
  // 跟路径引入
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    },
  },
};
