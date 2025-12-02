# Publishing Packages to npm

This guide explains how to publish the packages in this monorepo to npm.

## Prerequisites

1. **npm Account**: You need an npm account. Create one at [npmjs.com](https://www.npmjs.com/signup) if you don't have one.

2. **npm Login**: Log in to npm from your terminal:
   ```bash
   npm login
   ```

3. **Scoped Package Access**: Since these packages use the `@centrodphlibs` scope, ensure you have permission to publish to this scope. If you're the owner, you're all set. Otherwise, you may need to:
   - Create an organization on npmjs.com
   - Add yourself as a member with publish permissions

## Package Structure

This monorepo contains the following packages:
- `@centrodphlibs/autocomplete`
- `@centrodphlibs/highlight`
- `@centrodphlibs/menu`
- `@centrodphlibs/menuitem`

## Publishing Steps

### 1. Build All Packages

First, ensure all packages are built:
```bash
npm run build:all
```

### 2. Prepare Packages for Publishing

The prepare script copies necessary files (package.json, README.md, .npmignore) to the dist directories:
```bash
npm run prepare:publish
```

### 3. Publish Individual Packages

To publish a single package:
```bash
# Publish autocomplete
npm run publish:autocomplete

# Publish highlight
npm run publish:highlight

# Publish menu
npm run publish:menu

# Publish menuitem
npm run publish:menuitem
```

### 4. Publish All Packages

To publish all packages at once:
```bash
npm run publish:all
```

This command will:
1. Build all packages
2. Prepare them for publishing
3. Publish each package sequentially

## Version Management

Before publishing, update the version in each package's `package.json` file:

- **Patch version** (bug fixes): `0.0.1` → `0.0.2`
- **Minor version** (new features): `0.0.1` → `0.1.0`
- **Major version** (breaking changes): `0.0.1` → `1.0.0`

You can use npm version commands:
```bash
# Update version in package.json (patch, minor, or major)
cd packages/autocomplete
npm version patch  # or minor, or major
```

## Important Notes

1. **Scoped Packages**: These packages are scoped (`@centrodphlibs/*`), so they're published with `--access public` flag by default.

2. **Build Output**: Packages are published from the `dist/packages/{package-name}` directory, not from the source directories.

3. **Required Files**: The following files are automatically copied to dist directories:
   - `package.json`
   - `README.md`
   - `.npmignore`

4. **Published Files**: Only the files specified in the `files` field of `package.json` will be included in the published package:
   - `index.js` (CommonJS)
   - `index.mjs` (ES Modules)
   - `index.d.ts` (TypeScript definitions)
   - `README.md`

## Troubleshooting

### Authentication Errors

If you get authentication errors:
```bash
npm login
```

### Permission Errors

If you get permission errors for scoped packages:
- Ensure you're logged in with the correct account
- Verify you have publish access to the `@centrodphlibs` scope
- Check if the package name already exists and you're the owner

### Package Already Exists

If a package version already exists, you'll need to bump the version before publishing.

### Build Errors

Ensure all packages build successfully before publishing:
```bash
npm run build:all
npm run test:all  # Optional: run tests before publishing
```

## CI/CD Integration

For automated publishing in CI/CD pipelines:

1. Set up npm authentication token as a secret
2. Configure the token:
   ```bash
   echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
   ```
3. Run the publish command:
   ```bash
   npm run publish:all
   ```

## Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Scoped Packages](https://docs.npmjs.com/cli/v8/using-npm/scope)
- [Semantic Versioning](https://semver.org/)

