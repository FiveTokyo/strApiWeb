import { Location, NavigationType } from 'react-router-dom'



export const historyUrls: Location[] = []


export function pushHistoryUrl(location: Location, navigationType: NavigationType) {
    if (navigationType === 'POP') {
        return historyUrls.pop()
    }
    if (historyUrls.length === 10) {
        historyUrls.push(location)
        historyUrls.splice(0, 1)
    } else {
        historyUrls.push(location)
    }
}

// export function getPreHistoryUrl() {
//     if (historyUrls.length > 2) return historyUrls.length - 2
// }