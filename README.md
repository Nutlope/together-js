<div align="center">
  <div>
    <h1 align="center">Together.ai Node SDK</h1>
  </div>
	<p>An npm library that helps run inference for <a href="https://www.together.ai/">Together.ai</a>.

<a href="https://www.npmjs.com/package/together-ai"><img src="https://img.shields.io/npm/v/together-ai" alt="Current version"></a>

</div>

---

## Installation

`npm i together-ai`

## Usage

In a few lines of code, you instantiate a new Together.ai client, specify your model and inputs, and get back a result from your preferred LLM or Model.

```js
import Together from 'together-ai';

const together = new Together({
  auth: `api token`,
});

const result = await together.inference('mistralai/Mistral-7B-Instruct-v0.1', {
  prompt: 'tell me about the history of the United States',
  max_tokens: 300,
});
```

## How it works

This library uses the [Together Inference Engine](https://www.together.ai/blog/together-inference-engine-v1), the world's fastest inference stack for open source LLMs and models. It calls the [Together.ai](<[together.ai](https://www.together.ai/)>) Inference API under the hood to enable you to use ML models quickly.
