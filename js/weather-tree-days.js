﻿
function controlWeather3DaysLoad() {
    let weather3Days = document.createElement('div');
    weather3Days.className = '';
    weather3Days.id = 'weather3dId';

    let weather3DaysPanel = document.createElement('div');
    weather3DaysPanel.className = 'widget-part';
    weather3DaysPanel.id = 'weather3DaysPanelId';
    
    let weather3daysSubHeaderh3Id = document.createElement('div');
    weather3daysSubHeaderh3Id.className = 'ph3';
    
    let firstDayPanelTitle = document.createElement('span');
    firstDayPanelTitle.innerText = 'DayPanelTitleId1';
    firstDayPanelTitle.className = 'fancy-days-title';
    firstDayPanelTitle.id = 'DayPanelTitleId1';

    let firstDayPanel = document.createElement('span');
    firstDayPanel.innerText = '';
    firstDayPanel.className = 'fancy-days';
    firstDayPanel.id = 'DayPanelId1';

    let secondDayPanelTitle = document.createElement('span');
    secondDayPanelTitle.innerText = 'DayPanelTitleId2';
    secondDayPanelTitle.className = 'fancy-days-title';
    secondDayPanelTitle.id = 'DayPanelTitleId2';

    let secondDayPanel = document.createElement('span');
    secondDayPanel.innerText = '';
    secondDayPanel.className = 'fancy-days';
    secondDayPanel.id = 'DayPanelId2';

    let threeDayPanelTitle = document.createElement('span');
    threeDayPanelTitle.innerText = 'DayPanelTitleId3';
    threeDayPanelTitle.className = 'fancy-days-title';
    threeDayPanelTitle.id = 'DayPanelTitleId3';

    let threeDayPanel = document.createElement('span');
    threeDayPanel.innerText = '';
    threeDayPanel.className = 'fancy-days';
    threeDayPanel.id = 'DayPanelId3';

    weather3daysSubHeaderh3Id.appendChild(firstDayPanelTitle);
    weather3daysSubHeaderh3Id.appendChild(firstDayPanel);
    weather3daysSubHeaderh3Id.appendChild(secondDayPanelTitle);
    weather3daysSubHeaderh3Id.appendChild(secondDayPanel);
    weather3daysSubHeaderh3Id.appendChild(threeDayPanelTitle);
    weather3daysSubHeaderh3Id.appendChild(threeDayPanel);

    weather3DaysPanel.appendChild(weather3daysSubHeaderh3Id);
    weather3Days.appendChild(weather3DaysPanel);       

    return weather3Days;
}

//3. Прогноз погоды на три дня
//день недели в полном формате
//средняя температура
//иконка погоды
