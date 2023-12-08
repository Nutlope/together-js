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

Create an account at [together.ai](https://www.together.ai/) and add the API key in. Then simply run the code snippet below with your preferred AI model and inputs to get back a reply.

```js
import Together from 'together-ai';

const together = new Together({
  auth: process.env.TOGETHER_API_KEY,
});

const model = 'mistralai/Mistral-7B-Instruct-v0.1';

const result = await together.inference(model, {
  prompt: 'Suggest some fun family activities for the new year',
  max_tokens: 300,
});
```

### Streaming with LLMs

If you want to stream, simply specify `stream-tokens: true`.

```js
const model = 'togethercomputer/llama-2-70b-chat';

const result = await together.inference(model, {
  prompt: 'Tell me about the history of the United States',
  max_tokens: 1000,
  stream_tokens: true,
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

This library uses the [Together Inference Engine](https://www.together.ai/blog/together-inference-engine-v1), the world's fastest inference stack for open source LLMs. It calls the [Together.ai](<[together.ai](https://www.together.ai/)>) Inference API, specifically their serverless endpoints product, to enable you to use OSS LLMs quickly and effeciently.
