# Safe Transaction Batcher

A tool to generate transaction batches to upload to Safe's Transaction Builder app

## Generate output

Generate a transaction batch in `src/output.json`:

```bash
npm run generate
```

## Add more functions that can be used by the batcher

1. Add ABI of the contract in `src/abi`
2. Add desired function name to `FunctionNames` in `src/constants`