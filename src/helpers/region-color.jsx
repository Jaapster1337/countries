export function regionColor(region){
    switch (region){
        case "Africa":
            return "africa";
        case "Americas":
            return "americas";
        case "Asia":
            return "asia";
        case "Europe":
            return "Europe";
        case "Oceania":
            return "oceania";
        default:
            return "none"
    }
}