export function convertCamelCaseToSentence(camelCaseString: string): string {
  // Insert a space before all capital letters
  const sentence = camelCaseString.replace(/([A-Z])/g, ' $1');

  // Convert the first letter to lowercase
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
