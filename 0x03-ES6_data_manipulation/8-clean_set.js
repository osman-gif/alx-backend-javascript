export default function cleanSet(newSet, startString) {
    if (!startString) return '';
    return Array.from(newSet)
      .filter(value => value.startsWith(startString))
      .map(value => value.replace(startString, '')) 
      .join('-');
}