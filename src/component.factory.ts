import { basename, normalize, Path, strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';

import { Schema } from './schema';

export function componentFactory(_options: Schema) {
  return (_tree: Tree, _context: SchematicContext) => {
    _options.name = basename(<Path>_options.name);
    _options.path = _options.path ? normalize(_options.path) : _options.path;

    const templateSource = apply(
      url('./files'), [
        template({
          ...strings,
          ..._options,
        }),
        move(_options.path || ''),
      ]);

    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ]);

    return rule(_tree, _context);
  };
}