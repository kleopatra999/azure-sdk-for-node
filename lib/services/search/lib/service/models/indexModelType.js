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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the Index class.
 * @constructor
 * Represents an index definition in Azure Search, which describes the fields
 * and search behavior of an index.
 *
 * @member {string} name The name of the index.
 *
 * @member {array} fields The fields of the index.
 *
 * @member {array} [scoringProfiles] The scoring profiles for the index.
 *
 * @member {string} [defaultScoringProfile] The name of the scoring profile to
 * use if none is specified in the query. If this property is not set and no
 * scoring profile is specified in the query, then default scoring (tf-idf)
 * will be used.
 *
 * @member {object} [corsOptions] Options to control Cross-Origin Resource
 * Sharing (CORS) for the index.
 *
 * @member {array} [corsOptions.allowedOrigins] The list of origins from which
 * JavaScript code will be granted access to your index. Can contain a list of
 * hosts of the form {protocol}://{fully-qualified-domain-name}[:{port#}], or a
 * single '*' to allow all origins (not recommended).
 *
 * @member {number} [corsOptions.maxAgeInSeconds] The duration for which
 * browsers should cache CORS preflight responses. Defaults to 5 mintues.
 *
 * @member {array} [suggesters] The suggesters for the index.
 *
 * @member {array} [analyzers] The analyzers for the index.
 *
 * @member {array} [tokenizers] The tokenizers for the index.
 *
 * @member {array} [tokenFilters] The token filters for the index.
 *
 * @member {array} [charFilters] The character filters for the index.
 *
 * @member {string} [eTag] The ETag of the index.
 *
 */
class Index {
  constructor() {
  }

  /**
   * Defines the metadata of Index
   *
   * @returns {object} metadata of Index
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Index',
      type: {
        name: 'Composite',
        className: 'Index',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          fields: {
            required: true,
            serializedName: 'fields',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FieldElementType',
                  type: {
                    name: 'Composite',
                    className: 'Field'
                  }
              }
            }
          },
          scoringProfiles: {
            required: false,
            serializedName: 'scoringProfiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ScoringProfileElementType',
                  type: {
                    name: 'Composite',
                    className: 'ScoringProfile'
                  }
              }
            }
          },
          defaultScoringProfile: {
            required: false,
            serializedName: 'defaultScoringProfile',
            type: {
              name: 'String'
            }
          },
          corsOptions: {
            required: false,
            serializedName: 'corsOptions',
            type: {
              name: 'Composite',
              className: 'CorsOptions'
            }
          },
          suggesters: {
            required: false,
            serializedName: 'suggesters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SuggesterElementType',
                  type: {
                    name: 'Composite',
                    className: 'Suggester'
                  }
              }
            }
          },
          analyzers: {
            required: false,
            serializedName: 'analyzers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AnalyzerElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Analyzer',
                    className: 'Analyzer'
                  }
              }
            }
          },
          tokenizers: {
            required: false,
            serializedName: 'tokenizers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TokenizerElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Tokenizer',
                    className: 'Tokenizer'
                  }
              }
            }
          },
          tokenFilters: {
            required: false,
            serializedName: 'tokenFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TokenFilterElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'TokenFilter',
                    className: 'TokenFilter'
                  }
              }
            }
          },
          charFilters: {
            required: false,
            serializedName: 'charFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CharFilterElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'CharFilter',
                    className: 'CharFilter'
                  }
              }
            }
          },
          eTag: {
            required: false,
            serializedName: '@odata\\.etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Index;
