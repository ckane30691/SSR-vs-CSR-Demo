export const renderHtml = (reactHtml, initialData) => `
  <!DOCTYPE html>
  <html>
    <head><title>SSR Demo</title></head>
    <body>
      <div id="root">${reactHtml}</div>
      <script>window.__USER__ = ${JSON.stringify(initialData)}</script>
    </body>
  </html>
`;