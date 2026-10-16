import {AUTH} from './cred';

const URL = "http://martha.jh.shawinigan.info/queries";

class MarthaService{

  async execute(query, body = {}) {
    const response = await fetch(`${URL}/${query}/execute`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'auth': AUTH,
        'Content-Type': "application/json"
      }
    }).then((r) => r.json());

    if (!response.success) {
      throw new Error(response.error);
    }

    return response;
  }
}

const martha = new MarthaService();
export default martha;