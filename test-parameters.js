export const handler = async (event) => {

  let firstQueryParamValue = "No query parameters found";

  const queryStringParameters = event.queryStringParameters;
  if (queryStringParameters) {
    const parameterNames = Object.keys(queryStringParameters);
    if (parameterNames.length > 0) {
      const firstParameterName = parameterNames[0];
      firstQueryParamValue = queryStringParameters[firstParameterName];
    }
  }

  const response = {
    statusCode: 200,
    body: `
      <h1> query string parameters</h1>
      <p> ${JSON.stringify(event.queryStringParameters)}</p>
      <hr/>
      <h1> path </h1>
      <p> ${JSON.stringify(event.requestContext.http.path)}</p>
      <hr/>
      <h1> Ciao : ${firstQueryParamValue} ! </h1>
      
      <hr/>
      `,
    headers:{
        'Content-Type':'text/html; charset:utf-8'
    },
  };
  return response;
};
