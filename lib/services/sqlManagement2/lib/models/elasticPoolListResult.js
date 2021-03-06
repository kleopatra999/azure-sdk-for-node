/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ElasticPoolListResult class.
 * @constructor
 * Represents the response to a list elastic pool request.
 *
 */
class ElasticPoolListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ElasticPoolListResult
   *
   * @returns {object} metadata of ElasticPoolListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ElasticPoolListResult',
      type: {
        name: 'Composite',
        className: 'ElasticPoolListResult',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ElasticPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'ElasticPool'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ElasticPoolListResult;
