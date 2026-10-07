// All HTTP status codes grouped by category
const statusCodes = {
    "1xx": [100, 101, 102, 103],

    "2xx": [
        200, 201, 202, 203, 204, 205, 206,
        207, 208, 214, 226
    ],

    "3xx": [
        300, 301, 302, 303, 304, 305, 307, 308
    ],

    "4xx": [
        400, 401, 402, 403, 404, 405, 406,
        407, 408, 409, 410, 411, 412, 413, 414,
        415, 416, 417, 418, 419, 420, 421, 422,
        423, 424, 425, 426, 428, 429, 431, 444,
        450, 451, 495, 496, 497, 498, 499
    ],

    "5xx": [
        500, 501, 502, 503, 504, 506, 507, 508,
        509, 510, 511, 521, 522, 523, 525, 530, 599
    ]
};


// Meaning of each status code
const statusMessages = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",

    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    214: "Transformation Applied",
    226: "IM Used",

    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",

    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Request Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    419: "Page Expired",
    420: "Enhance Your Calm",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    444: "No Response",
    450: "Blocked by Windows Parental Controls",
    451: "Unavailable For Legal Reasons",
    495: "SSL Certificate Error",
    496: "SSL Certificate Required",
    497: "HTTP Request Sent to HTTPS Port",
    498: "Token expired/invalid",
    499: "Client Closed Request",

    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    509: "Bandwidth Limit Exceeded",
    510: "Not Extended",
    511: "Network Authentication Required",
    521: "Web Server Is Down",
    522: "Connection Timed Out",
    523: "Origin Is Unreachable",
    525: "SSL Handshake Failed",
    530: "Site Frozen",
    599: "Network Connect Timeout Error"
};


// Get HTML elements
const categorySelect = document.getElementById("category");
const categoryForm = document.querySelector("form");
const statusResults = document.querySelector(".status-results");
const statusDetails = document.querySelector(".status-details");


// Search selected category
categoryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const selectedCategory = categorySelect.value;

    if (!selectedCategory) {

        statusResults.innerHTML = `
            <h2>Status Codes</h2>
            <p>Please select a category.</p>
        `;

        statusDetails.innerHTML = "";

        return;
    }

    const codes = statusCodes[selectedCategory];

    displayStatusCodes(codes);
});


// Display status codes
function displayStatusCodes(codes) {

    statusResults.innerHTML = `
        <h2>Status Codes</h2>
        <div class="status-code-container"></div>
    `;

    const statusCodeContainer =
        document.querySelector(".status-code-container");

    codes.forEach(function (code) {

        const button = document.createElement("button");

        button.type = "button";
        button.textContent = code;
        button.classList.add("status-code-button");

        button.addEventListener("click", function () {
            displayStatus(code);
        });

        statusCodeContainer.appendChild(button);
    });
}


// Display selected status
function displayStatus(code) {

    const message = statusMessages[code];

    const imageUrl = `https://http.cat/${code}.jpg`;

    statusDetails.innerHTML = `
        <h2>${code}</h2>
        <p>${message}</p>
        <img src="${imageUrl}" alt="HTTP Cat representing ${code}">
    `;
}