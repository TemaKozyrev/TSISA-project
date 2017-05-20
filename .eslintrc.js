module.exports = {
  "extends": "react",
  "plugins": ["react"],
  "rules": {
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ]
  },
  "end": {
    "browser": true,
    "node": true
  },
  valid: [
    {
      code: "window.alert()",
      globals: ["window", "document"]
    }
  ]
}
