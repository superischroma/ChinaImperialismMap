// The Statement of the Boxers: poi-boxer
// Execution of the Boxers: poi-beijing
// A Path of Destruction: poi-carving
// A Higher Perspective: poi-control
// Foreign Influence in China: everything else

const WINDOW_ELEMENTS = new Map([
    ["poi-boxer", [
        "<b>The Statement of the Boxers</b>",
        "As a result of foreign influence in China, many \
        of the citizens grew anti-foreign and anti-imperialist ideals. \
        Parts of the public believed they were being exploited and \
        manipulated by Western countries. Eventually, individuals \
        would start banding together to form groups which protested \
        against Western influence. One of these groups, known in the \
        West as the Boxers, used violence and terror to prove their \
        point against imperialism. They were the most radical, and \
        therefore they would receive the most hate from the general public."
    ]],
    ["poi-beijing", [
        "<b>The Execution of the Boxers</b>",
        "The Boxer rebellion being shut down quickly after \
        it was originally created strongly projects the impact \
        of the West's influence in China. Chinese law enforcement \
        officers were coerced into following the orders of those who \
        had large spheres of influence in the nation. Despite the Boxers' \
        harsh and otherwise deadly approach to protesting against the \
        West, the almost imperial-like powers remained ignorant and \
        handled opposition with force rather than communication. This \
        furthers the idea that Western nations did not care for China \
        or its people in the slightest, and they only wanted to secure \
        their own interests.",
        new URL("https://cdn.quest.eb.com/images/134/134_1737/134_1737813-W.jpg")
    ]],
    ["poi-carving", [
        "<b>A Path of Destruction</b>",
        "In this political cartoon, depictions of Great Britain, Germany, \
        France and Russia and Japan are seen carving \"spheres of influence\" \
        into a board. A depiction of China stands in the back and watches in \
        horror as they try to stop the Western nations. China's emotions display \
        exactly what the citizens of the nation thought after the West established \
        dominance in the region: distress, worry, fright, and panic. On the flip \
        side, the countries carving into the board seem to be having a good time, \
        tearing apart the board as they attempt to create the largest spheres \
        possible. China tries to intervene, but they are too caught up in their \
        own interests that they don't even think to consider those who reside in China.",
        new URL("https://cdn.quest.eb.com/images/115/115_2738/115_2738171-W.jpg")
    ]],
    ["poi-control", [
        "<b>A Higher Perspective</b>",
        "The fact that even after all the retaliation in China against foreign influence, \
        Western nations refused to acknowledge it and instead punished the country even \
        harder. The purpose of foreign influence in China is clear; it was a merely \
        selfish effort in order to profit and exploit the Chinese economy. They \
        believed the Chinese were weak and defenseless, so they knew they could \
        always get their way regardless of what the numerous riots tried to provoke."
    ]],
    ["poi-yangtze", [
        "<b>British Control in Southern China</b>",
        "During the frenzy to establish spheres of influence in China, the British chose to \
        hold territory near the Yangtze River, one of two major rivers which control \
        much water access in China, and across the treacherous Tibetan plateau. This \
        tactical placement most likely allowed them to manipulate how water gets \
        distributed in China, which allowed them to profit."
    ]],
    ["poi-japan", [
        "<b>Japanese Coastal Territory</b>",
        "Despite most countries seizing large amounts of territory from the Chinese, the \
        Japanese only took control of a small portion of the country in the Fukien province. \
        Their primary goal in China was likely to exploit its economy, as did many others who \
        shared spheres of influence in the nation."
    ]],
    ["poi-russia", [
        "<b>Russians in China</b>",
        "The Russians seized an extremely large quantity of land in China and all of modern-day Mongolia \
        during this period of time. Similarly to those who also set up spheres of influence, \
        the Russian objective inside of the country was to profit off of the premature \
        economy which had been stuck in the past at the time of mass imperialism."
    ]],
    ["poi-france", [
        "<b>French Influence in Southern Provinces</b>",
        "As seen in the actions of numerous other European and Western-oriented countries, \
        France decided to join in and seize control of the two southern provinces of Yunnan \
        and Kwangsi. This establishment is directly south of the British sphere of influence, as well."
    ]],
    ["poi-overall", [
        "<b>Further Map Proof of Influence</b>",
        "The map provides proof that Western countries had large influence on China and its \
        citizens during this period of time. It displays China, a growing country, being \
        forced onto the world stage and instantly being surrounded by others who wish to \
        only exploit it. Although we still don't understand why foreign nations were \
        interested in China, there are a number of guesses which could be made about the \
        Asian nation. The map indicates the West might've wanted natural resources or products \
        that could only be manufactured in China.",
        new URL("http://portsmouthpeacetreaty.org/process/causes/images/12-China-Westrn-Influ-LG.jpg")
    ]]
]);

let ACTIVE_STATUS = 0;
const STATUS_ELEMENTS = [
    ["Interactive Chinese Imperialism Map",
    "Thank you for taking time out of your day to \
    experience my interactive Chinese imperialism \
    map! Following the completion of this activity, \
    you should be able to identify why so many people \
    interested in China in the late 19th century and \
    how the citizens of the country reacted to this \
    foreign influence. To interact with the map, simply \
    click one of the red or purple dots and analyze the \
    information displayed in the pop-ups. Red dots indicate \
    information which relates to a certain area or group \
    during the time, while purple dots indicate that which \
    relates to the entire country during this time. Citations \
    for images/text can be accessed by clicking the C icon \
    directly below this text. I hope you will enjoy my \
    artifact for the imperalism project!"],
    ["Citations",
    "<i>Boxer Rebellion</i>. Fine Art. \
    <i>Britannica ImageQuest</i>, Encyclopædia Britannica, \
    25 May 2016. quest.eb.com/search/134_1737813/1/134_1737813/cite. \
    Accessed 23 Feb 2022.<br>\
    \
    \"China.\" <i>Britannica School</i>, Encyclopædia Britannica, 1 Nov. 2021. school.eb.com/\
    levels/high/article/China/117321. Accessed 18 Feb. 2022.<br>\
    \
    <i>China In Distress</i>. Photographer. <i>Britannica ImageQuest</i>, Encyclopædia\
     Britannica, 25 May 2016. quest.eb.com/search/115_2738171/1/115_2738171/cite. \
     Accessed 23 Feb 2022.<br>\
    \
    \"Foreign Spheres of Influence in China.\" <i>Portsmouth Peace Treaty</i>, Charles B. \
    Doleac, 2022, portsmouthpeacetreaty.org/process/causes/images/12-China-Westrn-Influ-LG.jpg. \
    Accessed 18 Feb. 2022. Map.<br>\
    \
    Wasserstrom, Jeffrey. \"Boxer Rebellion.\" <i>America in the World</i>, 1776 to the \
    Present: A Supplement to the Dictionary of American History, edited by \
    Edward J. Blum, vol. 1, Charles Scribner's Sons, 2016, pp. 147-149. Gale In \
    Context: U.S. History, link.gale.com/apps/doc/CX3630800088/\
    UHIC?u=fair35939e&sid=bookmark-UHIC&xid=0a4645f5. Accessed 25 Feb. 2022.<br>\
    \
    \"File:China blank map.svg.\" <i>Wikimedia Commons, the free media repository</i>. \
    11 Sep 2020, 16:05 UTC. 1 Mar 2022, 17:47 \
    <https://commons.wikimedia.org/w/index.php?title=File:China_blank_map.svg&oldid=455437027>."]
];

let titleElement = document.getElementById("title");
let statusElement = document.getElementById("status");
let citationButtonElement = document.getElementById("citation-button");

loadStatus();
citationButtonElement.addEventListener("click", () =>
{
    ACTIVE_STATUS = ACTIVE_STATUS == 0 ? 1 : 0;
    loadStatus();
});

function loadStatus()
{
    titleElement.innerHTML = STATUS_ELEMENTS[ACTIVE_STATUS][0];
    statusElement.innerHTML = STATUS_ELEMENTS[ACTIVE_STATUS][1];
    statusElement.style.fontSize = ACTIVE_STATUS == 0 ? "18px" : "14px";
    citationButtonElement.innerHTML = ACTIVE_STATUS == 0 ? "C" : "O";
}

for (let elementName of WINDOW_ELEMENTS.keys())
{
    let element = document.getElementById(elementName);
    element.addEventListener("click", (ev) =>
    {
        let popUpWindow = document.createElement("div");
        popUpWindow.classList.add("popup-window");
        /** @type {HTMLElement} */
        let lastElement;
        for (let dataElement of WINDOW_ELEMENTS.get(elementName))
        {
            if (typeof dataElement == "string")
                dataElement = new String(dataElement);
            if (dataElement instanceof String)
            {
                let popUpString = document.createElement("div");
                popUpString.classList.add("popup-string");
                popUpString.innerHTML = dataElement;
                popUpWindow.appendChild(popUpString);
                lastElement = popUpString;
            }
            if (dataElement instanceof URL)
            {
                if (lastElement) lastElement.style.display = "inline-block";
                let popUpImage = document.createElement("img");
                popUpImage.classList.add("popup-image");
                popUpImage.src = dataElement.toString();
                popUpWindow.appendChild(popUpImage);
                lastElement = popUpImage;
            }
        }
        document.body.appendChild(popUpWindow);
        popUpWindow.style.display = "block";
        popUpWindow.style.left = ev.clientX.toString() + "px";
        popUpWindow.style.top = (ev.clientY - Math.max(0, ev.clientY + popUpWindow.offsetHeight - window.innerHeight)).toString() + "px";
        setTimeout(() =>
        {
            document.addEventListener("click", (ev) =>
            {
                if (ev.target instanceof HTMLElement && (ev.target.classList.contains("popup-window") ||
                    ev.target.classList.contains("popup-string") || ev.target.classList.contains("popup-image")))
                    return;
                popUpWindow.remove();
            }, { once: true });
        }, 1);
    });
}