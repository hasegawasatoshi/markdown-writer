# Markdown Writer

This application is a helper tool for Markdown writing.

# System Requirements

The following applications are required.
* pandoc: `2.0` or later
* npm: `3.10.10` or later

# Usage
## Setup
Install npm packages.
```
$ npm install
```

## Dcument Writing
Excute gulp task.
```
$ gulp
```
Web browser will be launched and Markdown contents will be previewed.

Please create/modify Markdown files in `./src`. When Markdown files are updated, Web browser reload the page automatically.

## Publish
### HTML
Please execute the following command
```
$ gulp pandoc-html
```
Markdown contents are published in HTML format as `dest/output.html`
### WORD
Please execute the following command
```
$ gulp pandoc-word
```
Markdown contents are published in WORD format as `dest/output.docx`

# History
## `0.0.1` March 16, 2017
* Inital Release
