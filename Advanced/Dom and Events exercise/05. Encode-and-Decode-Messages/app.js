
    function encodeAndDecodeMessages() {
        document.getElementById('main').addEventListener('click', ev => {
            if (ev.target.tagName === 'BUTTON') {
                if (ev.target.textContent === 'Encode and send it') {
                    const message = ev.target.parentNode.querySelector('textarea')
                    const encoded = [...message.value].map(letter => {
                        return String.fromCharCode(
                            letter.charCodeAt(0) + 1)
                    })
                    ev.target.parentNode.parentNode
                        .querySelector('textarea[disabled]')
                        .value = encoded.join('')
                    message.value = ''
                } else {
                    const message = ev.target.parentNode.querySelector('textarea[disabled]')
                    const decoded = [...message.value].map(letter => {
                        return String.fromCharCode(
                            letter.charCodeAt(0) - 1)
                    })
                    message.value = decoded.join('')
                }
            }
        })
    }