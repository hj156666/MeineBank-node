/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// Die Anweisungen werden von oben nach unten abgearbeitet.
//  Der Wert 3000 wird von rechts nach links zugewiesen an die Konstante namens PORT.
//Das einfache Gleichheitszeichen lässt sich also übersetzen mit"... wird zugewiesenan ..."
const PORT = 3000;
// der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	//res ist die Antwort des Servers an den Browser 
	//swd() ist die Anweisung etwas an den Browser zu senden
	//Hello remote World" ist der Wert, der an die Anweisung send() übergeben wird.
	res.send('Hello remote world!\n');
});
// mit listen wird der Server angewiesen, auf den angegebenen HOST und PORT zu lauschen.
app.listen(PORT, HOST);
// Mit der ANweisung console.log() wird dem Server Atministrator auf der Konsole angezeigt, was der Server macht. 
// Der Programierer schreibt dazu in die Runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll.
// Die Werte der Beiden Konstanten HOST und PORT werden in den Ausdruck übergeben. 
// Ein Wert mit anschließenden Runden Klammern steht immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);