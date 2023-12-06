<div align="center">
  <div>
    <h1 align="center">Together.ai Node SDK</h1>
  </div>
	<p>An npm library to run open source LLMs through <a href="https://www.together.ai/">Together.ai</a>.

<a href="https://www.npmjs.com/package/together-ai"><img src="https://img.shields.io/npm/v/together-ai" alt="Current version"></a>

</div>

---

## Installation

`npm i together-ai`

## Usage

Add open source LLMs to your apps in a few lines of code. Simply create a new Together.ai client, specify your preferred AI model with inputs, and get back a result.

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

## Popular Supported Models

This is a list of popular models that are supported.

- Mistral-7B (`mistralai/Mistral-7B-Instruct-v0.1`)
- Llama-2 70B (`togethercomputer/llama-2-70b-chat`)
- Llama-2 13B (`togethercomputer/llama-2-13b-chat`)
- RedPajama 7B (`togethercomputer/RedPajama-INCITE-7B-Chat`)
- OpenOrca Mistral (`Open-Orca/Mistral-7B-OpenOrca`)
- Alpaca 7B (`togethercomputer/alpaca-7b`)

## How it works

This library uses the [Together Inference Engine](https://www.together.ai/blog/together-inference-engine-v1), the world's fastest inference stack for open source LLMs. It calls the [Together.ai](<[together.ai](https://www.together.ai/)>) Inference API under the hood to enable you to use OSS LLMs quickly.
