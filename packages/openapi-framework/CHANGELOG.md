# openapi-framework Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.5.2 - 2018-10-06
### Fixed
- `type: 'file'` parameters were breaking OpenAPI V2 request validation.  Downstream
  projects should now handle file validation independently.

## 0.5.1 - 2018-10-04
### Changed
- `OpenAPIFrameworkOptions` -> `OpenAPIFrameworkArgs`

### Fixed
- Defining securityHandlers properly.

## 0.5.0 - 2018-10-03
### Changed
- Casing of exported types from `Openapi*` to `OpenAPI*`

### Fixed
- Defined feature types for operation context.
- Updating dependencies to the latest version.
