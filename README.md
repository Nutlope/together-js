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

const model = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

const result = await together.inference(model, {
  prompt: 'Suggest some fun winter family activities',
  max_tokens: 700,
});
```

### Streaming with LLMs

If you want to stream, simply specify `stream-tokens: true`.

```js
const result = await together.inference('togethercomputer/llama-2-70b-chat', {
  prompt: 'Tell me about the history of the United States',
  max_tokens: 1000,
  stream_tokens: true,
});
```

### Next.js Chat App with streaming

You can see an example of this library being used in a Next.js chat app here: https://simple-ai-chat.vercel.app.

The code for the example is also available, including code on how to stream the results of the LLM directly to the frontend: https://github.com/Nutlope/chat.

### Filtering responses with Llama Guard

You can now use Llama Guard, an LLM-based input-output safeguard model, with models on the Together.ai platform. To do this, simply add `"safety_model": "Meta-Llama/Llama-Guard-7b"`.

```js
const result = await together.inference('togethercomputer/llama-2-13b-chat', {
  prompt: 'Tell me about San Francisco',
  max_tokens: 1000,
  safety_model: 'Meta-Llama/Llama-Guard-7b',
});
```

## Popular Supported Models

This is a non-exhaustive list of popular models that are supported.

- Mixtral Instruct v0.1 (`mistralai/Mixtral-8x7B-Instruct-v0.1`)
- Mistral-7B (`mistralai/Mistral-7B-Instruct-v0.1`)
- Llama-2 70B (`togethercomputer/llama-2-70b-chat`)
- Llama-2 13B (`togethercomputer/llama-2-13b-chat`)
- RedPajama 7B (`togethercomputer/RedPajama-INCITE-7B-Chat`)
- OpenOrca Mistral (`Open-Orca/Mistral-7B-OpenOrca`)
- Alpaca 7B (`togethercomputer/alpaca-7b`)

## How it works

This library uses the [Together Inference Engine](https://www.together.ai/blog/together-inference-engine-v1), the world's fastest inference stack for open source LLMs. It calls the [Together.ai](<[together.ai](https://www.together.ai/)>) Inference API, specifically their serverless endpoints product, to enable you to use OSS LLMs quickly and effeciently.
