/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetNetworkProfile class.
 * @constructor
 * Describes a virtual machine scale set network profile.
 * @member {array} [networkInterfaceConfigurations] Gets or sets the list of
 * network configurations.
 * 
 */
function VirtualMachineScaleSetNetworkProfile(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.networkInterfaceConfigurations) {
      var tempParametersnetworkInterfaceConfigurations = [];
      parameters.networkInterfaceConfigurations.forEach(function(element) {
        if (element) {
          element = new models['VirtualMachineScaleSetNetworkConfiguration'](element);
        }
        tempParametersnetworkInterfaceConfigurations.push(element);
      });
      this.networkInterfaceConfigurations = tempParametersnetworkInterfaceConfigurations;
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineScaleSetNetworkProfile schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineScaleSetNetworkProfile.prototype.serialize = function () {
  var payload = {};
  if (util.isArray(this['networkInterfaceConfigurations'])) {
    payload['networkInterfaceConfigurations'] = [];
    for (var i = 0; i < this['networkInterfaceConfigurations'].length; i++) {
      if (this['networkInterfaceConfigurations'][i]) {
        if (payload['networkInterfaceConfigurations'] === null || payload['networkInterfaceConfigurations'] === undefined) {
          payload['networkInterfaceConfigurations'] = {};
        }
        payload['networkInterfaceConfigurations'][i] = this['networkInterfaceConfigurations'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineScaleSetNetworkProfile schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineScaleSetNetworkProfile.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['networkInterfaceConfigurations']) {
      var tempInstancenetworkInterfaceConfigurations = [];
      instance['networkInterfaceConfigurations'].forEach(function(element1) {
        if (element1) {
          element1 = new models['VirtualMachineScaleSetNetworkConfiguration']().deserialize(element1);
        }
        tempInstancenetworkInterfaceConfigurations.push(element1);
      });
      this['networkInterfaceConfigurations'] = tempInstancenetworkInterfaceConfigurations;
    }
  }

  return this;
};

module.exports = VirtualMachineScaleSetNetworkProfile;