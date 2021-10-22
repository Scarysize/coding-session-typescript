# Compiler

```sh
npm install --global typescript

# then
tsc hello-world.ts
```

- Compiler kann streng oder locker konfiguriert werden:
  - **`noImplicitAny`:** Type inference fällt nicht automatisch auf "any" zurück.
  - **`strictNullChecks`:** Erzwingt die Handhabung von potentiellen "null" oder "undefined" Werten.
- Compiler kann Output für verschiedene ECMAScript Versionen generieren (es3, es6, esnext etc.).
- Compiler unterstützt verschiedene Modulsysteme (commonjs, es6 etc.).
- Compiler kann ein Bundle erzeugen oder bestehende Dateien ausgeben.
- Untypisierte Bibliotheken lassen sich über "Declaration Files" einbinden. Declaration Files enthalten dann nur Typdeklarationen, keine Implementierung.
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) Projekt enthält fertige Deklarationen für alle bekannten Bibliotheken (React, Node.js Standard Bibliothek etc.)
- Eine Codebasis lässt sich inkrementell von Javascript in Typescript überführen:
  - `tsconfig.json` anlegen sorgt schon für grundlegende Type Inference.
  - `noEmitOnError: false`: Fehler werden angezeigt, aber Projekt kompiliert noch.
  - Dateien nach und nach migrieren, Compiler nach und nach strikter einstellen.

# Grundlegenden Typen

Examples -->
