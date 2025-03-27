/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AnalyticsBlueprint,
  createAnalyticsImplementationFactory,
} from './AnalyticsBlueprint';

describe('AnalyticsBlueprint', () => {
  it('should create an extension with sensible defaults', () => {
    const factory = createAnalyticsImplementationFactory({
      deps: {},
      factory: () => ({ captureEvent: () => {} }),
    });

    const extension = AnalyticsBlueprint.make({
      params: {
        factory,
      },
      name: 'test',
    });

    expect(extension).toMatchInlineSnapshot(`
      {
        "$$type": "@backstage/ExtensionDefinition",
        "T": undefined,
        "attachTo": [
          {
            "id": "api:app/analytics",
            "input": "analyticsImplementations",
          },
        ],
        "configSchema": undefined,
        "disabled": false,
        "factory": [Function],
        "inputs": {},
        "kind": "analytics",
        "name": "test",
        "output": [
          [Function],
        ],
        "override": [Function],
        "toString": [Function],
        "version": "v2",
      }
    `);
  });
});
