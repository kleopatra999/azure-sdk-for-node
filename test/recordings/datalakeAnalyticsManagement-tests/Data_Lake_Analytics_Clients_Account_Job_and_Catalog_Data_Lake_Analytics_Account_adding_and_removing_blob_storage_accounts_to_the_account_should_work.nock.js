// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls2224/listKeys?api-version=2017-06-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"f6fOFayRAcnZDL6s+hQElYU2RB4JT15d8Dxagv90oreT9d3ce4yA3PCrlk6QYZM4qHWcchCaW8QKc2YjcKuE9g==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"7lMRuoP5NFUmGNI38NtB/gBBNmRDRckEyuiRsGtcMGe96zZbOUdWYBAMYbeCfq3qNhM96k7D8TxYDNAemZ3/wQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'af420fa1-0927-402f-a5ca-d3c5544143c3',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'af420fa1-0927-402f-a5ca-d3c5544143c3',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092406Z:af420fa1-0927-402f-a5ca-d3c5544143c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls2224/listKeys?api-version=2017-06-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"f6fOFayRAcnZDL6s+hQElYU2RB4JT15d8Dxagv90oreT9d3ce4yA3PCrlk6QYZM4qHWcchCaW8QKc2YjcKuE9g==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"7lMRuoP5NFUmGNI38NtB/gBBNmRDRckEyuiRsGtcMGe96zZbOUdWYBAMYbeCfq3qNhM96k7D8TxYDNAemZ3/wQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'af420fa1-0927-402f-a5ca-d3c5544143c3',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'af420fa1-0927-402f-a5ca-d3c5544143c3',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092406Z:af420fa1-0927-402f-a5ca-d3c5544143c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/StorageAccounts/xplattestadls2224?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/storageAccounts/xplattestadls2224\",\"name\":\"xplattestadls2224\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4a187985-2542-4e07-9ed2-16b4002430a9',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2d8642c4-ea0c-4b14-8ef6-ef346230022d',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092409Z:2d8642c4-ea0c-4b14-8ef6-ef346230022d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/StorageAccounts/xplattestadls2224?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/storageAccounts/xplattestadls2224\",\"name\":\"xplattestadls2224\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4a187985-2542-4e07-9ed2-16b4002430a9',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2d8642c4-ea0c-4b14-8ef6-ef346230022d',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092409Z:2d8642c4-ea0c-4b14-8ef6-ef346230022d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls1506\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls1506\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls2224\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:23:56.9966253Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1234',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1da9c578-6642-412f-b2fc-2f7d21449e01',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '4a53e1ac-e2bb-4fcc-9937-abeaa5c65b92',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092410Z:4a53e1ac-e2bb-4fcc-9937-abeaa5c65b92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls1506\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls1506\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls2224\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:23:56.9966253Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1234',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1da9c578-6642-412f-b2fc-2f7d21449e01',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '4a53e1ac-e2bb-4fcc-9937-abeaa5c65b92',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092410Z:4a53e1ac-e2bb-4fcc-9937-abeaa5c65b92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/StorageAccounts/xplattestadls2224?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '98f7ea4b-ae6e-49de-9796-5437aa4f9a94',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8cffa85a-cfaf-48a5-b60f-faf13d112943',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092412Z:8cffa85a-cfaf-48a5-b60f-faf13d112943',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793/StorageAccounts/xplattestadls2224?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '98f7ea4b-ae6e-49de-9796-5437aa4f9a94',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8cffa85a-cfaf-48a5-b60f-faf13d112943',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092412Z:8cffa85a-cfaf-48a5-b60f-faf13d112943',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls1506\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls1506\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:23:56.9966253Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1163',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c4c6e973-9ff0-4be0-b12f-bbcf0c3810cf',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '2f194e5d-a944-4e42-a103-67489a9d93b5',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092413Z:2f194e5d-a944-4e42-a103-67489a9d93b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls1506\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls1506\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:23:56.9966253Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1163',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c4c6e973-9ff0-4be0-b12f-bbcf0c3810cf',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '2f194e5d-a944-4e42-a103-67489a9d93b5',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092413Z:2f194e5d-a944-4e42-a103-67489a9d93b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:24:12 GMT',
  connection: 'close' });
 return result; }]];