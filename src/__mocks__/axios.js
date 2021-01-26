import axios from "axios";

export default {
  interceptors: {
    response: {
      use: () => {},
    },
  },
  get: jest
    .fn(async (url) => {
      const mocked = process.env.TEST_TYPE !== "unmocked";
      const msg = `[JEST] GET default ${
        mocked ? "mocked " : ""
      }axios called with params:
        URL: ${url}`;
      console.log(msg);
      if (mocked) {
        return Promise.resolve({ data: [] });
      } else {
        return await axios.get(url);
      }
    })
    .mockName("axios.get"),
  post: jest
    .fn(async (url, values) => {
      const mocked = process.env.TEST_TYPE !== "unmocked";
      const msg = `[JEST] POST default ${
        mocked ? "mocked " : ""
      }axios called with params:
        URL: ${url}
        ${JSON.stringify(values)}`;
      console.log(msg);
      if (mocked) {
        return Promise.resolve({ message: "ok" });
      } else {
        return await axios.post(url, values);
      }
    })
    .mockName("axios.post"),
  put: jest
    .fn(async (url, values) => {
      const mocked = process.env.TEST_TYPE !== "unmocked";
      const msg = `[JEST] PUT default ${
        mocked ? "mocked " : ""
      }axios called with params:
        URL: ${url}
        ${JSON.stringify(values)}`;
      console.log(msg);
      if (mocked) {
        return Promise.resolve({ message: "ok" });
      } else {
        return await axios.put(url, values);
      }
    })
    .mockName("axios.put"),
  delete: jest
    .fn(async (url) => {
      const mocked = process.env.TEST_TYPE !== "unmocked";
      const msg = `[JEST] DELETE default ${
        mocked ? "mocked " : ""
      } axios called with params:
        URL: ${url}`;
      console.log(msg);
      if (mocked) {
        return Promise.resolve({ message: "ok" });
      } else {
        return await axios.delete(url);
      }
    })
    .mockName("axios.delete"),
};
