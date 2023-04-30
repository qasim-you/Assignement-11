// 12. Write a JavaScript function to parse an URL. 

function parseURL(url) {
    var parsed = new URL(url);
    return {
      protocol: parsed.protocol,
      host: parsed.host,
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
    };
  }
  var url = "https://www.example.com/path/to/file.html?id=123#section";
  var parsed = parseURL(url);
  console.log(parsed);