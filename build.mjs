import * as esbuild from 'esbuild';
import { rmSync } from 'fs';

const outdir = 'dist/'

const cleanDist = () => {
  rmSync(outdir, {
    force: true,
    recursive: true
  })
}

const build = async () => {
  cleanDist()

  await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    outdir,
    platform: 'node',
    logLevel: 'info'
  })
}

build()