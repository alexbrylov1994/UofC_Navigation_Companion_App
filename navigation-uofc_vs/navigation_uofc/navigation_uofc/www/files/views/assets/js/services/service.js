/*
 * Service settings
 */
var Heritage_Southmount_20_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5519fbc9e4b08511400447b6"
}
var SafeWalk_Alerts_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5510d67fe4b015c39209ac34"
}
var Food_restaurants_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "55119d83e4b0e4b029eeefbd"
}
var Heritage_Northmount_20_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5519cc32e4b0851140044742"
}
var Reports_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "55084c54e4b09359b1c0da2d"
}
var Classroom_Availability_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5519d338e4b0b19108c64370"
}
var parkade_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5519c5abe4b0851140044736"
}

/*
 * Services
 */

var Heritage_Northmount_20_evening_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/evening',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Northmount_20_settings
});

var Heritage_Northmount_20_afternoon_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/afternoon',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Northmount_20_settings
});

var Heritage_Northmount_20_morning_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/morning',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Northmount_20_settings
});

var Heritage_Southmount_20_evening_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/evening',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Southmount_20_settings
});

var Heritage_Southmount_20_afternoon_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/afternoon',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Southmount_20_settings
});

var Heritage_Southmount_20_morning_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/morning',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Heritage_Southmount_20_settings
});

var UofC_News = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'http://www.ucalgary.ca/utoday/feed',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1444190351614',
        'appery-rest': 'df1471df-d7b3-46e3-8eae-7bf09a73930d'
    },
    'dataType': 'xml',
    'type': 'get',
});

var Food_restaurants_menu_food_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/menu_food',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Food_restaurants_settings
});

var Food_restaurants_menu_drinks_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/menu_drinks',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Food_restaurants_settings
});

var Reports_bug_reports_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/bug_reports',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Reports_settings
});

var Reports__files_upload_service = new Apperyio.RestService({
    'url': '{database_url}/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Reports_settings
});

var Reports__files_read_service = new Apperyio.RestService({
    'url': '{database_url}/files/{database_id}/{file_name}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Reports_settings
});

var SafeWalk_Alerts_Alerts_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Alerts',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SafeWalk_Alerts_settings
});

var SafeWalk_Alerts_Alerts_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Alerts/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SafeWalk_Alerts_settings
});

var SafeWalk_Alerts_Alerts_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Alerts/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SafeWalk_Alerts_settings
});

var parkade_parking_information_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/parking_information',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': parkade_settings
});
GenericService = new Apperyio.GenericService({});

var Reports__files_create_service = new Apperyio.RestService({
    'url': '{database_url}/files/{file_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Reports_settings
});

var Classroom_Availability_ScienceTheatres_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ScienceTheatres',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Classroom_Availability_settings
});