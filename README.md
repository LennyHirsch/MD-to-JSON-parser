# MD-to-JSON-parser
Markdown to JSON parser written in Python.
Creates a file called worksheet.js in the same directory as the original worksheet, which contains the JSON version of the markdown worksheet.

##Schema:

```python
  python code snippets
```

Also supports `inline code snippets`, **bold** and *italics*.

##Requirements:

Parser requires several files:

- worksheet.md - markdown version of a worksheet
- overview.md - an overview or description of the worksheet
- DIFFICULTY - a file containing the difficulty of the worksheet e.g. 3/5 or 2.5/5

Parser file should be placed in the same directory as the required files.
The parser will take the containing directory name as a title for the worksheet.
