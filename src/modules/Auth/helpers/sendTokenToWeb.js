const sendTokenToWeb = (webviewRef, token) => {
  const data = {
    value: token,
    isToken: true,
  }
  const script = `window.postMessage(${JSON.stringify(data)}, "*"); true;`
  if (webviewRef.current) webviewRef.current.injectJavaScript(script)
}

export default sendTokenToWeb
