type ApiResponse = {
  status: string;
  prompt: string[];
  model: string;
  model_owner: string;
  tags: Record<string, unknown>;
  num_returns: number;
  args: {
    model: string;
    prompt: string;
    max_tokens: number;
    stop: string;
    temperature: number;
    top_p: number;
    top_k: number;
    repetition_penalty: number;
  };
  subjobs: any[];
  output: {
    choices: {
      text: string;
    }[];
    request_id: string;
  };
};

class Together {
  authApiKey: string | null = null;
  constructor({ auth }: { auth: string }) {
    this.authApiKey = auth;
  }

  async inference(model: string, { ...inputs }) {
    if (!this.authApiKey) {
      throw new Error('Auth key is not set!');
    }
    const res = await fetch('https://api.together.xyz/inference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authApiKey,
      },
      body: JSON.stringify({
        model,
        ...inputs,
      }),
    });

    const data: ApiResponse = await res.json();

    return data;
  }
}

export default Together;
