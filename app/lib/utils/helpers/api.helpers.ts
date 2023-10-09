export const sendResponseError = (statusCode: number, message: string) => {
  return Response.json(
    {
      status: 'failed',
      message,
    },
    {
      status: statusCode,
    }
  );
};
