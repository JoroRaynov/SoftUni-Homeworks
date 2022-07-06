function encodeAndDecodeMessages() {
    let textAreaElements = document.querySelectorAll('textarea');
    let encodeMsg = textAreaElements[0];
    let decodeMsg = textAreaElements[1];

    let buttonElements = document.querySelectorAll('button');
    let encodeAndSendItButton = buttonElements[0];
    let decodeAndReadItButton = buttonElements[1];

    encodeAndSendItButton.addEventListener('click', onClickSendIt);
    decodeAndReadItButton.addEventListener('click', onClickReadIt);


    function onClickSendIt(e) {

        let textFromEncodeMsg = '';

        // let buttonParent = e.target.parentNode;


        for (const ch of encodeMsg.value) {
            console.log(ch);
            let currCode = ch.charCodeAt(0) + 1;

            textFromEncodeMsg += String.fromCharCode(currCode);

        }
        decodeMsg.value = textFromEncodeMsg;
        encodeMsg.value = '';
    }

    function onClickReadIt(e) {
        let finalDecodeMsg = '';

        for (const ch of decodeMsg.value) {
            let currCode = ch.charCodeAt(0) - 1;

            finalDecodeMsg += String.fromCharCode(currCode);
        }
        decodeMsg.value = finalDecodeMsg;
    }
}