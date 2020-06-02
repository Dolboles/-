
    document.querySelector('.Tabs-header').addEventListener('click', fTabs);

    function fTabs(event) {
        console.log(event);
        if (event.target.className === 'Tab-h') {
            let DataTab = (event.target.getAttribute('data-tab'));
            let TabBody = document.getElementsByClassName('Tab-b');
            for (let i = 0; i < TabBody.length; i++) {
                if (DataTab == i) {
                    TabBody[i].style.display = 'block';
                } else {
                    TabBody[i].style.display = 'none';
                }
            }
        }
    }

