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
 * Initializes a new instance of the ExportModel class.
 * @constructor
 * A property containing information about the blobs to be exported for an
 * export job. This property is required for export jobs, but must not be
 * specified for import jobs.
 *
 * @member {array} [blobPath] A collection of blob-path strings.
 *
 * @member {array} [blobPathPrefix] A collection of blob-prefix strings.
 *
 * @member {string} [blobListblobPath] The relative URI to the block blob that
 * contains the list of blob paths or blob path prefixes as defined above,
 * beginning with the container name. If the blob is in the root container, the
 * URI must begin with $root.
 *
 */
class ExportModel {
  constructor() {
  }

  /**
   * Defines the metadata of ExportModel
   *
   * @returns {object} metadata of ExportModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Export',
      type: {
        name: 'Composite',
        className: 'ExportModel',
        modelProperties: {
          blobPath: {
            required: false,
            serializedName: 'blobList.blobPath',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          blobPathPrefix: {
            required: false,
            serializedName: 'blobList.blobPathPrefix',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          blobListblobPath: {
            required: false,
            serializedName: 'blobListblobPath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportModel;
