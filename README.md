<div align="center">
  <div>
    <h1 align="center">Together Node SDK</h1>
  </div>
	<p>An npm library that helps run inference for Together.

<a href="https://www.npmjs.com/package/together-ai"><img src="https://img.shields.io/npm/v/together-ai" alt="Current version"></a>

</div>

---

## Installation

`npm i together-ai`

## Usage

```js
import Together from 'together-ai';

const together = new Together({
  api: `api token`,
});

const output = await together.inference('Llama-70b', {
  prompt: 'tell me about life',
});
```

## How it works

This library uses the Together Inference Engine, the most performant engine on the market today, to process open source models and return results.
