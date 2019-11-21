/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client', 'model/OuterBoolean', 'model/OuterComposite', 'model/OuterNumber', 'model/OuterString', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'), require('../model/OuterBoolean'), require('../model/OuterComposite'), require('../model/OuterNumber'), require('../model/OuterString'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.FakeApi = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Client, root.SwaggerPetstore.OuterBoolean, root.SwaggerPetstore.OuterComposite, root.SwaggerPetstore.OuterNumber, root.SwaggerPetstore.OuterString, root.SwaggerPetstore.User);
  }
}(this, function(ApiClient, Client, OuterBoolean, OuterComposite, OuterNumber, OuterString, User) {
  'use strict';

  /**
   * Fake service.
   * @module api/FakeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeApi. 
   * @alias module:api/FakeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterBoolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterBoolean} and HTTP response
     */
    this.fakeOuterBooleanSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterBoolean;

      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterBoolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterBoolean}
     */
    this.fakeOuterBooleanSerialize = function(opts) {
      return this.fakeOuterBooleanSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterComposite} and HTTP response
     */
    this.fakeOuterCompositeSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterComposite;

      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterComposite}
     */
    this.fakeOuterCompositeSerialize = function(opts) {
      return this.fakeOuterCompositeSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterNumber} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterNumber} and HTTP response
     */
    this.fakeOuterNumberSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterNumber;

      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterNumber} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterNumber}
     */
    this.fakeOuterNumberSerialize = function(opts) {
      return this.fakeOuterNumberSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterString} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterString} and HTTP response
     */
    this.fakeOuterStringSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = OuterString;

      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterString} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterString}
     */
    this.fakeOuterStringSerialize = function(opts) {
      return this.fakeOuterStringSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/User} body 
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testBodyWithQueryParamsWithHttpInfo = function(body, query) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithQueryParams");
      }

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/User} body 
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testBodyWithQueryParams = function(body, query) {
      return this.testBodyWithQueryParamsWithHttpInfo(body, query)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    this.testClientModelWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClientModel");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;

      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    this.testClientModel = function(body) {
      return this.testClientModelWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {Blob} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testEndpointParametersWithHttpInfo = function(_number, _double, patternWithoutDelimiter, _byte, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling testEndpointParameters");
      }

      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }

      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }

      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      var authNames = ['http_basic_test'];
      var contentTypes = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var accepts = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {Blob} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testEndpointParameters = function(_number, _double, patternWithoutDelimiter, _byte, opts) {
      return this.testEndpointParametersWithHttpInfo(_number, _double, patternWithoutDelimiter, _byte, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array)
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to -efg)
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testEnumParametersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
      };
      var collectionQueryParams = {
        'enum_query_string_array': {
          value: opts['enumQueryStringArray'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      var formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString'],
        'enum_query_double': opts['enumQueryDouble']
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array)
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to -efg)
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testEnumParameters = function(opts) {
      return this.testEnumParametersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test inline additionalProperties
     * 
     * @param {Object} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testInlineAdditionalPropertiesWithHttpInfo = function(param) {
      var postBody = param;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testInlineAdditionalProperties");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * test inline additionalProperties
     * 
     * @param {Object} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testInlineAdditionalProperties = function(param) {
      return this.testInlineAdditionalPropertiesWithHttpInfo(param)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test json serialization of form data
     * 
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testJsonFormDataWithHttpInfo = function(param, param2) {
      var postBody = null;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }

      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'param': param,
        'param2': param2
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * test json serialization of form data
     * 
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testJsonFormData = function(param, param2) {
      return this.testJsonFormDataWithHttpInfo(param, param2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
