if (chrome.commands) {
    chrome.commands.onCommand.addListener(function(command) {
        let speed;
        switch (command) {
            case "speed_0.1x":
                speed = 0.1;
                break;
            case "speed_0.5x":
                speed = 0.5;
                break;
            case "speed_1x":
                speed = 1;
                break;
            case "speed_2x":
                speed = 2;
                break;
        }
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: setVideoSpeed,
                args: [speed]
            });
        });
    });
}

function setVideoSpeed(speed) {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = speed;
    }
}
