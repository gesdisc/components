import {
  loader_default
} from "./chunk.KYGXDWBN.js";
import {
  login_styles_default
} from "./chunk.5P7TDN4M.js";
import {
  icon_default
} from "./chunk.EC732IG2.js";
import {
  e,
  n
} from "./chunk.2XCNCXGV.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  button_default
} from "./chunk.S4OXSRJR.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  T,
  x
} from "./chunk.PQFHJHNO.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod
} from "./chunk.6JHIJHTB.js";

// src/components/login/login.component.ts
var _clientID, _formRef, _serverURL, _loginTask, _getAccessCode, getAccessCode_fn, _exchangeCodeForAccessToken, exchangeCodeForAccessToken_fn, _handleSubmit, handleSubmit_fn, _handleKeypress, handleKeypress_fn, _clearForm, clearForm_fn;
var TerraLogin = class extends TerraElement {
  constructor() {
    super(...arguments);
    /**
     * Using a fetch that contains our credentials, get a code from EDL that we can use to exchange for an JWT.
     */
    __privateAdd(this, _getAccessCode);
    /**
     * Check for a code and attempt to exchange it for a JWT, accessing only the access_token.
     */
    __privateAdd(this, _exchangeCodeForAccessToken);
    /**
     * If the user submits our form to log in to EDL, use a fetch request to get an authorization code, then exchange it for an access token.
     */
    __privateAdd(this, _handleSubmit);
    __privateAdd(this, _handleKeypress);
    /**
     * Clear the given form of all entries.
     */
    __privateAdd(this, _clearForm);
    // cspell:disable-next-line
    __privateAdd(this, _clientID, globalThis.atob("QlNsbllwQTdTNmtIbklTRzk5R2pCZw=="));
    // obfuscated public identifier
    __privateAdd(this, _formRef, e());
    __privateAdd(this, _serverURL, globalThis.atob(
      // cspell:disable-next-line
      "aHR0cHM6Ly93aW5kbWlsbC1sb2FkLWJhbGFuY2VyLTY0MTQ5OTIwNy51cy1lYXN0LTEuZWxiLmFtYXpvbmF3cy5jb20vYXBpL3IvZWRsX2xvZ2lu"
    ));
    // obfuscated URL
    __privateAdd(this, _loginTask, new h(this, {
      task: async ([], { signal }) => {
        const code = await __privateMethod(this, _getAccessCode, getAccessCode_fn).call(this, signal);
        const accessToken = await __privateMethod(this, _exchangeCodeForAccessToken, exchangeCodeForAccessToken_fn).call(this, code, signal);
        this.emit("terra-login", { detail: accessToken });
        __privateMethod(this, _clearForm, clearForm_fn).call(this);
      }
    }));
  }
  render() {
    if (__privateGet(this, _loginTask).status === 2) {
      ;
      document.activeElement.blur();
    }
    return x`
            <form
                ${n(__privateGet(this, _formRef))}
                @keypress=${__privateMethod(this, _handleKeypress, handleKeypress_fn)}
                @submit=${__privateMethod(this, _handleSubmit, handleSubmit_fn)}
                action=""
                id="edl-login"
                name="terra-login"
                novalidate
            >
                <p>
                    <label for="username"
                        >EDL Username
                        <strong><span aria-label="required">*</span></strong>
                    </label>

                    <input
                        type="text"
                        name="username"
                        autocomplete="username"
                        inputmode="text"
                        required
                        id="username"
                    />

                    <output
                        class="form-feedback form-feedback__username"
                        for="username"
                        name="username-feedback"
                    ></output>
                </p>

                <p>
                    <label for="password"
                        >EDL Password
                        <strong><span aria-label="required">*</span></strong>
                    </label>

                    <input
                        type="password"
                        name="password"
                        autocomplete="current-password"
                        inputmode="text"
                        required
                        id="password"
                    />

                    <output
                        class="form-feedback form-feedback__password"
                        for="password"
                        name="password-feedback"
                    ></output>
                </p>

                <p>
                    <terra-button
                        type="submit"
                        @click=${__privateMethod(this, _handleSubmit, handleSubmit_fn)}
                        data-task-status=${__privateGet(this, _loginTask).status}
                    >
                        ${__privateGet(this, _loginTask).render({
      pending: () => x`<span
                                    class="login-task login-task--pending"
                                    slot="prefix"
                                    >&hellip;</span
                                >`,
      complete: () => x`<terra-icon
                                    class="login-task login-task--complete"
                                    library="heroicons"
                                    name="solid-check-circle"
                                    slot="prefix"
                                ></terra-icon>`,
      error: () => x`
                                <terra-icon
                                    class="login-task login-task--error"
                                    library="heroicons"
                                    name="solid-x-circle"
                                    slot="prefix"
                                ></terra-icon>
                            `
    })}
                        Sign In</terra-button
                    >

                    <output
                        class="form-feedback form-feedback__form"
                        for="edl-login"
                        name="login-feedback"
                        >${__privateGet(this, _loginTask).status === 3 ? `An error occurred and has been logged to you browser's console.` : T}</output
                    >
                </p>

                <p class="help-text">
                    <a
                        href="https://urs.earthdata.nasa.gov/documentation/what_do_i_need_to_know"
                        rel="noopener noreferrer"
                        target="_blank"
                        >Earthdata Login (EDL) documentation
                        <terra-icon
                            name="outline-arrow-top-right-on-square"
                            library="heroicons"
                        ></terra-icon>
                    </a>
                </p>
            </form>
        `;
  }
};
_clientID = new WeakMap();
_formRef = new WeakMap();
_serverURL = new WeakMap();
_loginTask = new WeakMap();
_getAccessCode = new WeakSet();
getAccessCode_fn = async function(signal) {
  const formData = new FormData(__privateGet(this, _formRef).value);
  const authURL = `https://urs.earthdata.nasa.gov/oauth/authorize?response_type=code&client_id=${__privateGet(this, _clientID)}&redirect_uri=${__privateGet(this, _serverURL)}`;
  const clientAuth = `credentials=${globalThis.btoa(`${formData.get("username")}:${formData.get("password")}`)}`;
  const loginResponse = await fetch(authURL, {
    body: clientAuth,
    method: "POST",
    headers: {
      "Content-Length": `${clientAuth.length}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    signal
  });
  if (!loginResponse.ok) {
    throw new Error("Unable to log in to EDL.");
  }
  const code = new URL(loginResponse.url).searchParams.get("code");
  if (!code) {
    throw new Error("Access code not present in response from EDL.");
  }
  return code;
};
_exchangeCodeForAccessToken = new WeakSet();
exchangeCodeForAccessToken_fn = async function(code, signal) {
  const tokenResponse = await fetch(`${__privateGet(this, _serverURL)}?code=${code}`, {
    signal
  });
  if (!tokenResponse.ok) {
    throw new Error("Unable to exchange access code for access token.");
  }
  const { access_token } = await tokenResponse.json();
  return access_token;
};
_handleSubmit = new WeakSet();
handleSubmit_fn = async function(event) {
  var _a, _b, _c, _d;
  event.preventDefault();
  const username = (_a = __privateGet(this, _formRef).value) == null ? void 0 : _a.elements.namedItem(
    "username"
  );
  const password = (_b = __privateGet(this, _formRef).value) == null ? void 0 : _b.elements.namedItem(
    "password"
  );
  const usernameIsValid = !username.validity.valueMissing;
  const passwordIsValid = !password.validity.valueMissing;
  const usernameFeedback = (_c = this.shadowRoot) == null ? void 0 : _c.querySelector(
    ".form-feedback__username"
  );
  const passwordFeedback = (_d = this.shadowRoot) == null ? void 0 : _d.querySelector(
    ".form-feedback__password"
  );
  usernameFeedback.textContent = usernameIsValid ? "" : "Username is required";
  passwordFeedback.textContent = passwordIsValid ? "" : "Password is required";
  if (usernameIsValid && passwordIsValid) {
    __privateGet(this, _loginTask).run([]);
  }
};
_handleKeypress = new WeakSet();
handleKeypress_fn = function(event) {
  var _a;
  const shouldSubmit = event.isTrusted && event.key === "Enter" && !event.shiftKey;
  if (!shouldSubmit) {
    return;
  }
  (_a = __privateGet(this, _formRef).value) == null ? void 0 : _a.requestSubmit();
};
_clearForm = new WeakSet();
clearForm_fn = function() {
  var _a;
  (_a = __privateGet(this, _formRef).value) == null ? void 0 : _a.reset();
};
TerraLogin.dependencies = {
  "terra-button": button_default,
  "terra-icon": icon_default,
  "terra-loader": loader_default
};
TerraLogin.styles = [component_styles_default, login_styles_default];

export {
  TerraLogin
};
