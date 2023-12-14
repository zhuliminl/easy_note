var secret = require('./secrets.js');

module.exports = {
    "collections": [
        {
            "from": "../server/docs/swagger",
            "to": "collection",
            "name": "Swagger Petstore",
            "collection_uid": "2052204-37ec8d93-5fee-4711-8b4d-a95cfde67e55",
            "collection_id": "37ec8d93-5fee-4711-8b4d-a95cfde67e55"
        }
    ],
    "key": secret.key
};