## To Reproduce

```bash
$ npm run dev
```

Or

```bash
$ npx netlify dev
```

The inclusion of the `@aws-sdk/client-s3` library causes `netlify dev` to be unable to
build, with below error:

```
◈ Function builder zip-it-and-ship-it building functions from directory /netlify-cli-bug-repo/netlify/functions
◈ Function builder zip-it-and-ship-it finished building functions from directory /netlify-cli-bug-repo/netlify/functions
    Error: In file "/netlify-cli-bug-repo/.netlify/functions-serve/test/test.js"
    Cannot find module 'exports'
    Require stack:
    - /netlify-cli-bug-repo/node_modules/@netlify/zip-it-and-ship-it/src/node_dependencies/resolve.js
    - /netlify-cli-bug-repo/node_modules/@netlify/zip-it-and-ship-it/src/node_dependencies/index.js
    - /netlify-cli-bug-repo/node_modules/@netlify/zip-it-and-ship-it/src/main.js
    - /netlify-cli-bug-repo/node_modules/netlify/src/deploy/hash_fns.js
    - /netlify-cli-bug-repo/node_modules/netlify/src/deploy/index.js
    - /netlify-cli-bug-repo/node_modules/netlify/src/index.js
    - /netlify-cli-bug-repo/node_modules/@netlify/config/src/api/client.js
    - /netlify-cli-bug-repo/node_modules/@netlify/config/src/main.js
    - /netlify-cli-bug-repo/node_modules/netlify-cli/src/utils/command.js
    - /netlify-cli-bug-repo/node_modules/netlify-cli/src/commands/dev/index.js
    - /netlify-cli-bug-repo/node_modules/@oclif/config/lib/plugin.js
    - /netlify-cli-bug-repo/node_modules/@oclif/config/lib/config.js
    - /netlify-cli-bug-repo/node_modules/@oclif/config/lib/index.js
    - /netlify-cli-bug-repo/node_modules/@oclif/command/lib/command.js
    - /netlify-cli-bug-repo/node_modules/@oclif/command/lib/index.js
    - /netlify-cli-bug-repo/node_modules/netlify-cli/src/index.js
    - /netlify-cli-bug-repo/node_modules/netlify-cli/bin/run
    Code: MODULE_NOT_FOUND
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! netlify-cli-bug-repo@1.0.0 dev: `netlify dev`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the ts-netlify-dev-issue@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /.npm/_logs/2021-04-24T20_16_45_278Z-debug.log
```
