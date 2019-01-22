---
title: "The OAuth2 flow for native apps: PKCE"
date: 2018-07-24
description: "If you are building a native application, and you need OAuth 2.0, PKCE OAuth is your best choice. Here I will explain why."
---

# The OAuth2 flow for native apps: PKCE

If you are building a native application, and you need OAuth 2.0, PKCE OAuth is your best choice. Here I will explain why.

Native application is often used to refer to native application that has no back-end, and running totally in user's devices such as Windows, Mac, iOS, and Android, where securely storing secrets is impossible.

What are the OAuth 2 options for those native applications and what are the pros and cons for them?

1. Implicit Flow: Implicit flow will pass `Access Token` to Redirect URL。Assume your native application is redirecting to third-party browsers to perform OAuth2 authorization request, then your application either obtain the `Access Token` back by listening to `app-name://?access_token=` request or start a HTTP server to listen to `http://localhost:{port}/?access_token=` request. These two approaches both have the risk of `Access Token` being intercepted by malicious party who occupy URL Scheme or localhost port. Also access token can't be renewed after expiration. Thus implicit flow is not recommended.
2. Authorization Code Flow: `Access Token` of this flow will not be passed to `Redirect URL` directly. `Redirect URL` will only receive an `authorization code`，which need to be used along with `Client ID`，and `Client Secret` to exchange for `Access Token`. Since native application can't securely store `Client Secret`, malicious party can decode it from native code/binary, and intercept `Authorization Code` to exchange for `Access Token`. Thus authorization code flow is not recommended either. Even some OAuth provider doesn't require `Client Secret`, `Access Token` can still be exchanged by malicious party.

Now that two options are excluded, how can native application securely implement OAuth2? The answer is PKCE OAuth 2.0.

PKCE (Proof Key for Code Exchange), is using cryptography method to prevent malicious party to be able to exchange access token with the information they can intercept.

PKCE flow steps:

1. Generate random string and encode with URL-Safe Base64, and used as `code_verifier`
2. Do SHA256 hash，and URL-Safe Base64，and used as `code_challenge`
3. Redirect to OAuth provider with `code_challenge` and receive `Authorization Code`
4. Exchange for `Access Token` with `code_verifier`

Since malicious party can't infer `code_verifier` by `code_challenge`, only the native application itself knows about the two value. In this way, even if malicious party intercepted `code_challenge`, it will not be able to exchange `Access Token`.

## Generate PKCE Code Verifier and Code Challenge Online

<iframe width="100%" height="500" src="//tonyxu-io.github.io/pkce-generator/index.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0">https://tonyxu-io.github.io/pkce-generator/</iframe>

Link to the tool: [https://tonyxu-io.github.io/pkce-generator/](https://tonyxu-io.github.io/pkce-generator/)

## Implementation (JavaScript)

```html
<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
    <script>
        function generateCodeVerifier() {
            var code_verifier = generateRandomString(32)
            document.getElementById("code_verifier").value = code_verifier
        }
        function generateRandomString(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        function generateCodeChallenge(code_verifier) {
            return code_challenge = base64URL(CryptoJS.SHA256(code_verifier))
        }
        function base64URL(string) {
            return string.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
        }
        function submit() {
            var code_verifier = document.getElementById("code_verifier").value
            var code_challenge = generateCodeChallenge(code_verifier)
            document.getElementById("code_challenge").innerHTML = code_challenge
            document.getElementById("code_challenge_div").style.display ="block"
        }
    </script>
</head>

<body>
    <div>
        <label for="code_verifier">Code Verifier: </label>
        <input type="text" id="code_verifier" name="code_verifier" size="38">
    </div>
    <br>
    <div style="display:none" id="code_challenge_div">
        Code Challenge:
        <span id="code_challenge">

        </span>
    </div>
    <br>
    <div>
        <button onclick="generateCodeVerifier()">Generate Code Verifier</button>
        <button onclick="submit()">Generate Code Challenge</button>
    </div>
</body>

</html>
```

## OAuth2 providers that support PKCE

- [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/OAuth2InstalledApp)
- [Authorize access to Azure Active Directory web applications using the OAuth 2.0 code grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-code)
- [Implementing the Authorization Code Flow with PKCE](https://developer.okta.com/authentication-guide/implementing-authentication/auth-code-pkce)

------

Reference:

- [RFC 7636 - OAuth PKCE](https://tools.ietf.org/html/rfc7636)
- [RFC 8252 - OAuth 2.0 for Native Apps](https://tools.ietf.org/html/rfc8252)