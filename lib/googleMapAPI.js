const {
  google
} = require('googleapis');

exports.api = function(callback) {
  // Each API may support multiple version. With this sample, we're getting
  // v3 of the blogger API, and using an API key to authenticate.
  const blogger = google.blogger({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY
  });

  const params = {
    blogId: 3213900
  };

  // get the blog details
  blogger.blogs.get(params, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(`The blog url is ${res.data.url}`);

    callback(params);
  });
}