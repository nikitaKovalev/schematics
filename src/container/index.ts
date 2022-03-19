import { Rule } from '@angular-devkit/schematics';

import { Schema } from '../schema';
import { componentFactory } from '../component.factory';

export function container(_options: Schema): Rule {
  return componentFactory(_options);
}